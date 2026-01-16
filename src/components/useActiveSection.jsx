import React from 'react'
import { useEffect, useState } from 'react';
const useActiveSection = () => {
    const [scrollPosition, setScrollPosition] = useState('home');
    useEffect(()=>{
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
            if(entry.isIntersecting){
                setScrollPosition(entry.target.id);
            }
            })
        },{
            threshold: 0.25,
        });

            sections.forEach((section => observer.observe(section)));
            return () => observer.disconnect()

        },[])
        
    return scrollPosition;
    
}

export default useActiveSection