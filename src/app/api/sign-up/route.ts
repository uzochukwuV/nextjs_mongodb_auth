import { connectToDB } from "@/helpers/mongoose";
import User from "@/models/user";
import bcrypt from 'bcrypt';



export async function POST(req:Request) {
    await connectToDB();
    console.log('siad it is connecting');
    

    try{
        const body = await req.json()
        const {username, email, password} = body;
        console.log(username);
        
        

        const user = User.findOne({email})
        console.log('tried finding o e');
        
        if(await user){
            return Response.json({error: 'Invalid Email, not Registered'}, {status:401})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser =  new User({username, email,password:hashedPassword});
        const savedUser = await newUser.save();
        return Response.json({message: 'User created Successfully', success:true, data: savedUser}, {status:201})
        
    }catch(e){
        return Response.json({error: 'Couldnt create User', e}, {status:501})
    }



}
