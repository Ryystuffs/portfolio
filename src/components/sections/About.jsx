import { GitHubCard } from './GitHubCard.jsx';
import { skills, skillTitles } from '../../data/skills.js';

const chipColors = {
  frontend: 'bg-pale-blue text-pale-blue-ink border-pale-blue',
  backend: 'bg-pale-green text-pale-green-ink border-pale-green',
  tools: 'bg-pale-yellow text-pale-yellow-ink border-pale-yellow',
};

export const About = () => {
  return (
    <section id="about" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14">
          <p className="eyebrow mb-3">01 // about</p>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            About me
          </h2>
        </div>

        <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          An aspiring <span className="font-semibold text-accent">Web Developer</span> with
          expertise in full-stack development — building scalable websites and creating innovative
          solutions.
        </p>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} className="surface-card p-6 sm:p-8">
              <h3 className="mb-5 font-display text-xl font-medium">{skillTitles[group]}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map(skill => (
                  <span
                    key={skill}
                    className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm ${chipColors[group]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="surface-card p-6 sm:p-8">
            <h3 className="mb-6 font-display text-xl font-medium">Education</h3>
            <div className="border-l border-line pl-5">
              <p className="font-semibold">B.S. in Information Technology</p>
              <p className="mt-1 text-muted">Rizal Technological University</p>
              <p className="mt-1 font-mono text-sm text-muted">2023 — Present</p>
            </div>
          </div>
          <div className="surface-card p-6 sm:p-8">
            <h3 className="mb-6 font-display text-xl font-medium">Experience</h3>
            <div className="border-l border-line pl-5">
              <p className="font-semibold">Information Technology Intern</p>
              <p className="mt-1 text-muted">Silangan National High School</p>
              <p className="mt-1 font-mono text-sm text-muted">Mar 2023 — May 2023</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <GitHubCard />
        </div>
      </div>
    </section>
  );
};