import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import sr from '.././../public/favicon.ico';
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  return (
    <main
      className={`flex min-h-screen flex-col bg-black  items-start justify-start p-24 ${inter.className}`}
    >
      <header className="flex flex-row justify-between w-full">
      <div className="flex flex-row gap-1 items-center py-2">
      <Image src={sr} loading="lazy" height={40} alt="vercel" />
      <h2 className="text-white font-medium inline-block m-0">Vercel</h2>
      </div>
      <button onClick={()=>{router.push('/sign-up')}} className="border-none ring-1 ring-slate-700 px-4 py-2 rounded-sm bg-black text-white font-medium hover:border-slate-300  hover:opacity-80 ">
        Go To Home Page
      </button>
      </header>
      <main className=" min-h-96 ">
        <div className="flex h-full items-center w-full ">
          
        </div>
      </main>
    </main>
  );
}
