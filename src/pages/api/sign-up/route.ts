import { connectToDB } from "@/helpers/mongoose";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from "next";


export async function POST(req:NextApiRequest, res:NextApiResponse) {
    await connectToDB();

    try{
        const body = await req.body
        const {username, email, password} = body;
        

        const user = User.findOne({email})
        if(await user){
            return res.json({error:'User already exist'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser =  new User({username, email,password:hashedPassword});
        const savedUser = await newUser.save();
        return res.json({message:'User created Successfully', success:true, savedUser})
        
    }catch(e){
        return res.json({error:'could not create User'});
    }

    return req

}

export default POST;