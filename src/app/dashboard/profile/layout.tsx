import React from "react"

 
export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className="text-black text-center">
      Working ..............
      <main>{children}</main>
    </div>
  )
}