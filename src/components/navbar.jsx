import { Menu } from 'lucide-react';  
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    }
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    },[isOpen]);
    return (    
    <div className="bg-black flex justify-between text-[25px] mx-2 sticky top-0 z-50">
        <div className="flex items-center mx-6">
        <a href="#home"><p>ryan.<span className='text-purple-800'>dev</span></p></a>
        </div>
        <div className="">
            <ul className="hidden md:flex space-x-20 p-4 text-white mx-8">
                <li><a href="#home" className='hover:bg-gray-700 py-1 px-4 rounded-lg hover:border-b-2 hover:border-b-purple-600'>Home</a></li>
                <li><a href="#projects" className='hover:bg-gray-700 py-1 px-4 rounded-lg hover:border-b-2 hover:border-b-purple-600'>Projects</a></li>
                <li><a href="#about" className='hover:bg-gray-700 py-1 px-4 rounded-lg hover:border-b-2 hover:border-b-purple-600'>About</a></li>
            </ul>
            <div className="md:hidden p-4 text-white" onClick={toggleMenu}>
                {!isOpen ? <Menu /> : <X />}
            </div>
        </div>
        {isOpen ? (
            <div className="fixed w-full top-13 left-0 h-screen bg-black z-40 flex flex-col justify-center items-center space-y-10 text-white text-3xl text-decoration-none duration-300 ease-in-out ">
                <a href="#home" onClick={closeMenu} className=''>Home</a>
                <a href="#projects" onClick={closeMenu} className=''>Projects</a>
                <a href="#about" onClick={closeMenu} className=''>About</a>
            </div>
        ): (
            <div className="fixed w-full top-13 left-[-150%] h-screen bg-black z-40 flex flex-col justify-center items-center space-y-10 text-white text-3xl text-decoration-none">
                <a href="#home" onClick={closeMenu} className=''>Home</a>
                <a href="#projects" onClick={closeMenu} className=''>Projects</a>
                <a href="#about" onClick={closeMenu} className=''>About</a>
            </div>
        )}
    </div>
    );
}


