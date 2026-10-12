import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ;['home', ...links.map(([id]) => id)].forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-navy/85 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="text-lg font-extrabold tracking-tight">
          {profile.shortName.split(' ')[0]}
          <span className="text-brand">.</span>
          {profile.shortName.split(' ')[1]}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`border-b-2 py-1 text-sm font-medium transition-colors ${
                  active === id ? 'border-brand text-ink' : 'border-transparent text-mute hover:text-ink'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg border border-line p-2 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-panel px-5 pb-4 pt-2 md:hidden">
          {links.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block py-3 text-base font-medium ${active === id ? 'text-brand' : 'text-ink'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
