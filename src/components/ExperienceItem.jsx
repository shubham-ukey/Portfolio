export default function ExperienceItem({ item }) {
  const { organisation, role, location, dates, points, tech } = item
  return (
    <article data-reveal className="relative pl-8">
      <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-navy bg-brand" aria-hidden="true" />
      <h3 className="text-lg font-bold">
        {role} <span className="text-mute">at</span> {organisation}
      </h3>
      <p className="mt-1 text-sm text-mute">
        {location} &middot; {dates}
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink/90">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      {tech.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
