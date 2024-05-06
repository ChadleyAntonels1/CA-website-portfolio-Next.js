"use client"
import React, { useRef } from 'react'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import emailjs from '@emailjs/browser';

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import { ChevronDown, Clipboard, ClipboardCheck, Linkedin, Download } from "lucide-react"

 

 

const Contactpage = () => {
   
  const [isActive, setIsActive] = useState(true);

  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 3000); // Reset status after x seconds
  };

// download resume  
  const onButtonClick = () => {
  const pdfUrl = "Chadley Antonels Frontend Web Developer Resume 2024.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Chadley Antonels Frontend Web Developer Resume 2024.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }

// Email.js
   const [success, setSuccess] = useState(false)
   const [error, setError] = useState(false)

   const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, 
                process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        (success) => {
          setSuccess(true);
          form.current.reset()
        },
        (error) => {
         setError(true);
        },
      );
  };


  return (

   
    <div className='mt-10'>


{/* hero 1 */}
          <div className=" grid gap-6 justify-items-center items-center text-center ">      
                 <div className=" gap-4 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4 "> 
                 <div className="rounded-lg h-auto grid items-center col-start- row-start-2 col-span-4 sm:col-span-3 sm:row-start-1 p-3 ">
                    <h1 className=' text-[18px] text-white font-bold pt-'>Need a professional website?</h1>
                    <p className=' text-[10px] text-white font-light p-1'>Ready to bring your ideas to life online? Let`s build your dream website together! 
                        Whether you`re starting from scratch or looking to revamp your current site, I`m here to help. 
                        Contact me today to discuss your project and take the first step towards an impactful online presence.
                    </p> 
                 </div>
                 </div>
          </div>

{/* contact grid email*/}
          <div className="mt-10 grid gap-6 justify-items-center items-center text-center ">      
                 <div className=" gap-4 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4 "> 
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-1 row-start-1 sm:col-span-1 sm:row-start-1 p-3">
                    <Accordion type="single" collapsible>
                     <AccordionItem value=" item-1">
                        <AccordionTrigger className="text-white text-[10px] flex flex-1 items-center justify-center py-1 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180" >
                           email
                        </AccordionTrigger>
                        <AccordionContent className="text-white text-[10px] font-bold text-center justify-between flex ">
                           chadleycantonels@gmail.com

                           <TooltipProvider>
                           <Tooltip>
                              <TooltipTrigger>
                           <CopyToClipboard className="text-white " text='chadleycantonels@gmail.com' onCopy={onCopyText}>
                                 <div>
                                {copyStatus && isActive? 
                                 <ClipboardCheck className='w-4 h-4' onClick={()=>{setIsActive(!isActive)}}/>
                                    :
                                 <Clipboard className='w-4 h-4' onClick={()=>{setIsActive(!isActive)}}/>}    
                                 </div>           
                           </CopyToClipboard>
                           </TooltipTrigger>
                              <TooltipContent>
                                 <p>Copy Email</p>
                              </TooltipContent>
                           </Tooltip>
                        </TooltipProvider>
                        </AccordionContent>
                     </AccordionItem>
                     </Accordion>
                 </div>
                 

{/* contact grid contact*/}
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-1 row-start-1 sm:col-span-1 sm:row-start-1 p-3">
                    <Accordion type="single" collapsible>
                     <AccordionItem value=" item-1">
                        <AccordionTrigger className="text-white text-[10px] flex flex-1 items-center justify-center py-1 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180" >
                        contact
                        </AccordionTrigger>
                        <AccordionContent className="text-white text-[10px] font-bold text-center justify-between flex ">
                           060 8620 012

                           
                           <TooltipProvider>
                           <Tooltip>
                              <TooltipTrigger>
                              <CopyToClipboard className="text-white " text='0608620012' onCopy={onCopyText}>
                              <div>
                                {copyStatus && isActive? 
                                 <ClipboardCheck className='w-4 h-4' onClick={()=>{setIsActive(!isActive)}}/>
                                    :
                                 <Clipboard className='w-4 h-4' onClick={()=>{setIsActive(!isActive)}}/>}               
                              </div>
                           </CopyToClipboard>
                              </TooltipTrigger>
                              <TooltipContent>
                                 <p>Copy Contact</p>
                              </TooltipContent>
                           </Tooltip>
                        </TooltipProvider>
                              
                        </AccordionContent>
                     </AccordionItem>
                     </Accordion>
                 </div>

{/* contact grid social*/}
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-1 row-start-2 sm:col-span-1 sm:row-start-2 p-3">
                    <Accordion type="single" collapsible>
                     <AccordionItem value=" item-1">
                        <AccordionTrigger className="text-white text-[10px] flex flex-1 items-center justify-center py-1 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180" >
                        Resume
                        </AccordionTrigger>
                        <AccordionContent className="text-white text-[10px] font-bold justify-center flex ">
                        <TooltipProvider>
                           <Tooltip>
                              <TooltipTrigger>
                                 <button onClick={onButtonClick}>
                                    <Download className='w-4 h-4'  />
                                 </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                 <p>Download</p>
                              </TooltipContent>
                           </Tooltip>
                        </TooltipProvider>
                        </AccordionContent>
                     </AccordionItem>
                     </Accordion>
                 </div>

{/* contact grid linkedIn*/}
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-1 row-start-2 sm:col-span-1 sm:row-start-2 p-3">
                    <Accordion type="single" collapsible>
                     <AccordionItem value=" item-1">
                        <AccordionTrigger className="text-white text-[10px] flex flex-1 items-center justify-center py-1 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180" >
                        linkedIn
                        </AccordionTrigger>
                        <AccordionContent className="text-white text-[10px] font-bold justify-center flex ">
                        <TooltipProvider>
                           <Tooltip>
                              <TooltipTrigger>
                                 <button>
                                    <a target='_blank' href="https://www.linkedin.com/in/chadley-antonels-97928615a/">
                                       <Linkedin className='w-4 h-4'/>
                                    </a>
                                 </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                 <p>Open link</p>
                              </TooltipContent>
                           </Tooltip>
                        </TooltipProvider>
                        </AccordionContent>
                     </AccordionItem>
                     </Accordion>
                 </div>
                 </div>

{/* contact form */}
                 <div className=" mt-10 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4 "> 
                  <div className="bg-black text-white ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid justify-items-center items-center col-span-4 row-start- sm:col-span-3 sm:row-start-1 py-4 px-4">
                    <form 
                    onSubmit={sendEmail}
                    ref={form} >
                      <input className=' w-[10rem] sm:w-[25rem] md:w-[28rem] lg:w-[35rem] xl:w-[38rem] p-2 mb-2 bg-zinc-950 ring-2 ring-opacity-30 ring-zinc-800 rounded-lg text-sm' 
                             type="text" 
                             name='user_name'
                             placeholder=' Name'
                             required/>

                             
                      <input className=' w-[10rem] sm:w-[25rem] md:w-[28rem] lg:w-[35rem] xl:w-[38rem] p-2 mb-2 bg-zinc-950 ring-2 ring-opacity-30 ring-zinc-800 rounded-lg text-sm' 
                             type="email" 
                             name='user_email'
                             placeholder=' Email Address'
                             required/>
                      <textarea className=' w-[10rem] sm:w-[25rem] md:w-[28rem] lg:w-[35rem] xl:w-[38rem] p-2 mb-2 bg-zinc-950 ring-2 ring-opacity-30 ring-zinc-800 rounded-lg text-sm' 
                             type="text" 
                             name="user_message"
                             placeholder=' Message' 
                             rows={8}
                             required/>
                      <button className='w-[10rem] sm:w-[25rem] md:w-[28rem] lg:w-[35rem] xl:w-[38rem] bg-gray-100 text-black p-2 text-md font-semibold rounded-lg'>send</button>
                      {success && (
                        <span className='text-green-600 font-semibold'>
                           Your message was sent successfully!
                        </span>
                      )}
                      {error && (
                        <span className='text-red-600 font-semibold'>
                           Something went wrong!
                        </span>
                      )}
                    </form>                  
                  </div>
                 </div>
          </div>

{/* FAQ grid*/}
          <div className="mb-20 mt-10 grid gap-6 justify-items-center items-center text-center ">      
                 <div className=" gap-4 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4 "> 
                 <div className="rounded-lg h-auto grid items-center col-span-4  ">
                    <h1 className='text-[14px] text-white font-bold pt-'>FAQ</h1>
                 </div>
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-4 p-3">
                     <Accordion type="single" collapsible>
                     <AccordionItem value=" item-1">
                        <AccordionTrigger className="text-white text-[10px] flex flex-1 items-center justify-center gap-2 py-1 font-medium transition-all [&[data-state=open]>svg]:rotate-180" >
                        How much does a new website cost?
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                        </AccordionTrigger>
                        <AccordionContent className="text-white text-[10px] font-bold">
                        we come up with the pricing after a separate analysis has been conducted on the projects
                         and after brainstorming we work towards achieving the desired results
                        </AccordionContent>
                     </AccordionItem>
                     </Accordion>
                 </div>
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-4 p-3">
                 <Accordion type="single" collapsible>
                     <AccordionItem value=" item-1">
                        <AccordionTrigger className="text-white text-[10px] flex flex-1 items-center justify-center gap-2 py-1 font-medium transition-all [&[data-state=open]>svg]:rotate-180" >
                        Will you maintain my site for me?                        
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                        </AccordionTrigger>
                        <AccordionContent className="text-white text-[10px] font-bold">
                        we can help you out with proper and professional website maintenance in 
                        addition to development as it supports in achieving stabilized growth, keeping your business inclined.                        
                        </AccordionContent>
                     </AccordionItem>
                     </Accordion>
                 </div>
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-4 p-3">
                 <Accordion type="single" collapsible>
                     <AccordionItem value=" item-1">
                        <AccordionTrigger className="text-white text-[10px] flex flex-1 items-center justify-center gap-2 py-1 font-medium transition-all [&[data-state=open]>svg]:rotate-180" >
                        Will my website be mobile-friendly?
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                        </AccordionTrigger>
                        <AccordionContent className="text-white text-[10px] font-bold">
                        Yes, we ensure to develop a responsive website that would make your visitors appealing and deliver an optimized browsing experience.                        
                        </AccordionContent>
                     </AccordionItem>
                     </Accordion>
                 </div>
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-4 p-3">
                 <Accordion type="single" collapsible>
                     <AccordionItem value=" item-1">
                        <AccordionTrigger className="text-white text-[10px] flex flex-1 items-center justify-center gap-2 py-1 font-medium transition-all [&[data-state=open]>svg]:rotate-180" >
                        How long does it take to build a website?
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                        </AccordionTrigger>
                        <AccordionContent className="text-white text-[10px] font-bold">
                        If you have chosen a professional website development company, 
                        then it would take around 1 to 4 months starting from scratch till the end for basic information websites with less functionality.                        
                        </AccordionContent>
                     </AccordionItem>
                     </Accordion>
                 </div>
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-4 p-3">
                 <Accordion type="single" collapsible>
                     <AccordionItem value=" item-1">
                        <AccordionTrigger className="text-white text-[10px] flex flex-1 items-center justify-center gap-2 py-1 font-medium transition-all [&[data-state=open]>svg]:rotate-180" >
                        How long will it take to get to the 1st page of Google?
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                        </AccordionTrigger>
                        <AccordionContent className="text-white text-[10px] font-bold">
                        Normally it would take a minimum of 6 months for your website to appear on the 1st page of Google and it completely depends on the difficulty of the keywords used in your website. 
                        It is quite unpredictable as nowadays the competitors are quite high and almost every business are keen on establishing SEO optimized websites.
                        </AccordionContent>
                     </AccordionItem>
                     </Accordion>
                 </div>
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-4 p-3">
                 <Accordion type="single" collapsible>
                     <AccordionItem value=" item-1">
                        <AccordionTrigger className="text-white text-[10px] flex flex-1 items-center justify-center gap-2 py-1 font-medium transition-all [&[data-state=open]>svg]:rotate-180" >
                        Can you design my logo?
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                        </AccordionTrigger>
                        <AccordionContent className="text-white text-[10px] font-bold">
                        Yes, we can help you in designing your logo that suits your business as we have expert designers working for us.
                         We ensure your logo to be unique, creative and attractive.
                        </AccordionContent>
                     </AccordionItem>
                     </Accordion>
                 </div>
                 
                 </div>
                 
          </div>
      

    </div>
  )
}

export default Contactpage