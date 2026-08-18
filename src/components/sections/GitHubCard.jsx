import { useEffect, useState } from 'react';
import { ArrowUpRight, Folder, Star } from '@phosphor-icons/react';
import { socials } from '../../data/site.js';

const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  PHP: '#4f5d95',
  C: '#555555',
  'C++': '#f34b7d',
  Java: '#b07219',
  Python: '#3572A5',
  SQL: '#e38c00',
  Blade: '#f7523f',
  Laravel: '#ff2d20',
  'Node.js': '#339933',
  Express: '#8a8a8a',
  MongoDB: '#47A248',
  PostgreSQL: '#336791',
  'Next.js': '#000000',
  Supabase: '#3ECF8E',
};

const formatDate = dateStr => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
};

export const GitHubCard = ({ username = 'Ryystuffs' }) => {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);
  const profile = socials.find(social => social.label === 'GitHub');

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=4`)
      .then(res => {
        if (!res.ok) throw new Error('GitHub request failed');
        return res.json();
      })
      .then(data => {
        if (!cancelled) setRepos(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  return (
    <div className="surface-card p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="font-display text-xl font-medium">Latest on GitHub</h3>
        <a
          href={profile?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-sm text-accent transition hover:text-ink"
        >
          @{username} <ArrowUpRight size={16} />
        </a>
      </div>

      {error && (
        <p className="text-sm leading-relaxed text-muted">
          Couldn't load repos right now.{' '}
          <a
            href={profile?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-2 hover:underline"
          >
            See my GitHub →
          </a>
        </p>
      )}

      {!error && !repos && (
        <div className="space-y-4">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="animate-pulse space-y-2 rounded-lg border border-line bg-canvas p-4">
              <div className="h-3 w-1/3 rounded bg-line" />
              <div className="h-2 w-2/3 rounded bg-line" />
            </div>
          ))}
        </div>
      )}

      {repos && (
        <ul className="space-y-3">
          {repos.map(repo => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-line bg-paper p-4 transition hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 font-medium text-ink">
                    <Folder size={16} className="text-accent" />
                    {repo.name}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-xs text-muted">
                    <Star size={14} /> {repo.stargazers_count}
                  </span>
                </div>
                {repo.description && (
                  <p className="mt-2 line-clamp-1 text-sm text-muted">{repo.description}</p>
                )}
                <div className="mt-3 flex items-center gap-4 text-xs text-muted">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{
                          backgroundColor: languageColors[repo.language] || '#956400',
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};