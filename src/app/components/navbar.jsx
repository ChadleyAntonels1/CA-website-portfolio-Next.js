"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import NavLink from "./navLink";
import { motion } from "framer-motion"


const links = 
    [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'About',
            url: '/about'
        },
        {
            title: 'Contact',
            url: '/contact'
        },
        {
            title: 'Portfolio',
            url: '/portfolio'
        },

    ]


const Navbar = () => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open){
          document.getElementById("nav")
        }
          },[open]);

    // framer varients
    const topVarients={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor:'rgb(255,255,255,255)'
        }
    }

    const centerVarients={
        closed:{
            opacity:1,
        },
        opened:{
            opacity:0,
        }
    }

    const bottomVarients={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:-45,
            backgroundColor:'rgb(255,255,255,255)'
        }
    }


  return (
    <div  className="h-full flex items-center justify-between px-8 sm:px-8 md:px-36 lg:px-56 xl:px-96 text-md">
        {/* LOGO */}
        <div className=' lg:flex justify-start'> 
            <Link href='/' className='p-1 text-white font-semibold flex items-center justify-center'>
                <div className='text-[20px]'>Chadley Antonels</div>
            </Link>
        </div>
        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex gap-6 text-white" >
            {links.map(link=>(
                <NavLink link={link} key={link.title}/>
            ))}
        </div>     

        {/* RESPONSIVE MENU */}
        <div className='md:hidden '> 
        {/* button MENU */}
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={(()=>setOpen((!open)))}>
            <motion.div variants={topVarients} 
                        animate={open ? "opened" : "closed"} 
                        className='w-10 h-1 bg-white rounded-xl origin-left'>

            </motion.div>
            <motion.div variants={centerVarients} 
                        animate={open ? "opened" : "closed"} 
                        className='w-10 h-1 bg-white rounded-xl'>
            </motion.div>
            <motion.div variants={bottomVarients} 
                        animate={open ? "opened" : "closed"} 
                        className='w-10 h-1 bg-white rounded-xl origin-left'>
            </motion.div>
        </button>
        {/* Menu List */}
        { open && (
            <div id='nav' className='absolute z-10 top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
                {links.map(link=>(
                    <Link onClick={()=> setOpen(false)} href={link.url} key={link.title}>
                        <NavLink link={link} key={link.title}/>
                    </Link>
                ))}
            </div>
                  )}
        </div>

    </div>
  )
}

export default Navbar