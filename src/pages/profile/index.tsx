
import cookie from 'cookie';


const jwt = require('jsonwebtoken');
import { useRouter } from 'next/navigation';

import { NextPageContext } from 'next'
import { useEffect, useState } from 'react';
import * as k from 'cookie_js';
import axios from 'axios';





 
Page.getInitialProps = async ({req, res}: NextPageContext) => {
    const data = cookie.parse(req ? req.headers.cookie || '': document.cookie)

    if(res){
        console.log(data);
        
        if(Object.keys(data).length === 0 && data.constructor === Object){
            res.writeHead(301, {location:'/'})
            res.end()
        }
    }

    return {
        data: data && data.token!,
    }
}


 
export default function Page({ data }: { data: string }) {
  
    const [user, setUser] = useState<{[key:string]: string}>({})
    const [rdata, setData] = useState(data)
    const router = useRouter()
    k.defaults.secure = false;
    k.defaults.expires = 1;


    useEffect(() => {
      if(rdata){
        const json = jwt.decode(data!) as {[key:string]: string}
        setUser(json)
      }else {
        router.refresh()
        
      }   
    
    }, [rdata])
    
    const logout = ()=> {
      axios.get('/api/logout')
      router.push('/')
    }
       
  
  return (
    <>
    
   {
    user && (
      <main
      className={`flex min-h-screen flex-col bg-black  items-start justify-start p-24`}
    >
      <header className="flex flex-row justify-between w-full">
      <div className="flex flex-row gap-1 items-center py-2">
      
      <h2 className="text-white font-medium inline-block m-0">{user.username!}</h2>
      </div>
      <button onClick={()=>{logout()}} className="border-none ring-1 ring-slate-700 px-4 py-2 rounded-sm bg-black text-white font-medium hover:border-slate-300  hover:opacity-80 ">
        Logout
      </button>
      </header>
      <main className=" min-h-96 ">
        <div className="flex h-full items-center w-full ">
          
        </div>
      </main>
    </main>
    )
   }
    </>
  )
}