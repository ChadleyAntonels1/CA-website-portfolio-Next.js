"use client"
import React from 'react'
import Link from "next/link";
import Image from "next/image";

import Spline from "@splinetool/react-spline";
import {motion, } from "framer-motion"
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
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 5,
      
    },
    whileInView: 1
    
    
  }
};

const Homepage = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return  <div className="">
{/* spline animation */}
            <div >
            <Spline scene="https://prod.spline.design/Y0HqeaPUaViMHRdq/scene.splinecode" />

              
{/* hero 1*/}
                <motion.div   variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 1 }}
                                className="mb-10 grid justify-items-center items-center text-center ">      

                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4 p-4 sm:p-10">
                  <div className="h-auto grid row-start-1 col-span-4">
                        <h1 className=" text-white font-extrabold text-[12px] pb-2">
                          Passionate Frontend Web Developer Creating Beautiful Websites
                        </h1>
                  </div>               
                  <div className=" h-auto grid row-start-2 col-span-4 pb-3 ">
                        <p className=" text-white font-regular text-[10px] pb-2">
                          With over 2 years of experience, I specialize in creating visually stunning and user-friendly websites. 
                          My core competencies include HTML, CSS, JavaScript, and responsive design.
                        </p>
                  </div>
                  <div className="h-auto grid justify-items-center col-span-4 ">
                        <button className="bg-white text-black font-regular text-xs text-center min-w-[100px] min-h-[25px] rounded-lg">
                        <Link className="bg-white text-black font-regular grid items-center text-xs min-w-[100px] min-h-[25px] rounded-lg" href="/about">Learn more</Link>
                        </button>
                  </div>
                 </div>
              </motion.div>   

{/* hero 2*/}
              <motion.div   variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                className="mb-10 grid gap-6 justify-items-center items-center text-center">      

                 <div className=" gap-4 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4">
                  <div initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid row-start-1 col-span-4 p-3 sm:p-10">
                    <h1 className=" text-white font-extrabold text-[12px] p-3">
                    Step into my portfolio and explore a showcase of projects that reflect my dedication and expertise
                    </h1>
                  </div>               

                 <div className=" bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid justify-center col-start-1 row-start-2 col-span-2 p-3 ">
                    <Image src='/Untitledas.png' alt="" width={100} height={1000}  className="w-fill h-fill rounded-lg"/>
                 </div>

                 <div className="  bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid justify-center col-start-3 row-start-2 col-span-2 p-3  ">
                 <Image src='/Untitledas.png' alt="" width={100} height={100}  className="w-fill h-fill rounded-lg"/>
                 </div>

                 <div className=" bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto justify-center grid row-start-3 col-span-4 p-3 ">
                 <Carousel className=" "
                           plugins={[plugin.current]}
                            >
                     <CarouselContent>
                        <CarouselItem >
                          <a target='_blank' href="https://next14-starter-two.vercel.app/">
                            <Image src='/UntitledSCREENBLOG (3).png' alt="" width={400} height={100}  className="w-fill h-fill rounded-lg"/>
                          </a>
                        </CarouselItem>
                        <CarouselItem >
                        <a target='_blank' href="https://next14-starter-two.vercel.app/">
                            <Image src='/UntitledSCREENBLOG (1).png' alt="" width={400} height={100}  className="w-fill h-fill rounded-lg"/>
                          </a>
                    </CarouselItem>
                    <CarouselItem >
                    <a target='_blank' href="https://next14-starter-two.vercel.app/">
                            <Image src='/UntitledSCREENBLOG (2).png' alt="" width={400} height={100}  className="w-fill h-fill rounded-lg"/>
                          </a>
                    </CarouselItem>
                    <CarouselItem >
                    <a target='_blank' href="https://next14-starter-two.vercel.app/">
                            <Image src='/UntitledSCREENBLOG (4).png' alt="" width={400} height={100}  className="w-fill h-fill rounded-lg"/>
                          </a>
                    </CarouselItem>
                    <CarouselItem >
                    <a target='_blank' href="https://next14-starter-two.vercel.app/">
                            <Image src='/UntitledSCREENBLOG.png' alt="" width={400} height={100}  className="w-fill h-fill rounded-lg"/>
                          </a>
                    </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>

                  </div>
                 </div>
              </motion.div>

{/*hero 3*/}
              <motion.div   variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                className="mb-10 grid gap-6 justify-items-center items-center text-center">      

                 <div className=" gap-4 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4 justify">
                  <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid row-start-1 col-span-4 p-3 sm:p-10">
                    <h1 className=" text-white font-extrabold text-[12px] pb-2">
                      Ready to connect? Reach out to me today and let`s discuss how I can help you achieve your goals.
                    </h1>
                  </div>               

                  <div className=" bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid col-start-1 row-start-2 col-span-2 p-3">
                        <p className=" text-white font-regular text-start text-[10px] mb-3">
                        Open the Door to Possibilities, Reach Out and Let`s Collaborate on Your Vision!                        
                        </p>
                        <div className="h-auto grid justify-items-start ">
                          <Link className="bg-white text-black font-regular grid items-center justify-center text-xs min-w-[25px] min-h-[25px] rounded-lg" 
                                href="/contact">
                           <ChevronRight className="w-5 h-5 "/>
                          </Link>
                        </div>
                 </div>

                 <div className=" bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid col-start-3 row-start-2 col-span-2 p-3 ">
                        <p className=" text-white font-regular text-start text-[10px] mb-3">
                          With over 2 years of experience, I specialize in creating visually stunning and user-friendly websites.
                        </p>
                        <div className="h-auto grid justify-items-start ">
                          <Link className="bg-white text-black font-regular grid items-center justify-center text-xs min-w-[25px] min-h-[25px] rounded-lg" 
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
