'use client'
import Image from 'next/image'
import React from 'react'

import Autoplay from "embla-carousel-autoplay"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'

const Portfoliopage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  
  return (
    <div className='text-white grid justify-items-center mt-10'>
      <h1 className=' text-[18px] lg:text-[22px] grid text-white'>
                     Portfolio  
                  </h1>
    <div className=" grid gap-6 justify-items-center items-center text-center pb-8 xl:pb-20">
                 <div className=" text-center gap-4 rounded-lg h-auto w-[16rem] sm:w-[26rem] md:w-[35rem] lg:w-[44rem] xl:w-[60rem] grid grid-col-4">
                  <div className=" h-auto grid row-start-1 col-span-4 p-3 sm:p-10">
                    <h1 className=" text-white font-extrabold text-[12px] lg:text-[16px] p-3">
                    Step into my portfolio and explore a showcase of projects and Freelancing
                    </h1>
                  </div>               
                  <Link target='_blank' 
                        href="https://expensetracker-chadleyantonels1s-projects.vercel.app/"
                        className='bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid justify-center col-start-1 row-start-2 col-span-2 p-3'>
                    <div className='grid justify-items-center py-5'>
                        <Image src='/Untitledas.png' alt="" width={100} height={1000}  className="w-fill h-fill rounded-lg"/>
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
                        className=' bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid justify-center col-start-3 row-start-2 col-span-2 p-3'>
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
                 </div>  
              
                 {/* <div className=" grid gap-6 justify-items-center items-center text-center pb-8 xl:pb-20 ">
                 <div className=" gap-4 rounded-lg h-auto w-[16rem] sm:w-[26rem] md:w-[35rem] lg:w-[44rem] xl:w-[60rem] grid grid-col-4">
                    <Link target='_blank' 
                        href="https://expensetracker-chadleyantonels1s-projects.vercel.app/"
                        className='bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid justify-center col-start-1 row-start-2 col-span-2 p-3'>
                      <Image src='/Untitledas.png' alt="" width={100} height={1000}  className="w-fill h-fill rounded-lg "/>                
                    </Link>
                    <Link target='_blank'   
                          href="https://expensetracker-chadleyantonels1s-projects.vercel.app/"
                          className=' bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid justify-center col-start-3 row-start-2 col-span-2 p-3'>
                      <Image src='/Untitledas.png' alt="" width={100} height={1000}  className="w-fill h-fill rounded-lg "/>                
                    </Link>
                 </div>
                 </div> */}

                 <div className=" grid gap-6 justify-items-center items-center text-center py-8 xl:py-20">
                 <div className=" text-center gap-4 mt-4 rounded-lg w-[16rem] sm:w-[26rem] md:w-[35rem] lg:w-[44rem] xl:w-[60rem] grid grid-col-4 justify-center">
                 <Link target='_blank' 
                       href="https://next14-starter-two.vercel.app/" 
                       className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg grid row-start-1 col-span-4 p-3 sm:p-10">
                 <Carousel  plugins={[plugin.current]}>
                    <CarouselContent className=''>
                        <CarouselItem >
                            <Image src='/UntitledSCREENBLOG (3).png' alt="" width={400} height={100}  className="w-fill h-fill rounded-lg"/>
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
              </div>
              <div className=" grid gap-6 justify-items-center items-center text-center py-8 xl:py-20">
                 <div className=" text-center gap-4 mt-4 rounded-lg w-[16rem] sm:w-[26rem] md:w-[35rem] lg:w-[44rem] xl:w-[60rem] grid grid-col-4 justify-center">
                 <Link target='_blank' 
                       href="https://als-medical-training.vercel.app/" 
                       className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg grid row-start-1 col-span-4 p-3 sm:p-10">
                 <Carousel  plugins={[plugin.current]}>
                    <CarouselContent className=''>
                        <CarouselItem >
                            <Image src='/Untitledalshome.png' alt="" width={400} height={100}  className="w-fill h-fill rounded-lg"/>
                        </CarouselItem>
                        <CarouselItem >
                            <Image src='/Untitledalscontact.png' alt="" width={400} height={100}  className="w-fill h-fill rounded-lg"/>
                    </CarouselItem>
                    <CarouselItem >
                            <Image src='/Untitledalscourses.png' alt="" width={400} height={100}  className="w-fill h-fill rounded-lg"/>
                    </CarouselItem>
                    </CarouselContent>
                    
                  </Carousel>
                  <h1 className=" text-violet font-extrabold text-[12px] lg:text-[14px] p-5">
                       ALS Medical Training
                  </h1> 
                  <p className='text-white text-[10px] lg:text-[12px] p-3'>
                  </p>
                  </Link>
                  </div>
              </div>
              </div>
    
  )
}

export default Portfoliopage

