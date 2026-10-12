export default function SectionHeading({ id, title, subtitle }) {
  return (
    <div className="mb-12 max-w-2xl" data-reveal>
      <h2 id={id} className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-brand to-accent" aria-hidden="true" />
      {subtitle && <p className="mt-5 text-mute">{subtitle}</p>}
    </div>
  )
}
