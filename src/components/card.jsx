import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Github, Rocket } from 'lucide-react';
import { motion as Motion } from 'motion/react';

export const Card = ({
  pic,
  title,
  role,
  description,
  problem,
  highlights = [],
  outcome = [],
  techStack,
  link,
  live,
  vid,
  year,
  status,
  index = 0,
  featured = false,
}) => {
  const [caseOpen, setCaseOpen] = useState(false);
  const isEven = index % 2 === 0;
  const mediaOrder = isEven ? '' : 'md:order-2';
  const contentOrder = isEven ? '' : 'md:order-1';

  return (
    <article className="glass-card overflow-hidden p-5 sm:p-8 lg:p-10">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={mediaOrder}
        >
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            {vid ? (
              <iframe
                className="aspect-video w-full"
                src={vid}
                title={`${title} demo video`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={pic}
                alt={`${title} screenshot`}
                loading="lazy"
                decoding="async"
                width={1280}
                height={720}
                className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            )}
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className={contentOrder}
        >
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm text-accent">0{index + 1}</span>
            {featured && (
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-accent">
                Featured
              </span>
            )}
            {status && (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-white/60">
                {status}
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">{title}</h3>
            {year && <span className="font-mono text-sm text-white/40">{year}</span>}
          </div>
          <p className="mt-2 text-sm font-medium text-violet-300">{role}</p>
          <hr className="my-5 border-white/10" />
          <p className="leading-relaxed text-white/70">{description}</p>

          <button
            type="button"
            onClick={() => setCaseOpen(prev => !prev)}
            aria-expanded={caseOpen}
            aria-controls={`case-${index}`}
            className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-accent transition hover:text-white"
          >
            {caseOpen ? 'Hide case study' : 'View case study'}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${caseOpen ? 'rotate-180' : ''}`}
            />
          </button>

          <div
            id={`case-${index}`}
            className={`grid transition-all duration-300 ${
              caseOpen ? 'mt-5 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-5">
                {problem && (
                  <div>
                    <p className="mb-1.5 font-mono text-xs uppercase tracking-widest text-white/40">
                      Problem
                    </p>
                    <p className="leading-relaxed text-white/70">{problem}</p>
                  </div>
                )}

                {highlights.length > 0 && (
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-white/40">
                      What I did
                    </p>
                    <ul className="space-y-2">
                      {highlights.map(item => (
                        <li key={item} className="flex gap-2 text-sm leading-relaxed text-white/70">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {outcome.length > 0 && (
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-white/40">
                      Outcome
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {outcome.map(item => (
                        <span
                          key={item.label}
                          className="rounded-lg border border-accent/25 bg-accent/5 px-3 py-1.5"
                        >
                          <span className="font-mono text-sm text-accent">{item.value}</span>{' '}
                          <span className="text-sm text-white/60">{item.label}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="my-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-white/40">
              Technologies
            </p>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
              {techStack.map(tech => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Github className="h-4 w-4" /> View on GitHub
            </a>
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Rocket className="h-4 w-4" /> Live Link <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </Motion.div>
      </div>
    </article>
  );
};
