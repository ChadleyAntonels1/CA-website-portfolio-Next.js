import { Linkedin } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div  className="w-screen h-full flex  justify-between px-8 mt-10 sm:px-8 md:px-36 lg:px-56 xl:px-80 text-md border-t text-white"> 
        <div className=' '>
          <div className='pt-5'>logo</div>
          <div className='text-[10px] py-4'>chadley Antonels 2024</div>

        </div>
         <div className=' pt-5'>
          <div>
            <button>
              <a target='_blank' href="https://www.linkedin.com/in/chadley-antonels-97928615a/">
               <Linkedin className='w-4 h-4'/>
              </a>
               </button>
          </div>
         </div>
    
    </div>
  )
}

export default Footer