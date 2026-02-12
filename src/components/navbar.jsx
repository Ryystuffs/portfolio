import { Menu } from 'lucide-react';  
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import useActiveSection from '../components/useActiveSection.jsx';
import '../../src/index.css';
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
    const activeSection = useActiveSection()
    return (    
    <div className="bg-black/40 backdrop-blur-lg border-b border-white/10 flex justify-between text-[25px] mx-2 sticky top-0 z-50">
        <div className="flex items-center mx-6">
        <a href="#home"><p>ryan.<span className='text-purple-800'>dev</span></p></a>
        </div>
        <div className="">
            <ul className="hidden md:flex space-x-20 p-4 text-white mx-8">
                <li className={activeSection === 'home' ? 'active' : ''}><a href="#home" className={activeSection === 'home' ? 'py-1 px-4 rounded-lg cursor-pointer' : 'py-1 px-4 rounded-lg cursor-pointer hover:text-purple-800'}>Home</a></li>
                <li className={activeSection === 'projects' ? 'active' : ''}><a href="#projects" className={activeSection === 'projects' ? 'py-1 px-4 rounded-lg cursor-pointer' : 'py-1 px-4 rounded-lg cursor-pointer hover:text-purple-800'}>Projects</a></li>
                <li className={activeSection === 'about' ? 'active' : ''}><a href="#about" className={activeSection === 'about' ? 'py-1 px-4 rounded-lg cursor-pointer' : 'py-1 px-4 rounded-lg cursor-pointer hover:text-purple-800'}>About</a></li>
            </ul>
            <div className="md:hidden p-4 text-white" onClick={toggleMenu}>
                {!isOpen ? <Menu className='bg-black/50 backdrop-blur-xl' /> : <X />}
            </div>
        </div>
        <div className={`
            fixed w-full top-14 left-0 h-screen
            bg-black/60 backdrop-blur-md
            z-40 flex flex-col justify-center items-center
            space-y-10 text-white text-3xl
            transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#about" onClick={closeMenu}>About</a>
        </div>
    </div>
    );
}


