import { Linkedin, Github } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div  className="h-full flex  justify-between px-8 mt-10 sm:px-8 md:px-36 lg:px-56 xl:px-80 text-md border-t text-white"> 
        <div className=' '>
          <div className='text-[20px] pt-5'>Chadley Antonels</div>
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