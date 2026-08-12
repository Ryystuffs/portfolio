import { Menu, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import useActiveSection from './useActiveSection.jsx';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const activeSection = useActiveSection();

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = () => setIsOpen(prev => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = e => {
      if (e.key === 'Escape') closeMenu();
    };
    const onMouseDown = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) closeMenu();
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('mousedown', onMouseDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, [isOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-50">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between border-b border-white/10 bg-black/40 px-5 backdrop-blur-xl sm:px-8"
      >
        <a href="#home" className="font-mono text-lg font-semibold text-white">
          ryan.<span className="text-violet-400">dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden px-5 py-2 md:inline-flex">
            Contact
          </a>
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-white md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          ref={menuRef}
          inert={!isOpen}
          aria-hidden={!isOpen}
          className={`fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col items-center justify-center gap-8 bg-black/80 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
            isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`font-display text-3xl transition ${
                activeSection === link.href.slice(1) ? 'text-accent' : 'text-white hover:text-accent'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className="btn-primary mt-2">
            Contact me
          </a>
        </div>
      </nav>
    </header>
  );
};
