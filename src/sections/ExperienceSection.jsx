import SectionHeading from '../components/SectionHeading'
import ExperienceItem from '../components/ExperienceItem'
import useReveal from '../hooks/useReveal'
import { experience } from '../data/experience'

export default function ExperienceSection() {
  const ref = useReveal()
  return (
    <section id="experience" ref={ref} aria-labelledby="experience-title" className="py-24">
      <div className="container-page">
        <SectionHeading id="experience-title" title="Experience" subtitle="Internships and hands-on work." />
        <div className="ml-2 space-y-10 border-l-2 border-line">
          {experience.map((item) => (
            <ExperienceItem key={item.organisation} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
