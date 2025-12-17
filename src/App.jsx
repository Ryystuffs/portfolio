
import './index.css'
import {Home} from './components/sections/Home.jsx'
import {Projects} from './components/sections/Projects.jsx'
import {About} from './components/sections/About.jsx'
function App() {
  return (
    <>
      {/* Navbar */}
      <div className="bg-gray-900 flex justify-between text-[25px] sticky">
        <div className="flex items-center mx-6">
          <p>Ryan</p>
        </div>
        <div className="">
          <ul className="flex space-x-10 p-4 text-white">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </div>
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
