"use client";

import { Inter } from "next/font/google";

import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    return router.push("/home");
  }, []);

  return <main className={` ${inter.className}`}></main>;
}
