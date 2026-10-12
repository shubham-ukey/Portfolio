import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import useReveal from '../hooks/useReveal'
import { projects } from '../data/projects'

export default function ProjectsSection() {
  const ref = useReveal()
  return (
    <section id="projects" ref={ref} aria-labelledby="projects-title" className="bg-panel/70 py-24">
      <div className="container-page">
        <SectionHeading
          id="projects-title"
          title="Featured projects"
          subtitle="Backend-focused work built with Java and Spring Boot."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
