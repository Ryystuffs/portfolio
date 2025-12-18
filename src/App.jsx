
import './index.css'
import {Home} from './components/sections/Home.jsx'
import {Projects} from './components/sections/Projects.jsx'
import {About} from './components/sections/About.jsx'
function App() {
  return (
    <>
      {/* Navbar */}
      <div className="bg-black flex justify-between text-[25px] mx-2 sticky top-0">
        <div className="flex items-center mx-6">
          <a href="#home"><p>ryan.<span className='text-purple-800'>dev</span></p></a>
        </div>
        <div className="">
          <ul className="flex space-x-20 p-4 text-white mx-8">
            <li><a href="#home" className='hover:bg-gray-700 py-1 px-4 rounded-lg hover:border-b-2 hover:border-b-purple-600'>Home</a></li>
            <li><a href="#projects" className='hover:bg-gray-700 py-1 px-4 rounded-lg hover:border-b-2 hover:border-b-purple-600'>Projects</a></li>
            <li><a href="#about" className='hover:bg-gray-700 py-1 px-4 rounded-lg hover:border-b-2 hover:border-b-purple-600'>About</a></li>
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
