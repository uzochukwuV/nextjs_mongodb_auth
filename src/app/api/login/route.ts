
import { connectToDB } from "@/helpers/mongoose";



import User from "@/models/user";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { SECRET_JWT_TOKEN } from "@/constants";


export const dynamic = 'force-dynamic'
export async function POST(req: Request) {
    
  await connectToDB();
  try {
    const body = await req.json()
    console.log(body);
    
    const { email, password } = body;
    console.log(email);
    
    const user = await User.findOne({ email });
    if (!user) {
      return Response.json({message: 'Invalid Email, not Registered'}, {status:401})
    }

    const isValid = await bcrypt.compare(password, user.password);
    console.log(isValid);
    
    if (!isValid) {
      return Response.json({message: 'Invalid credentials'}, {status:401})
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };


    const token = jwt.sign(tokenData, SECRET_JWT_TOKEN, {
      expiresIn: "1d",
    });

    const response = Response.json({message: "Logged In successfully", success: true }, {status:200, headers: { 'Set-Cookie': `${serialize("token", token, {httpOnly: true, maxAge: 103600,path:'/'})}` }})
      
      
    return response;
  } catch (error) {
    
    if (error instanceof Error) {
      return Response.json({error})
    }
  }
}

