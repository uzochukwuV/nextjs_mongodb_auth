import React from 'react'
import Link from 'next/link'
import { MdOutlineEmail, MdOutlineMenu } from 'react-icons/md'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

function Header() {
  return (
    <header className={`bg-black sm:px-16 md:px-20 px-8 z-20`}>
        <div className="block w-full relative">
          <div className="flex justify-between items-center text-xs py-1">
            <div className="flex gap-1 items-center justify-center">
              <MdOutlineEmail scale={2} />
              <p> support@firmstock.com</p>
            </div>
            <div className="flex sm:gap-3">
              <Link href={'/sign-up'} className=" bg-red-900 text-xs text-white outline-none font-medium ring-red-900 hover:ring-1 hover:bg-red-950 hover:ring-red-800 active:bg-red-950 focus:ring-red-500 rounded-sm px-4 py-1">
                OPEN ACCOUNT
              </Link>
              <Link href={'/login'} className="text-xs bg-slate-900  px-4 py-1 rounded-sm font-medium hover:bg-black hover:ring-1 hover:ring-slate-500">
                LOGIN
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center py-4">
            <Link href={'/'}>Logo</Link>
            <div className="peer md:hidden">
              <MdOutlineMenu />
            </div>
            <div className="hidden md:block">
              <ul
                role="list"
                className=" list-none flex gap-4 items-center text-sm *:px-3 *:py-1 *:rounded-sm "
              >
                <li className="hover:bg-slate-700 focus:bg-slate-800">
                  <Link href={"/"}>ABOUT</Link>
                </li>
                <li className="hover:bg-slate-700 focus:bg-slate-800">
                  <Link href={"/"}>TRADING</Link>
                </li>
                <li className="hover:bg-slate-700 focus:bg-slate-800">
                  <Link href={"/"}>INVEST</Link>
                </li>
                <li className="hover:bg-slate-700 focus:bg-slate-800">
                  <Link href={"/"}>PLATFORM</Link>
                </li>
                <li className="hover:bg-slate-700 focus:bg-slate-800">
                  <Link href={"/"}>PARTNERSHIP</Link>
                </li>
                <li className="hover:bg-slate-700 focus:bg-slate-800">
                  <Link href={"/"}>TOOLS</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header