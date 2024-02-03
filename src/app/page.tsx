'use client'


import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Home } from "./home/page";
import AosState from "@/components/aos";
import Aos from "aos";
import { useEffect } from "react";




export default function Page() {
  useEffect(()=> {
    Aos.init({
      once: false
    })
  })
  return (
    <>
      <AosState>
      <main className={` ${inter.className}`}>
       <Home />
      </main>
      
      </AosState>
    </>
  );
}
