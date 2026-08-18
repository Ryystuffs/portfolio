import { Card } from '../card.jsx';
import { projects } from '../../data/projects.js';

export const Projects = () => {
  return (
    <section id="projects" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14">
          <p className="eyebrow mb-3">02 // projects</p>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Selected work
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Full-stack builds — from school projects to live web applications.
          </p>
        </div>

        <div className="flex flex-col gap-10 sm:gap-16">
          {projects.map((proj, index) => (
            <Card key={proj.title} {...proj} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};