import { Github, ExternalLink, CheckCircle2 } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { name, status, problem, solution, features, tech, github, demo } = project
  return (
    <article
      data-reveal
      className="flex flex-col rounded-xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_12px_40px_-12px_rgba(59,130,246,0.35)]"
    >
      <header className="mb-3 flex flex-wrap items-center gap-3">
        <h3 className="text-xl font-bold leading-snug">{name}</h3>
        {status && (
          <span className="rounded-md border border-accent/60 px-2 py-0.5 font-mono text-xs text-accent">{status}</span>
        )}
      </header>

      <p className="text-sm text-mute">{problem}</p>
      <p className="mt-3 text-sm text-ink/90">{solution}</p>

      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <ul className="mb-5 mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {tech.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-5 border-t border-line pt-4 text-sm font-semibold">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on GitHub`}
          className="inline-flex items-center gap-2 text-accent hover:underline"
        >
          <Github size={16} aria-hidden="true" /> GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} live demo`}
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <ExternalLink size={16} aria-hidden="true" /> Live demo
          </a>
        )}
      </div>
    </article>
  )
}
