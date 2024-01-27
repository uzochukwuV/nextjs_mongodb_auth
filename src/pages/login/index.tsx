"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import {ToastContainer, toast} from 'react-toast';
import { GetServerSideProps } from "next";



export default function Page() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (password.length > 6 && email.length > 2) {
      setButtonDisabled(false);
    }
  }, []);

  const loginHandler = async () => {
    setIsLoading(true);
    const body = { email, password };

    try {
      const res = await axios.post("/api/login/route", body);

      if (res.status === 200) {
        router.push('/profile')
        
      }else {
        console.log(res.data.error);
        
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("error", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen px-24 py-6 bg-white  text-black">
      <h1 className="font-medium text-center py-3 text-3xl">
        Login Now{" "}
        {isLoading && (
          <div className="absolute top-44 right-1/2 left-1/2 -translate-x-10 rounded-lg z-10 w-20  h-20">
            <PropagateLoader className=" text-white h-10 w-10 inline-block mx-auto -z-50" />
          </div>
        )}
      </h1>
      <div
        className={
          " flex flex-col ring-1 shadow-sm z-20 bg-white rounded-sm px-8 py-5 max-w-sm mx-auto "
        }
      >
        <label
          htmlFor="username"
          className="text-sm font-medium text-slate-800 mb-2 mt-4"
        >
          Email
        </label>
        <input
          type="email"
          id="username"
          placeholder="Email eg Colins@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-sm px-4 py-4  font-normal block border text-sm  focus:ring-2 focus:outline-none bg-transparent"
        />

        <label
          htmlFor="password"
          className="text-sm font-medium text-slate-800 mb-2 mt-4"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-sm px-4 py-4  font-normal block border text-sm  focus:ring-2 focus:outline-none bg-transparent"
        />

        <button
          onClick={() => loginHandler()}
          className="block w-full mt-8 border-none outline-none hover:ring-1  bg-slate-300 text-black hover:bg-transparent hover:text-black font-medium py-4 rounded focus:ring-1 focus:bg-transparent focus:text-black"
        >
          Login
        </button>
      </div>
    </div>
  );
}
