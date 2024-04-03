import React from 'react'
import Image from 'next/image'

const Contactpage = () => {
  return (
    <div className=''>

{/* hero 1 */}
          <div className="mb-10 grid gap-6 justify-items-center items-center text-center ">      
                 <div className=" gap-4 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4 "> 
                 <div className="rounded-lg h-auto grid items-center col-start- row-start-2 col-span-4 sm:col-span-3 sm:row-start-1 p-3 ">
                    <h1 className=' text-[18px] text-white font-bold pt-'>Need a professional website?</h1>
                    <p className=' text-[10px] text-white font-light p-1'>Ready to bring your ideas to life online? Let's build your dream website together! 
                        Whether you're starting from scratch or looking to revamp your current site, I'm here to help. 
                        Contact me today to discuss your project and take the first step towards an impactful online presence.
                    </p> 
                 </div>
                 </div>
          </div>

{/* contact grid*/}
          <div className="mb-10 grid gap-6 justify-items-center items-center text-center ">      
                 <div className=" gap-4 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4 "> 
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-1 row-start-1 sm:col-span-1 sm:row-start-1 p-3">
                    <h1 className=' text-[10px] text-white font-bold pt-'>email</h1>
                 </div>
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-1 row-start-1 sm:col-span-1 sm:row-start-1 p-3">
                    <h1 className=' text-[10px] text-white font-bold pt-'>contact</h1>
                 </div>
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-1 row-start-2 sm:col-span-1 sm:row-start-2 p-3">
                    <h1 className=' text-[10px] text-white font-bold pt-'>social </h1>
                 </div>
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-1 row-start-2 sm:col-span-1 sm:row-start-2 p-3">
                    <h1 className=' text-[10px] text-white font-bold pt-'>linkedIn</h1>
                 </div>
                 </div>
                 <div className=" rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4 "> 
                  <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid justify-items-center items-center col-span-4 row-start- sm:col-span-3 sm:row-start-1 p-3">
                    <form >
                      <input className=' w-[10rem] sm:w-[25rem] md:w-[28rem] lg:w-[35rem] xl:w-[38rem] p-2 mb-2 bg-zinc-950 ring-2 ring-opacity-30 ring-zinc-800 rounded-lg text-sm' 
                             type="text" 
                             placeholder=' Name'/>
                      <input className=' w-[10rem] sm:w-[25rem] md:w-[28rem] lg:w-[35rem] xl:w-[38rem] p-2 mb-2 bg-zinc-950 ring-2 ring-opacity-30 ring-zinc-800 rounded-lg text-sm' 
                             type="email" 
                             placeholder=' Email Address'/>
                      <textarea className=' w-[10rem] sm:w-[25rem] md:w-[28rem] lg:w-[35rem] xl:w-[38rem] p-2 mb-2 bg-zinc-950 ring-2 ring-opacity-30 ring-zinc-800 rounded-lg text-sm' 
                             type="text" 
                             placeholder=' Message' 
                             rows={8}/>
                      <button className='w-[10rem] sm:w-[25rem] md:w-[28rem] lg:w-[35rem] xl:w-[38rem] bg-gray-100 text-black p-2 text-md font-semibold rounded-lg'>send</button>
                    </form>                  
                  </div>
                 </div>
          </div>

      
          <div className="mb-10 grid gap-6 justify-items-center items-center text-center ">      
                 <div className=" gap-4 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4 "> 
                 <div className="rounded-lg h-auto grid items-center col-span-4  ">
                    <h1 className='text-[14px] text-white font-bold pt-'>FAQ</h1>
                 </div>
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-4 p-3">
                    <h1 className=' text-[10px] text-white font-bold pt-'>email</h1>
                 </div>
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-4 p-3">
                    <h1 className=' text-[10px] text-white font-bold pt-'>contact</h1>
                 </div>
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-4 p-3">
                    <h1 className=' text-[10px] text-white font-bold pt-'>social </h1>
                 </div>
                 <div className="bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-span-4 p-3">
                    <h1 className=' text-[10px] text-white font-bold pt-'>linkedIn</h1>
                 </div>
                 </div>
                 
          </div>
      

    </div>
  )
}

export default Contactpage