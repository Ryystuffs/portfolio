import { List, X } from '@phosphor-icons/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import useActiveSection from './useActiveSection.jsx';

const links = [
  { href: '#home', label: 'Home', num: '01' },
  { href: '#about', label: 'About', num: '02' },
  { href: '#projects', label: 'Projects', num: '03' },
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
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between border-b border-line bg-canvas/85 px-5 backdrop-blur-xl sm:px-8"
      >
        <a href="#home" className="font-mono text-lg font-semibold text-ink">
          ryan.<span className="text-accent">dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group inline-flex items-center gap-1.5 text-sm font-medium transition ${
                  activeSection === link.href.slice(1)
                    ? 'text-ink'
                    : 'text-muted hover:text-ink'
                }`}
              >
                <span
                  className={`font-mono text-xs transition ${
                    activeSection === link.href.slice(1)
                      ? 'text-accent'
                      : 'text-muted/70 group-hover:text-accent'
                  }`}
                >
                  {link.num}
                </span>
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
            className="rounded-md border border-line bg-paper p-2 text-ink md:hidden"
          >
            {isOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        inert={!isOpen}
        aria-hidden={!isOpen}
        className={`fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto overscroll-contain border-b border-line bg-canvas/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="m-auto flex w-full flex-col items-center gap-6 py-10 sm:gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`font-display text-3xl transition sm:text-4xl ${
                activeSection === link.href.slice(1) ? 'text-accent' : 'text-ink hover:text-accent'
              }`}
            >
              <span className="mr-2 font-mono text-sm text-muted">{link.num}</span>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className="btn-primary mt-2">
            Contact me
          </a>
        </div>
      </div>
    </header>
  );
};