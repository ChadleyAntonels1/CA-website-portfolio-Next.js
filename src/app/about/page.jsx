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
    <div className='text-white grid justify-items-center mt-10'>
      <h1 className=' text-[18px] lg:text-[22px] grid text-white te mb-16'>
                     About  
                  </h1>
{/* profile image */}
          <motion.div variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 1 }}
                                className="mb-10 grid gap-6 justify-items-center items-center text-center pb-8 xl:pb-20">      
                 <div className=" gap-4 rounded-lg h-auto w-[16rem] sm:w-[26rem] md:w-[35rem] lg:w-[44rem] xl:w-[60rem] grid grid-col-4 ">                      
                  <div className=" rounded-lg h-auto grid items-center justify-items-center col-start-2 row-start-1 col-span-2  sm:col-span-1">
                    <Image src='/IMG_6020.jpg' alt="" width={400} height={150}  className=" rounded-lg"/>
                 </div>
                 <div className=" bg-zinc-950 rounded-lg h-auto grid items-center text-left col-start- row-start-2 col-span-4 sm:col-span-3 sm:row-start-1 p-3">
                    <h1 className=' text-[14px] lg:text-[16px] font-bold pt-'>Chadley Antonels</h1>
                    <h1 className=' text-[14px] lg:text-[16px] font-bold text-violet'>Frontend Web Developer</h1>
                    <p className=' text-[10px] lg:text-[12px] text-white font-light p-1'>Let`s build your dream website together! 
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
                                className="mb-10 grid gap-6 justify-items-center items-center text-center pb-8 xl:pb-20">
            <div className=" gap-4 rounded-lg h-auto w-[16rem] sm:w-[26rem] md:w-[35rem] lg:w-[44rem] xl:w-[60rem] grid grid-col-4 ">

            <div className=" bg-zinc-950 rounded-lg h-auto grid items-center col-start- row-start-2 col-span-4 sm:col-span-3 sm:row-start-1 p-3">
              <h1 className='text-[14px] lg:text-[16px] text-violet font-bold mb-1'>Background</h1>
              <p className=' text-[10px] lg:text-[12px] font-light'>
                As an inspired frontend web developer, driven with a passion for turning code into visually appealing interfaces. 
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
                                className="mb-10 grid gap-6 justify-items-center items-center text-center pb-8 xl:pb-20">      
                 <div className=" gap-4 rounded-lg h-auto w-[16rem] sm:w-[26rem] md:w-[35rem] lg:w-[44rem] xl:w-[60rem] grid grid-col-4 ">                      
                  <div className=" bg-zinc-950 rounded-lg h-auto grid items-center justify-items-center row-start-1 col-span-4 p-3">
                    <h1 className=' text-[14px] lg:text-[16px] text-violet font-bold mb-1'>Education</h1>
                    <h1 className='text-[12px] lg:text-[14px] font-semibold'>South Peninsula High School </h1>         
                    <h1 className='text-[12px] lg:text-[14px] font-semibold '> 2012-2017</h1>
                    <p className=' text-[10px] lg:text-[12px] font-extralight p-2 lg:p-4'>Matric/Grade 12 : National Senior Certifcate</p>

                    <h1 className='text-[12px] lg:text-[14px] font-semibold '>Cape Peninsula University of Technology</h1>
                    <h1 className='text-[12px] lg:text-[14px] font-semibold '> 2018-2018</h1>
                    <p className=' text-[10px] lg:text-[12px] font-extralight p-2 lg:p-4'>Higher Certificate : Information and Communication Technology</p>

                    <h1 className='text-[12px] lg:text-[14px] font-semibold '>Cape Peninsula University of Technology</h1>
                    <h1 className='text-[12px] lg:text-[14px] font-semibold '>  2019-2023</h1>
                    <p className=' text-[10px] lg:text-[12px] font-extralight p-2 lg:p-4'>Diploma : Information and Communication Technology - Multimedia Applications</p>
                 </div>
                 </div>
                 </motion.div>


{/* experiences */}
                 <motion.div variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 1 }}
                                className="mb-10 grid gap-6 justify-items-center items-center text-center pb-8 xl:pb-20"> 
                                                 <div className=" gap-4 rounded-lg h-auto w-[16rem] sm:w-[26rem] md:w-[35rem] lg:w-[44rem] xl:w-[60rem] grid grid-col-4 ">                      
 
                 <div className=" bg-zinc-950 rounded-lg h-auto grid items-center row-start-2 col-span-4 p-3">
                    <h1 className=' text-[14px] lg:text-[16px] text-violet font-bold mb-1'>Professional Experience</h1>
                    <h1 className='text-[12px] lg:text-[14px] font-semibold p-1 '>Web Developer | ALS Medical Trainning </h1>
                    <h1 className='text-[12px] lg:text-[14px] font-semibold '>Apr 2022 - Present</h1>
                    <p className=' text-[10px] lg:text-[12px] font-extralight p-2 lg:p-4 '>Web development, Web design, Wireframes, Brand guidelines, Logo design, Testing, SEO, Maintenance and Project management.</p>
                    
                    <h1 className='text-[12px] lg:text-[14px] font-semibold p-1'>Web Developer | CPUT</h1>
                    <h1 className='text-[12px] lg:text-[14px] font-semibold '>Jul 2023 - Dec 2023</h1>
                    <p className=' text-[10px] lg:text-[12px] font-extralight p-2 lg:p-4'>WordPress development, Wireframes, Brand guidelines, logo design, 
                    Communication and project management.</p>
                </div>
                </div>
               </motion.div>

{/* project experiences */}
               <motion.div variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 1 }}
                                className="mb-10 grid gap-6 justify-items-center items-center text-center pb-8 xl:pb-20"> 
                 <div className=" gap-4 rounded-lg h-auto w-[16rem] sm:w-[26rem] md:w-[35rem] lg:w-[44rem] xl:w-[60rem] grid grid-col-4 ">                      
 
                 <div className=" bg-zinc-950 rounded-lg h-auto grid items-center row-start-2 col-span-4 p-3">
                    <h1 className=' text-[14px] lg:text-[16px] text-violet font-bold mb-1'>Project Experience</h1>
                    <h1 className='text-[12px] lg:text-[14px] font-semibold p-1'>Web Developer | RFF</h1>
                    <h1 className='text-[12px] lg:text-[14px] font-semibold '>May 2024 - Present</h1>
                    <p className=' text-[10px] lg:text-[12px] font-extralight p-2 lg:p-4'>Web development, Web design, Wireframing, Testing, SEO, Maintenance and Project management.</p>
                    
                    </div>
                </div>
               </motion.div>

{/* skills */}

              <motion.div variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 1 }}
                                className="mb-10 grid gap-6 justify-items-center items-center text-center pb-8 xl:pb-20 "> 
              <div className=" gap-4 rounded-lg h-auto w-[16rem] sm:w-[26rem] md:w-[35rem] lg:w-[44rem] xl:w-[60rem] grid grid-col-4 ">                      
                  <div className=" bg-zinc-950 rounded-lg h-auto grid items-center justify-items-center row-start-1 col-span-4 p-3">
                  <h1 className=' text-[14px] lg:text-[16px] text-violet font-bold  '>Front-End Development</h1>
                  <p className=' text-[10px] lg:text-[12px] font-extralight p-2 lg:p-4'> HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS</p>
                  <h1 className=' text-[14px] lg:text-[16px] text-violet font-bold '>Back-End Development</h1>
                  <p className=' text-[10px] lg:text-[12px] font-extralight p-2 lg:p-4'>Node.js, Express.js and MongoDB.</p>
                 </div>

                 <div className=" bg-zinc-950 rounded-lg h-auto grid items-center row-start-1 col-span-4 p-3">
                 <h1 className=' text-[14px] lg:text-[16px] text-violet font-bold  '>Web Design</h1>
                  <p className=' text-[10px] lg:text-[12px] font-extralight p-2 lg:p-4'> UX, UI design, Wireframing, prototyping, SEO</p>
                  <h1 className=' text-[14px] lg:text-[16px] text-violet font-bold '>Brand development</h1>
                  <p className=' text-[10px] lg:text-[12px] font-extralight p-2 lg:p-4'>Logo design, Brand guidelines, Brand stratergy and Digital Marketing Integration </p>
                 </div>
                </div>
              </motion.div>

    </div>
  )
}

export default Aboutpage