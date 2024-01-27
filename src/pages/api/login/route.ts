
import { connectToDB } from "@/helpers/mongoose";
import { NextApiResponse, NextApiRequest } from "next";
import { NextResponse } from "next/server";

import User from "@/models/user";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
import { serialize } from "cookie";



export async function POST(req: NextApiRequest, res: NextApiResponse) {
    
  await connectToDB();
  try {
    const data = await req.body;
    console.log(data);
    
    const { email, password } = data;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    console.log(isValid);
    
    if (!isValid) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const secret: string = `${process.env.JWT_TOKEN_SECRET}`;

    const token = jwt.sign(tokenData, secret, {
      expiresIn: "1d",
    });

    const response = res
      .setHeader(
        "Set-Cookie",
        serialize("token", token, {httpOnly: true, maxAge: 103600,path:'/'})
      )
      .json({ message: "Logged In successfully", success: true });
      
      
    return response;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.json({ error: error.message });
    }
  }
}

export default POST;
