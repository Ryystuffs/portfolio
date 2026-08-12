import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Facebook,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { site, socials } from '../data/site.js';

const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Facebook };

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
    <footer id="contact" className="relative z-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="glass-card p-8 text-center sm:p-14">
          <p className="eyebrow mb-4">04 // contact</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Let's build something together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Open to web development and IT internship opportunities — let's talk.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${site.email}`} className="btn-primary">
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <button type="button" onClick={copyEmail} className="btn-ghost">
              {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy email'}
            </button>
            <a href={site.resume} download className="btn-ghost">
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
          <p className="mt-6 font-mono text-sm text-white/40">
            <ArrowUpRight className="mr-1 inline h-3.5 w-3.5" />
            or connect on your preferred platform
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="font-mono text-sm text-white/40">
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                </li>
              );
            })}
          </ul>
          <a href="#home" className="font-mono text-sm text-white/40 transition hover:text-accent">
            back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
