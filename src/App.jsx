
import './index.css'
import {Home} from './components/sections/Home.jsx'
import {Projects} from './components/sections/Projects.jsx'
import {About} from './components/sections/About.jsx'
import {Navbar} from './components/navbar.jsx'
import { useState, useEffect } from 'react'
function App() { 

  
  
  return (
    <>
        <Navbar />
      {/* Sections */}
      <div className="">
        <Home />
        <Projects />
        <About />
      </div>
    </>
  )
}

export default App
