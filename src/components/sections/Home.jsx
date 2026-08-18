import pic from '../../assets/pic.webp';
import { ArrowRight, ArrowUpRight, Download } from '@phosphor-icons/react';
import { motion as Motion } from 'motion/react';
import { site, socialIcons, socials } from '../../data/site.js';

export const Home = () => {
  return (
    <section id="home" className="flex min-h-[calc(100vh-4rem)] items-center">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-center">
        <Motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6">
            <span className="tag-green">
              <span className="h-1.5 w-1.5 rounded-full bg-pale-green-ink" />
              {site.status}
            </span>
          </div>
          <h1 className="font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Aspiring{' '}
            <em className="inline-block pb-1 font-medium italic text-accent">Web Developer</em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{site.tagline}</p>

          <p className="mt-4 font-mono text-sm text-muted">
            currently learning: {site.currentlyLearning.join(' · ')}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View my work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch <ArrowUpRight size={16} />
            </a>
            <a href={site.resume} download className="btn-secondary">
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              find me on
            </span>
            <div className="h-px w-8 bg-line" />
            <div className="flex gap-2">
              {socials.map(social => {
                const Icon = socialIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-line bg-paper text-muted transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                  >
                    {Icon && <Icon size={16} />}
                  </a>
                );
              })}
            </div>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-lg bg-pale-yellow"
            />
            <div className="surface-card relative p-3">
              <img
                src={pic}
                alt="Portrait of Ryan Trinidad"
                width={320}
                height={320}
                loading="eager"
                className="aspect-square w-full max-w-sm rounded-lg object-cover"
              />
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};