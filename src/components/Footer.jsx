import { Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-mute sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. {profile.role}.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hover:text-accent">
            <Github size={20} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="hover:text-accent">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
