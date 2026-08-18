import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, EnvelopeSimple } from '@phosphor-icons/react';
import { site, socialIcons, socials } from '../data/site.js';

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <footer id="contact" className="relative z-10 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="surface-card p-8 text-center sm:p-14">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Let's build something together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Open to web development and IT internship opportunities — let's talk.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${site.email}`} className="btn-primary">
              <EnvelopeSimple size={16} /> {site.email}
            </a>
            <button type="button" onClick={copyEmail} className="btn-secondary">
              {copied ? <Check size={16} className="text-pale-green-ink" /> : <Copy size={16} />}
              {copied ? 'Copied!' : 'Copy email'}
            </button>
            <a href={site.resume} download className="btn-secondary">
              <Download size={16} /> Resume
            </a>
          </div>
          <p className="mt-6 font-mono text-sm text-muted">
            <ArrowUpRight size={14} className="mr-1 inline text-accent" />
            or connect on your preferred platform
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="font-mono text-sm text-muted">
            © {new Date().getFullYear()} Ryan Trinidad
          </p>
          <ul className="flex gap-2">
            {socials.map(social => {
              const Icon = socialIcons[social.label];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-line bg-paper text-muted transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                  >
                    {Icon && <Icon size={16} />}
                  </a>
                </li>
              );
            })}
          </ul>
          <a href="#home" className="font-mono text-sm text-muted transition hover:text-accent">
            back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};