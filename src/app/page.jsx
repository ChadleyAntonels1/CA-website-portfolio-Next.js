"use client"
import React from 'react'
import Link from "next/link";
import Image from "next/image";

import Spline from "@splinetool/react-spline";
import {easeIn, easeInOut, motion, } from "framer-motion"
import { ChevronRight } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const cardVariants= {
  offscreen: {
    // change to "opacity 0" when finsihed with project
    opacity: 0,
    

  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 4,
    },
    whileInView: 1,    
  }
};

const Homepage = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return  <div className="">
{/* spline animation */}
            
            <div className=' bg-black grid justify-items-center items-center '>
               <Spline scene="https://prod.spline.design/Y0HqeaPUaViMHRdq/scene.splinecode" className=' lg:px-40 xl:px-80 ' />

{/* hero 1*/}

            </div>

            <div className=' '>
                <motion.div   variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 1 }}
                                className="z-20 grid justify-items-center items-center text-center ">      

                 <div className="bg-zinc-950 ring-zinc-900  rounded-lg w-[16rem] sm:w-[26rem] md:w-[35rem] lg:w-[44rem] xl:w-[60rem] grid grid-col-4 p-4 sm:p-10">
                  <div className="h-auto grid row-start-1 col-span-4">
                        <h1 className=" text-white font-extrabold text-[14px] lg:text-[16px] pb-4">
                          Frontend Web Developer
                        </h1>
                  </div>               
                  <div className=" h-auto grid row-start-2 col-span-4 ">
                        <p className=" text-white font-regular text-[10px] lg:text-[12px] pb-8">
                          I specialize in functional and responsive websites. 
                          My core competencies include HTML, CSS, JavaScript, React.js, Next.js and Node.js .
                        </p>
                  </div>
                  <div className="h-auto grid justify-items-center col-span-4 ">
                        <button className="bg-violet text-white font-regular text-xs text-center min-w-[100px] min-h-[25px] rounded-lg">
                        <Link className="bg-violet text-white font-regular grid items-center text-xs min-w-[100px] min-h-[25px] rounded-lg" href="/about">Learn more</Link>
                        </button>
                  </div>
                 </div>
              </motion.div>   
            </div >

              

{/* hero 2*/}

<div className=' bg-cover bg-center py-8 xl:py-20 grid justify-items-center items-center'>
<Spline scene="https://prod.spline.design/BNROLl7oAWkA4E7x/scene.splinecode"  className='absolute'/>

<div className='relative'>
              <motion.div   variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                className="grid gap-6 justify-items-center items-center text-center">      

                 <div className=" gap-4 rounded-lg h-auto w-[16rem] sm:w-[26rem] md:w-[35rem] lg:w-[44rem] xl:w-[60rem] grid grid-col-4">
                  <div initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                className=" grid row-start-1 col-span-4 p-3 sm:p-10">
                    <h1 className=" text-violet font-extrabold text-[14px] lg:text-[16px] p-3">
                    Step into my portfolio and explore a showcase of projects and freelancing
                    </h1>
                  </div>               

                 <Link target='_blank' 
                       href="https://expensetracker-chadleyantonels1s-projects.vercel.app/" 
                       className="backdrop-blur-sm bg-zinc-950/0 ring-zinc-900  rounded-lg h-auto col-start-1 row-start-2 col-span-2">
                    <div className='grid justify-items-center py-5'>
                          <Image src='/Untitledas.png' alt="" width={100} height={1000}  className="w-fill h-fill p rounded-lg"/>
                      <h1 className=" text-violet font-extrabold text-[12px] lg:text-[14px] mt-2 py-5">
                        Expense Tracker app
                      </h1>
                      <p className='text-white text-[10px] lg:text-[12px] p-3'>
                        Keep Track of you income and expenses with our expense tracker.
                      </p>      
                    </div>           
                 </Link>

                 <Link target='_blank' 
                       href="https://chadleyantonels1.github.io/JS-todolist/" 
                       className=" backdrop-blur-sm	 bg-zinc-950/0 ring-zinc-900  rounded-lg h-auto col-start-3 row-start-2 col-span-2">
                  <div className='grid justify-items-center py-5'>
                        <Image src='/Untitledtodo listapp.png' alt="" width={100} height={1000}  className="w-fill h-fill rounded-lg"/>
                      <h1 className=" text-violet font-extrabold text-[12px] lg:text-[14px] mt-2 py-5">
                          To-do List app
                      </h1>  
                      <p className='text-white text-[10px] lg:text-[12px] p-3'>
                        Transform Your Productivity with our To-Do List and stay organsied.
                      </p>
                    </div>
                 </Link>
                 </div>
                 </motion.div>


                 <motion.div   variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                className="grid gap-6 justify-items-center items-center text-center">      

                 <div className=" gap-4 rounded-lg h-auto w-[16rem] sm:w-[26rem] md:w-[35rem] lg:w-[44rem] xl:w-[60rem] grid grid-col-4">
                 <Link target='_blank' 
                       href="https://next14-starter-two.vercel.app/" 
                       className="backdrop-blur-sm bg-zinc-950/0 ring-zinc-900  rounded-lg h-auto justify-items-center grid row-start-3 col-span-4 p-3 sm:p-10">
                 <Carousel plugins={[plugin.current]}>
                     <CarouselContent >
                        <CarouselItem >
                            <Image src='/UntitledSCREENBLOG (3).png' alt="" width={400} height={100}  className="w-fill h-fill rounded-lg  "/>
                        </CarouselItem>
                        <CarouselItem >
                            <Image src='/UntitledSCREENBLOG (1).png' alt="" width={400} height={100}  className="w-fill h-fill rounded-lg"/>
                    </CarouselItem>
                    <CarouselItem >
                            <Image src='/UntitledSCREENBLOG (2).png' alt="" width={400} height={100}  className="w-fill h-fill rounded-lg"/>
                    </CarouselItem>
                    <CarouselItem >
                            <Image src='/UntitledSCREENBLOG (4).png' alt="" width={400} height={100}  className="w-fill h-fill rounded-lg"/>
                    </CarouselItem>
                    <CarouselItem >
                            <Image src='/UntitledSCREENBLOG.png' alt="" width={400} height={100}  className="w-fill h-fill rounded-lg"/>
                    </CarouselItem>
                    </CarouselContent>
                  </Carousel>
                  <h1 className=" text-violet font-extrabold text-[12px] lg:text-[14px] p-5">
                       Blogging website
                  </h1> 
                  <p className='text-white text-[10px] lg:text-[12px] p-3'>
                      Blogging website with register and sign in fuctions, user and admin roles. 
                      Users have a the ability to sign in and view blog post, Admins are allowed to view, create and delete blog posts. 
                  </p>
                  </Link>
                 </div>
              </motion.div>
              </div>
            </div>

{/*hero 3*/}
<div className='py-8 xl:py-20 relative'>

              <motion.div   variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                className=" grid gap-6 justify-items-center items-center text-center">      

                 <div className=" gap-4 rounded-lg h-auto w-[16rem] sm:w-[26rem] md:w-[35rem] lg:w-[44rem] xl:w-[60rem] grid grid-col-4 justify">
                  <div className=" h-auto grid row-start-1 col-span-4 p-3 sm:p-10">
                    <h1 className=" text-violet font-extrabold text-[14px] lg:text-[16px] pb-2">
                      Ready to connect? Reach out to me today and let`s discuss how I can help you achieve your goals.
                    </h1>
                  </div>               

                  <div className=" bg-zinc-950 ring-zinc-900  rounded-lg h-auto grid col-start-1 row-start-2 col-span-2 p-3">
                        <p className=" text-white font-regular text-start text-[10px] lg:text-[12px] mb-8 md:mb-12 ">
                        Reach Out and Let`s Collaborate on Your Vision!                        
                        </p>
                        <div className="h-auto grid justify-items-start ">
                          <Link className="bg-violet text-white font-regular grid items-center justify-center text-xs w-[30px] h-[30px] rounded-lg" 
                                href="/contact">
                           <ChevronRight className="w-5 h-5 "/>
                          </Link>
                        </div>
                 </div>

                 <div className=" bg-zinc-950 ring-zinc-900  rounded-lg h-auto grid col-start-3 row-start-2 col-span-2 p-3 ">
                        <p className=" text-white font-regular text-start text-[10px] lg:text-[12px] mb-8 ">
                          I specialize in creating responsive and user-friendly websites.
                        </p>
                        <div className="h-auto grid justify-items-start ">
                          <Link className="bg-violet text-white font-regular grid items-center justify-center w-[30px] h-[30px] rounded-lg" 
                                href="/about">
                           <ChevronRight className="w-5 h-5 "/>
                          </Link>
                        </div>   
                 </div>
                 </div>
              </motion.div>     
              </div>

          </div>;
  
};

export default Homepage;
