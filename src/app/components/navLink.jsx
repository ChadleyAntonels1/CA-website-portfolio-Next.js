"use client";


import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";



const NavLink = ({link}) => {
  const pathName = usePathname();
  console.log(pathName)

  return (
    <Link className={` rounded p-1 ${pathName === link.url && 'px-2 underline underline-offset-8 decoration-violet text-white text-md'}`} href={link.url}>{link.title}</Link>
  )
}

export default NavLink 