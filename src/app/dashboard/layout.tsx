import Image from 'next/image'
import { MdAccountBalanceWallet, MdAttachMoney, MdDashboard, MdInbox, MdManageAccounts, MdMoneyOffCsred, MdPerson } from 'react-icons/md'

import React from 'react'
import { IoMdLogOut } from 'react-icons/io'

export default function Layout({children}: {children:React.ReactNode}) {
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-slate-950 border-b border-gray-200 daee:bg-gray-800 daee:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 daee:text-gray-400 daee:hover:bg-gray-700 daee:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img
                  src="/tet.jpg"
                  className="h-6 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap daee:text-white">
                  Flowbite
                </span>
              </a>
            </div>
            <div className="flex items-center relative">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm  bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 daee:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="w-8 h-6 rounded-full"
                      src="/test.jpg"

                      alt="user photo"
                      height={50}
                      width={50}
                    />
                    {/* https://flowbite.com/docs/images/people/profile-picture-5.jpg */}
                  </button>
                </div>
                <div
                  className="z-50 hidden absolute top-5 right-4 shadow-md bottom-0 my-4 peer-focus:block text-base list-none bg-white divide-y divide-gray-100 rounded  daee:bg-gray-700 daee:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900  daee:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate daee:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-800 hover:text-white rounded daee:text-gray-300 daee:hover:bg-gray-600 daee:hover:text-white"
                        role="menuitem"
                      >
                      
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-800 hover:text-white  daee:text-gray-300 daee:hover:bg-gray-600 daee:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-800 hover:text-white  daee:text-gray-300 daee:hover:bg-gray-600 daee:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-800 hover:text-white  daee:text-gray-300 daee:hover:bg-gray-600 daee:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 daee:bg-gray-800 daee:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white daee:bg-gray-800">
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded daee:text-white hover:bg-slate-800 hover:text-white daee:hover:bg-gray-700 group"
              >
                <MdDashboard />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded daee:text-white hover:bg-slate-800 hover:text-white daee:hover:bg-gray-700 group"
              >
               <MdAccountBalanceWallet />
                <span className="flex-1 ms-3 whitespace-nowrap">Trade</span>
                <span className="flex items-center justify-center px-1 ms-3 text-xs font-medium text-transparent bg-green-700 rounded-full daee:bg-gray-700 daee:text-gray-300">
                  jr
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded daee:text-white hover:bg-slate-800 hover:text-white daee:hover:bg-gray-700 group"
              >
                <MdInbox />
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Badge</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-2 ms-3 text-xs font-medium text-blue-800 bg-blue-100 rounded-full daee:bg-blue-900 daee:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded daee:text-white hover:bg-slate-800 hover:text-white daee:hover:bg-gray-700 group"
              >
                <MdAttachMoney />
                <span className="flex-1 ms-3 whitespace-nowrap">Deposit</span>
              </a>
            </li>
            
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded daee:text-white hover:bg-slate-800 hover:text-white daee:hover:bg-gray-700 group"
              >
                <MdMoneyOffCsred />
                <span className="flex-1 ms-3 whitespace-nowrap">Withdrawal</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded daee:text-white hover:bg-slate-800 hover:text-white daee:hover:bg-gray-700 group"
              >
                <MdManageAccounts />
                <span className="flex-1 ms-3 whitespace-nowrap">Setting</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded daee:text-white hover:bg-slate-800 hover:text-white daee:hover:bg-gray-700 group"
              >
                <IoMdLogOut />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
       {children}
      </div>
    </div>
  )
}
