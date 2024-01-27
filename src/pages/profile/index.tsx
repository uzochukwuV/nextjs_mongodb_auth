import cookie from 'cookie';

import { SECRET_JWT_TOKEN } from '@/constants';
const jwt = require('jsonwebtoken');

import { NextPageContext } from 'next'
import { useEffect, useState } from 'react';

 
Page.getInitialProps = async ({req, res}: NextPageContext) => {
    const data = cookie.parse(req ? req.headers.cookie || '': document.cookie)

    if(res){
        if(Object.keys(data).length === 0 && data.constructor === Object){
            res.writeHead(301, {location:'/'})
            res.end()
        }
    }

    return {
        data: data && data.token,
    }
}


 
export default function Page({ data }: { data: string }) {
    const [user, setUser] = useState<{[key:string]: string}>({})

    useEffect(() => {
      if(data){
        const json = jwt.decode(data) as {[key:string]: string}
        setUser(json)
      }else {
        console.log('sth went wrong??');
        
      }
      
    
    }, [])
    
       
  
  return (
    <>
    {user.username!}
    </>
  )
}