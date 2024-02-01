'use client'
import React, { FormEvent, useEffect, useRef, useState } from "react"
import axios from 'axios'
import {PulseLoader} from 'react-spinners'
import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Header from "@/components/header"


export default function Page(){
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const router = useRouter()
    const notifySuccess = () => toast("You have successfully registered", {
        closeButton:true,
        className: 'border-green text-green'
    });
  const notifyError = (s:string) => toast(s,  {
    closeButton:true,
    className: 'border-red  text-red bg-green',
    closeOnClick: true
});
    

    useEffect(()=>{
        if(user.length > 2 && password.length > 6 && email.length > 2){
            setButtonDisabled(false)
        }
    },[])

    const registerHandler = async(e:FormEvent)=> {
        e.preventDefault()
        setIsLoading(true)
        const body = {email,username:user, password, isVerified:false, isAdmin:false}
        
        try {
            const res = await axios.post('/api/sign-up/route', body)

            if(res.data.message){
            router.push('/login')
            notifySuccess()
        }else{
            console.log(res.data.error);
            notifyError(res.data.error)
            
        }
        } catch (error) {
            if (error instanceof Error){
                console.log('error', error.message)
                notifyError(error.message)
            }
        }finally{
            setIsLoading(false)
        }
        
    }

    return (
       <>
       <Header />
        <div className="h-screen px-4 md:px-24 sm:py-6 py-3  ">
            <ToastContainer />
            <h1 className="font-medium text-center text-black py-3 text-3xl">
                Sign Up {isLoading && <div className="absolute top-44 right-1/2 left-1/2 -translate-x-10 rounded-lg z-10 w-20 bg-slate-100 h-20"><PulseLoader className=" text-white h-10 w-10 inline-block mx-auto -z-50" /></div>}
            </h1>
           <form onSubmit={(e)=>registerHandler(e)} >
           <div className={ " flex flex-col border  z-20 bg-white  px-3 md:px-8 py-5 max-w-sm mx-auto shadow-md rounded-md"}>
                <label htmlFor="username" className="text-sm font-medium text-slate-800 mb-2 mt-4">Username</label>
                <input type="text" id="username" required placeholder="Username eg Colins" onChange={(e)=>setUser(e.target.value)} className="w-full rounded-sm bg-slate-50 text-black focus:bg-white px-4 py-2  font-normal block border text-sm  focus:ring-2 focus:outline-none bg-transparent" />

                <label htmlFor="email" className="text-sm font-medium text-slate-800 mb-2 mt-4">Email</label>
                <input type="email" id="email" required placeholder="Email eg Colins@gmail.com" onChange={(e)=>setEmail(e.target.value)}  className="w-full rounded-sm bg-slate-50 text-black focus:bg-white px-4 py-2  font-normal block border text-sm  focus:ring-2 focus:outline-none bg-transparent" />

                <label htmlFor="password" className="text-sm font-medium text-slate-800 mb-2 mt-4">Password</label>
                <input type="password" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="w-full rounded-sm bg-slate-50 text-black focus:bg-white px-4 py-2  font-normal block border text-sm  focus:ring-2 focus:outline-none bg-transparent" />

                <button type="submit" className="block w-full mt-8 border-none outline-none hover:ring-1  bg-black text-white hover:bg-transparent hover:text-black font-medium py-2 rounded focus:ring-1 focus:bg-transparent focus:text-black">Sign Up Now</button>
                <div className="py-2 text-black font-medium text-sm mt-2">
          Don't already ahve an account? <Link href={'/login'} className=" text-blue-500">Login</Link>
        </div>
            </div>
           </form>
        </div>
       
       </>
    )
}