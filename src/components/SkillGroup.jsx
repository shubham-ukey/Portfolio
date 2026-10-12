import { Server, Database, Layout, Wrench, Layers } from 'lucide-react'

const icons = { server: Server, database: Database, layout: Layout, wrench: Wrench, layers: Layers }

export default function SkillGroup({ category, icon, items }) {
  const Icon = icons[icon] ?? Layers
  return (
    <article data-reveal className="rounded-xl border border-line bg-card p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/15 text-accent">
          <Icon size={20} aria-hidden="true" />
        </span>
        <h3 className="text-base font-bold">{category}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}
