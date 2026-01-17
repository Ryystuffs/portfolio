import iconGithub from '../assets/github-logo.png'
import { motion } from 'motion/react';

export const Card = ({pic, title, role, description, techStack, link}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 rounded-lg">
            <motion.div initial={{ opacity:0}} whileInView={{ opacity: 1 }} transition={{duration: 1, ease: "easeInOut"}} className="py-7 md:px-13">
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} src={pic} alt={title} className="rounded-lg"/>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} className="">
                <p className='font-bold mt-5 text-3xl'>{title}</p>
                <p className='mt-5 text-xl'>{role}</p>
                <hr className="my-4"/>
                <p className='leading-8'>{description}</p>
                <div className="my-5">
                    <p className="font-bold mb-7 text-xl">Technologies:</p>
                    <div className="flex flex-wrap gap-3">
                    {techStack.map((tech,index)=>(
                        <motion.span
                            key={index}
                            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                            className="px-7 py-2 bg-gray-800 text-purple-400 rounded-full text-sm font-medium inline-block cursor-pointer"
                        >
                            {tech}  
                        </motion.span>
                    ))}
                    </div>
                </div>
                <div className="flex">
                    <motion.a
                        href={link}
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 w-48 border border-white rounded-3xl py-3 px-5 
                                flex items-center gap-3 hover:bg-white hover:text-black transition"
                    >
                        <img src={iconGithub} alt="GitHub icon" className="h-6 w-6" />
                        <span className="text-sm font-medium">View on GitHub</span>
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
}