
import './index.css'
import {Home} from './components/sections/Home.jsx'
import {Projects} from './components/sections/Projects.jsx'
import {About} from './components/sections/About.jsx'
import {Navbar} from './components/navbar.jsx'
import { useState, useEffect } from 'react'
import LightRays from  './components/sections/LightRays';
function App() { 

  
  
  return (
    <>
      <div className="relative bg-black min-h-screen">
      <Navbar />

      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5} // Optional: makes it subtle so text is readable
          followMouse={true}
        />
      </div>

      {/* CONTENT LAYER */}
      <main className="relative z-10 overflow-x-hidden">
        <Home />
        <Projects />
        <About />
      </main>
    </div>
    </>
  )
}

export default App
