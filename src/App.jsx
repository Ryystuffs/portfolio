import './index.css';
import { Analytics } from '@vercel/analytics/react';
import { Home } from './components/sections/Home.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { About } from './components/sections/About.jsx';
import { Navbar } from './components/navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { ScrollProgress } from './components/ScrollProgress.jsx';
import { AmbientBackground } from './components/AmbientBackground.jsx';

function App() {
  return (
    <div className="relative min-h-screen bg-canvas text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[70] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Navbar />

      <AmbientBackground />

      <main id="main" className="relative z-10 overflow-x-hidden">
        <Home />
        <About />
        <Projects />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;