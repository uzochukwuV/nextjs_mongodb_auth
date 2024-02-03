'use client'

import React, { useEffect } from 'react'
import Aos from 'aos'

export default function AosState({children}: {children: React.ReactNode}) {
    useEffect(()=> {
        Aos.init(
            {
                delay:200,
                once: false
            }
        )
    }, [])
  return (
    <div>
        {children}
    </div>
  )
}
