import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      once:false,
      duration:800,
      delay: 500,
    })
  }, [])
  
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"
        defer
      />
      
    </>
  );
}
