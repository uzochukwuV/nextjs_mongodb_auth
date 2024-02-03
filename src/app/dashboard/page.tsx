import React from "react";
// import PropTypes from 'prop-types'
import Image from "next/image";
import { MdAccountBalance, MdAdd, MdWallet } from "react-icons/md";
import { TbMoodDollar } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";

function UserDashboard() {
  return (
    <div className="h-screen pt-14">
      <div className="flex shadow px-2 justify-between items-center py-1 text-sm font-medium text-slate-900">
          <div>
            DASHBOARD
          </div>
          <div className="flex gap-2">
            <button className="bg-slate-800 text-xs text-slate-50 border rounded px-4 py-2 hover:bg-slate-700 flex items-center gap-2"><MdAdd scale='2' fontSize={18} /> Deposit  </button>
            <button className="bg-slate-800 text-xs text-slate-50 border rounded px-4 py-2 hover:bg-slate-700 flex items-center gap-2"><MdWallet scale='2' fontSize={18} /> Withdraw  </button>
          </div>
      </div>
      <div className=" h-full rounded-lg mt-2 px-2">
          <div className="h-40 block md:flex gap-2 text-pretty">
            <div className=" w-full mb-3 md:flex-1 bg-slate-900 rounded-md justify-between shadow-md text-slate-200 flex gap-3 px-2 py-4">
                 
                <div className="flex justify-start items-center">
                <MdAccountBalance fontSize={80} opacity={0.6} />
                  
                </div>
                <div className="font-medium  text-white text-end flex flex-col justify-center gap-2  items-end">
                <p className="text-sm">ACCOUNT BALANCE</p>
                 <span className="text-lg flex items-end justify-end"><FaDollarSign fontWeight='normal' fontSize={20} fontStyle={'italics'} />  2,300,000</span>
                </div>
            </div>
            <div className=" w-full mb-3 md:flex-1 bg-slate-900 rounded-md justify-between shadow-md text-slate-200 flex gap-3 px-2 py-4">
                 
                <div className="flex justify-start items-center">
                <MdAccountBalance fontSize={80} opacity={0.6} />
                  
                </div>
                <div className="font-medium  text-white text-end flex flex-col justify-center gap-2  items-end">
                <p className="text-sm">ACCOUNT BALANCE</p>
                 <span className="text-lg flex items-center"><FaDollarSign fontWeight='normal' fontSize={20} fontStyle={'italics'} />  2,300,000</span>
                </div>
            </div>
            <div className=" w-full mb-3 md:flex-1 bg-slate-900 rounded-md justify-between shadow-md text-slate-200 flex gap-3 px-2 py-4">
                 
                <div className="flex justify-start items-center">
                <MdAccountBalance fontSize={80} opacity={0.6} />
                  
                </div>
                <div className="font-medium  text-white text-end flex flex-col justify-center gap-2  items-end">
                <p className="text-sm">ACCOUNT BALANCE</p>
                 <span className="text-lg flex items-end justify-end"><FaDollarSign fontWeight='normal' fontSize={20} fontStyle={'italics'} />  2,300,000</span>
                </div>
            </div>
            
            
          </div>
      </div>
    </div>
  );
}

export default UserDashboard;
