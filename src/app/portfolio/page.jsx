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

const Portfoliopage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  
  return (
    <div className=" flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36 mt-10">
                 <div className=" text-center gap-4 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4">
                  <div className=" h-auto grid row-start-1 col-span-4 p-3 sm:p-10">
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
                
                 
                 </div>

                 <div className=" gap-4 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4">
                                 

                 <div className=" bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid justify-center col-start-1 row-start-2 col-span-2 p-3 ">
                    <Image src='/Untitledas.png' alt="" width={100} height={1000}  className="w-fill h-fill rounded-lg"/>
                 </div>

                 <div className="  bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid justify-center col-start-3 row-start-2 col-span-2 p-3  ">
                 <Image src='/Untitledas.png' alt="" width={100} height={100}  className="w-fill h-fill rounded-lg"/>
                 </div>
                
                 </div>

                 <div className=" text-center gap-4 mt-4 rounded-lg w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4 justify-center">

                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg grid row-start-1 col-span-4 p-3 sm:p-10">

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
                  



    </div>
  )
}

export default Portfoliopage

