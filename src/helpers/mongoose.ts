import mongoose from "mongoose";

let isConnected: boolean;

export const connectToDB =async () => {
    if(!process.env.MONGODB_URI) return console.error('MONGODB_URL NOT FOUND');
    if(isConnected) return;

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('....connecting')
        isConnected = true
    } catch (e) {
        console.log('not connected');
        
    }
}