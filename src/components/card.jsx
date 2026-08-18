import { useState } from 'react';
import { ArrowUpRight, CaretDown, GithubLogo, Rocket } from '@phosphor-icons/react';
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
    <article className="surface-card overflow-hidden p-5 sm:p-8 lg:p-10">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <Motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={mediaOrder}
        >
          <div className="overflow-hidden rounded-lg border border-line bg-canvas">
            {vid ? (
              <iframe
                className="aspect-video w-full"
                src={vid}
                title={`${title} demo video`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={contentOrder}
        >
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm text-accent">0{index + 1}</span>
            {featured && <span className="tag-yellow">Featured</span>}
            {status && <span className="tag-gray">{status}</span>}
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">{title}</h3>
            {year && <span className="font-mono text-sm text-muted">{year}</span>}
          </div>
          <p className="mt-2 text-sm font-medium text-accent">{role}</p>
          <hr className="my-5 border-line" />
          <p className="leading-relaxed text-muted">{description}</p>

          <button
            type="button"
            onClick={() => setCaseOpen(prev => !prev)}
            aria-expanded={caseOpen}
            aria-controls={`case-${index}`}
            className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-accent transition hover:text-ink"
          >
            {caseOpen ? 'Hide case study' : 'View case study'}
            <CaretDown
              size={16}
              className={`transition-transform duration-300 ${caseOpen ? 'rotate-180' : ''}`}
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
                    <p className="mb-1.5 font-mono text-xs uppercase tracking-widest text-muted">
                      Problem
                    </p>
                    <p className="leading-relaxed text-muted">{problem}</p>
                  </div>
                )}

                {highlights.length > 0 && (
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
                      What I did
                    </p>
                    <ul className="space-y-2">
                      {highlights.map(item => (
                        <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {outcome.length > 0 && (
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
                      Outcome
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {outcome.map(item => (
                        <span
                          key={item.label}
                          className="rounded-md border border-line bg-canvas px-3 py-1.5"
                        >
                          <span className="font-mono text-sm text-accent">{item.value}</span>{' '}
                          <span className="text-sm text-muted">{item.label}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="my-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map(tech => (
                <span key={tech} className="chip w-auto">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <GithubLogo size={16} /> View on GitHub
            </a>
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Rocket size={16} /> Live Link <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </Motion.div>
      </div>
    </article>
  );
};