"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import NavLink from "./navLink";
import { AnimatePresence, motion } from "framer-motion"
import Image from 'next/image';


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

    const itemVariants = {
        closed: {
          opacity: 0
        },
        open: { opacity: 1 }
      };
      const sideVariants = {
        closed: {
          transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
          }
        },
        open: {
          transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
          }
        }
      };

  return (
    <div  className="h-full flex items-center justify-between px-5 lg:px-8 xl:px-14 text-md ">
        {/* LOGO */}
        <div className=' lg:flex justify-start'> 
            <Link href='/' className='p-1 text-white font-semibold flex items-center justify-center'>
                <div className=' text-[20px]'>
                    <Image src='/UntitledCA LOGO (1).png' width={70} height={36} alt='CA'/>
                </div>
            </Link>
        </div>
        {/* NAVIGATION LINKS */}
        <div className="hidden lg:flex gap-20 text-white" >
            {links.map(link=>(
                <NavLink link={link} key={link.title}/>
            ))}
        </div>     

        {/* RESPONSIVE MENU */}
        <div className='lg:hidden  '> 
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

        <AnimatePresence>
        { open && (

            <motion.aside
            initial={{ width: 1000 }}
            animate={{
              width: 0,
              transition: {  duration: 2 },
              
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 }
            }}
          >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
            <div id='nav' className='absolute z-10 top-0 left-0 w-screen h-full bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
                {links.map(link=>(
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    key={link.title}
                  >
                    <Link onClick={()=> setOpen(false)} href={link.url} key={link.title}>
                        <NavLink link={link} key={link.title}/>
                    </Link>
                    </motion.a>
                ))}
            </div>
            </motion.div>
            </motion.aside>
                  )}
            </AnimatePresence>

        </div>

    </div>
  )
}

export default Navbar