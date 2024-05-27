import { Linkedin, Github } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div  className=" h-full flex items-center justify-between px-5 lg:px-8 xl:px-14 text-md border-t text-white"> 
        <div className=' '>
          <div className='text-[20px] pt-5'>
          <Image src='/UntitledCA LOGO (1).png' width={70} height={50} alt='CA'/>

          </div>
          <div className='text-[10px] py-4'>© 2024 Chadley Antonels</div>

        </div>
         <div className=' flex gap-4 pt-5'>
          <div>
            <button>
              <a target='_blank' href="https://www.linkedin.com/in/chadley-antonels-97928615a/">
               <Linkedin className='w-4 h-4'/>
              </a>
               </button>
          </div>
          <div>
            <button>
              <a target='_blank' href="https://github.com/ChadleyAntonels1">
               <Github className='w-4 h-4'/>
              </a>
               </button>
          </div>
         </div>
    
    </div>
  )
}

export default Footer