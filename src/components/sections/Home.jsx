import pic from '../../assets/pic.webp';
import { ArrowRight, ArrowUpRight, Download, Facebook, Github, Linkedin } from 'lucide-react';
import { motion as Motion } from 'motion/react';
import TextType from '../reactbits/TextType';
import { site, socials } from '../../data/site.js';

const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Facebook };

export const Home = () => {
  return (
    <section id="home" className="flex min-h-[calc(100vh-4rem)] items-center">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-center">
        <Motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              {site.status}
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Aspiring{' '}
            <TextType
              text={['Web Developer Intern', 'Tech Support Intern', 'Networking Intern']}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
              className="text-accent"
            />
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">{site.tagline}</p>

          <p className="mt-4 font-mono text-sm text-white/50">
            currently learning: {site.currentlyLearning.join(' · ')}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View my work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={site.resume} download className="btn-ghost">
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">
              find me on
            </span>
            <div className="h-px w-8 bg-white/15" />
            <div className="flex gap-3">
              {socials.map(social => {
                const Icon = socialIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex justify-center md:justify-end"
        >
          <div className="glass-card p-3">
            <img
              src={pic}
              alt="Portrait of Ryan Trinidad"
              width={320}
              height={320}
              loading="eager"
              className="aspect-square w-full max-w-sm rounded-xl object-cover ring-1 ring-accent/30"
            />
          </div>
        </Motion.div>
      </div>
    </section>
  );
};
