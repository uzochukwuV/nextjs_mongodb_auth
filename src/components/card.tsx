import React from "react";
import {
  MdOutlineChecklist,
  MdPriceCheck,
  MdCheckCircle,
  MdCheck,
} from "react-icons/md";

function Card() {
  return (
    <div className="relative w-[300px] fade-right  bg-white border border-gray-200 rounded-lg shadow"  >
      <div className="bg-slate-900 p-4">
        <p className="mb-4 text-black-500 font-bold">ACCOUNT PLAN TYPE</p>
        <h5 className="mb-2 text-yellow-600 text-2xl font-medium  ">
          Amatuer Plan
        </h5>
      </div>
      <div className="p-4 sm:p-4">
      <div className=" items-baseline text-gray-900 dark:text-white border-b border-b-red-300 py-4">
        <div className="text-5xl text-center w-full font-bold tracking-tight text-slate-800">
          80 <span className="text-xs text-slate-600">%</span>
        </div>
        <span className="text-sm text-center mx-auto block text-slate-500 font-semibold">
          Guaranteed ROI After 24 Hours
        </span>
        {/* <span className="ms-1 text-xl font-normal text-gray-800 dark:text-gray-400">
          /month
        </span> */}
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex">
          <MdCheck color="red" />
          <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-400 ms-3">
            Min Deposit: 200$
          </span>
        </li>
        <li className="flex  decoration-gray-500">
          <MdCheck color="red" />
          <span className="text-base font-normal leading-tight text-gray-800 ms-3">
            Max Deposit: 500$
          </span>
        </li>
       
        
        <li className="flex  decoration-gray-500">
          <MdCheck color="red" />
          <span className="text-base font-normal leading-tight text-gray-800 ms-3">
            Peak Percentage profit: 150%
          </span>
        </li>

        <li className="flex  decoration-gray-500">
          <MdCheck color="red" />
          <span className="text-base font-normal leading-tight text-gray-800 ms-3">
            Referral Bonus: <span className="text-yellow-500">20%</span>
          </span>
        </li>
        
      </ul>
      <button
        type="button"
        className="text-white bg-slate-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-slate-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Choose plan
      </button>
      </div>
    </div>
  );
}

export default Card;
