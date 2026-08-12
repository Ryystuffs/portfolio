import { GitHubCard } from './GitHubCard';

export const About = () => {
  const frontend = ['TailwindCSS', 'Next.js', 'React', 'JavaScript', 'HTML', 'CSS', 'Blade'];
  const backend = [
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Supabase',
    'PHP',
    'Laravel',
    'MySQL',
    'C++',
  ];
  const tools = ['Vercel', 'Render', 'XAMPP'];

  return (
    <section id="about" className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14">
          <p className="eyebrow mb-3">03 // about</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">About me</h2>
        </div>

        <p className="max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          An aspiring{' '}
          <span className="font-semibold text-violet-300">Web Developer</span> with expertise in
          full-stack development — building scalable websites and creating innovative solutions.
        </p>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="glass-card p-6 sm:p-8">
            <h3 className="mb-5 font-display text-xl font-bold">Frontend</h3>
            <div className="grid grid-cols-2 gap-2">
              {frontend.map(skill => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-card p-6 sm:p-8">
            <h3 className="mb-5 font-display text-xl font-bold">Backend &amp; Database</h3>
            <div className="grid grid-cols-2 gap-2">
              {backend.map(skill => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-card p-6 sm:p-8">
            <h3 className="mb-5 font-display text-xl font-bold">Tools &amp; Deployment</h3>
            <div className="grid grid-cols-2 gap-2">
              {tools.map(skill => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="glass-card p-6 sm:p-8">
            <h3 className="mb-6 font-display text-xl font-bold">Education</h3>
            <div className="border-l-2 border-accent/40 pl-5">
              <p className="font-semibold">B.S. in Information Technology</p>
              <p className="mt-1 text-white/70">Rizal Technological University</p>
              <p className="mt-1 font-mono text-sm text-white/50">2023 — Present</p>
            </div>
          </div>
          <div className="glass-card p-6 sm:p-8">
            <h3 className="mb-6 font-display text-xl font-bold">Experience</h3>
            <div className="border-l-2 border-violet-400/40 pl-5">
              <p className="font-semibold">Information Technology Intern</p>
              <p className="mt-1 text-white/70">Silangan National High School</p>
              <p className="mt-1 font-mono text-sm text-white/50">Mar 2023 — May 2023</p>
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
