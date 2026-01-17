import pic from '../../assets/pic.jfif';
import github from '../../assets/github-logo.png';
import linkedin from '../../assets/linkedin.png';
import facebook from '../../assets/facebook.png';
import { motion } from "motion/react"
import TextType from '../reactbits/TextType';
import LightRays from  './LightRays';
import { useState, useEffect } from 'react';
import { div } from 'motion/react-client';
export const Home = () => {

    return (
        <section id="home" className='md:flex items-center justify-between p-3 mt-15 mx-10 md:mx-20 min-h-screen'>  
            <motion.div  initial={{ opacity: 0, x: -100,} } whileInView={{ opacity: 1, x: 0 , }} transition={{ duration: 0.8, ease: "easeInOut" }} className='md:mt-20 lg:mt-0'> 
                <div className='hover:-translate-y-2 transition-all ease-in-out duration-700'>
                    <p className='text-[52px] text-white'>Aspiring&nbsp; 
                        <TextType 
                            text={["Web Developer Intern", "Tech Support Intern", "Networking Intern"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            className='text-purple-800'
                            />
                    </p>
                    <p className='text-[20px] text-white'>Currently a 3rd Year BSIT student</p>
                </div>
                <div className='flex gap-5 my-5'>
                    <a href="https://github.com/Ryystuffs" target='_blank' className='hover:-translate-y-2 transition-all ease-in-out duration-700'><img src={github} alt="" className='rounded-full h-10'/></a>
                    <a href="https://www.linkedin.com/in/ryan-trinidad/" target='_blank' className='hover:-translate-y-2 transition-all ease-in-out duration-700'><img src={linkedin} alt="" className='rounded-full h-10'/></a>
                    <a href="https://www.facebook.com/ryantrinidad422" target='_blank'className='hover:-translate-y-2 transition-all ease-in-out duration-700'><img src={facebook} alt="" className='h-10'/></a>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className='hover:-translate-y-2 transition-all ease-in-out duration-700'>
                <img src={pic} alt="" className='mt-20 lg:mt-0 md:w-125 md:my-8 rounded-full border border-black bg-gray-900'/>
            </motion.div>
        </section>
    );
}