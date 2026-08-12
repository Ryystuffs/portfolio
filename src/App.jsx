import './index.css';
import { Analytics } from '@vercel/analytics/react';
import { Home } from './components/sections/Home.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { About } from './components/sections/About.jsx';
import { Navbar } from './components/navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { ScrollProgress } from './components/ScrollProgress.jsx';
import LightRays from './components/sections/LightRays';

function App() {
  return (
    <div className="relative min-h-screen bg-ink text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[70] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Navbar />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightRays raysOrigin="top-center" raysColor="#00ffff" raysSpeed={1.5} followMouse={true} />
      </div>

      <main id="main" className="relative z-10 overflow-x-hidden">
        <Home />
        <Projects />
        <About />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
