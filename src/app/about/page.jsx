'use client'
import Image from 'next/image'
import React from 'react'
import {motion } from "framer-motion"

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
  }
};

const Aboutpage = () => {
  return (
    <div className='text-white mt-10'>
{/* profile image */}
          <motion.div variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 1 }}
                                className="mb-10 grid gap-6 justify-items-center items-center text-center ">      
                 <div className=" gap-4 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4 ">                      
                  <div className=" rounded-lg h-auto grid items-center justify-items-center col-start-2 row-start-1 col-span-2  sm:col-span-1">
                    <Image src='/IMG_6020.jpg' alt="" width={400} height={150}  className=" rounded-lg"/>
                 </div>
                 <div className=" bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-start- row-start-2 col-span-4 sm:col-span-3 sm:row-start-1 p-3">
                    <h1 className=' text-[18px] font-bold pt-'>Chadley Antonels</h1>
                    <h1 className=' text-[14px] font-bold text-blue-400'>Frontend Web Developer</h1>
                    <p className=' text-[10px] text-white font-light p-1'>Ready to bring your ideas to life online? Let`s build your dream website together! 
                      Whether you`re starting from scratch or looking to revamp your current site, I`m here to help. 
                      Contact me today to discuss your project and take the first step towards an impactful online presence.
                    </p> 
                 </div>
                 </div>
          </motion.div>

{/* background */}
          <motion.div variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 1 }}
                                className="mb-10 grid gap-6 justify-items-center items-center text-center ">
            <div className=" gap-4 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4 ">

            <div className=" bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-start- row-start-2 col-span-4 sm:col-span-3 sm:row-start-1 p-3">
              <h1 className=' text-[14px] text-blue-400 font-bold mb-1'>Background</h1>
              <p className=' text-[10px] font-light'>
                As an inspired entry-level frontend web developer, I`m a driven creator with a passion for turning code into visually appealing interfaces. 
                I adapt easily to changes, using effective communication and creative problem-solving . 
                I am passionate about driving results and making a meaningful impact, with a collaborative mindset and a commitment to continuous learning, I am eager to contribute my skills and 
                insights to thrive in a dynamic and innovative environment. 
              </p>                 
            </div>
            </div>
          </motion.div>

{/* Education */}
                <motion.div variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 1 }}
                                className="mb-10 grid gap-6 justify-center items-center text-center ">      
                 <div className=" gap-4 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4 ">                      
                  <div className=" bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center justify-items-center col-start- row-start-1 col-span-4 p-3">
                    <h1 className=' text-[14px] text-blue-400 font-bold mb-1'>Education</h1>
                    <h1 className='text-[11px] font-semibold'>South Peninsula High School </h1>         
                    <h1 className='text-[11px] font-semibold '> 2012-2017</h1>
                    <p className=' text-[10px] font-extralight p-2'>Matric/Grade 12 : National Senior Certifcate</p>

                    <h1 className='text-[10px] font-semibold '>Cape Peninsula University of Technology</h1>
                    <h1 className='text-[11px] font-semibold '> 2018-2018</h1>
                    <p className=' text-[10px] font-extralight p-2'>Higher Certificate : Information and Communication Technology</p>

                    <h1 className='text-[10px] font-semibold '>Cape Peninsula University of Technology</h1>
                    <h1 className='text-[11px] font-semibold '>  2019-2023</h1>
                    <p className=' text-[10px] font-extralight p-2'>Diploma : Information and Communication Technology - Multimedia Applications</p>
                 </div>

{/* experiences */}
                 <div className=" bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid items-center col-start- row-start-2 col-span-4 p-3">
                    <h1 className=' text-[14px] text-blue-400 font-bold mb-1'>Professional Experience</h1>
                    <h1 className='text-[11px] font-semibold p-1 '>Web Developer | ALS Medical Trainning </h1>
                    <h1 className='text-[10px] font-semibold '>April 2022 - Present</h1>
                    <p className=' text-[10px] font-extralight p-2'>WordPress development, Wireframes, Brand guidelines, logo design, Communication and project management</p>
                    <h1 className='text-[10px] font-semibold '>Web Developer | CPUT</h1>
                    <h1 className='text-[10px] font-semibold '>Jul 2023 - Dec 2023</h1>
                    <p className=' text-[10px] font-extralight p-2'>WordPress development, Wireframes, Brand guidelines, logo design, Communication and project management</p>
                 </div>
                </div>
               </motion.div>

{/* skills */}

              <motion.div variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 1 }}
                                className="mb-10 grid gap-6 justify-items-center items-center text-center "> 
                
                <div className=" gap-4 rounded-lg h-auto w-[12rem] sm:w-[27rem] md:w-[30rem] lg:w-[37rem] xl:w-[40rem] grid grid-col-4">
                               

                  <div className=" bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid row-start-1 col-span-4 sm:col-span-2 sm:col-start-1 p-3 ">
                        <h1 className=' text-[11px] text-blue-400 font-bold '>Front-End Development</h1>
                   <p className=' text-[10px] font-extralight p-2'>HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS</p>
                   <h1 className=' text-[11px] text-blue-400 font-bold  '>Back-End Development</h1>
                   <p className=' text-[10px] font-extralight p-2'>Node.js, Express.js and MongoDB.</p>
                 </div>

                 <div className=" bg-black ring-zinc-900 ring-2 ring-opacity-25 rounded-lg h-auto grid row-start-2 col-span-4 sm:col-span-2 sm:row-start-1 p-3 ">
                 <h1 className=' text-[11px] text-blue-400 font-bold  '>Web Design</h1>
                  <p className=' text-[10px] font-extralight p-2'> UX, UI design, Wireframing, prototyping, SEO</p>
                  <h1 className=' text-[11px] text-blue-400 font-bold '>Brand development</h1>
                  <p className=' text-[10px] font-extralight p-2'>Logo design, Brand guidelines, Brand stratergy and Digital Marketing Integration </p>
                 </div>

                 </div>
              </motion.div>
         
    </div>
  )
}

export default Aboutpage