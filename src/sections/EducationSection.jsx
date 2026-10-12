import { GraduationCap, MapPin, CalendarDays, Award } from 'lucide-react'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import SectionHeading from '../components/SectionHeading'
import useReveal from '../hooks/useReveal'
import useReducedMotion from '../hooks/useReducedMotion'
import { education } from '../data/education'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function EducationSection() {
  const rootRef = useRef(null)
  const revealRef = useReveal()
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root || reduced) return

      const backgroundText = root.querySelector('[data-education-word]')
      const cards = root.querySelectorAll('[data-education-card]')

      // Background typography follows the scroll
      if (backgroundText) {
        gsap.fromTo(
          backgroundText,
          { x: '5vw', opacity: 0.07 },
          {
            x: '-12vw',
            opacity: 0.025,
            ease: 'none',
            scrollTrigger: {
              trigger: root,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          },
        )
      }

      // Reveal education cards one by one
      if (cards.length) {
        gsap.fromTo(
          cards,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.16,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cards[0].parentElement,
              start: 'top 85%',
              once: true,
            },
          },
        )
      }
    },
    {
      scope: rootRef,
      dependencies: [reduced],
      revertOnUpdate: true,
    },
  )

  return (
    <section
      id="education"
      ref={rootRef}
      aria-labelledby="education-title"
      className="relative isolate overflow-hidden bg-panel/70 py-24 sm:py-28 lg:py-32"
    >
      {/* Decorative background text */}
      <div
        data-education-word
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[12%] z-0 select-none whitespace-nowrap font-black uppercase leading-none tracking-[-0.07em] text-brand text-[24vw] sm:text-[20vw] lg:text-[17vw]"
      >
        EDUCATION
      </div>

      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 z-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-page relative z-10">
        <div ref={revealRef}>
          <SectionHeading
            id="education-title"
            title="Education"
            subtitle="My academic journey and the foundation behind my software development skills."
          />
        </div>

        <div className="relative mt-10 grid max-w-3xl gap-6">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-10 left-[22px] top-10 hidden w-px bg-gradient-to-b from-accent/70 via-line to-transparent sm:block"
          />

          {education.map((item, index) => (
            <article
              key={item.qualification}
              data-education-card
              className="group relative flex gap-4 rounded-2xl border border-line bg-card/85 p-5 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 sm:gap-5 sm:p-6"
            >
              {/* Qualification icon */}
              <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-brand/15 text-accent transition-colors duration-300 group-hover:bg-brand/25 sm:h-12 sm:w-12">
                <GraduationCap size={23} aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs tracking-wider text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {item.status && (
                    <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                      {item.status}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-accent sm:text-xl">
                  {item.qualification}
                </h3>

                <p className="mt-2 leading-relaxed text-mute">
                  {item.institution}
                </p>

                {item.location && (
                  <p className="mt-3 flex items-center gap-2 text-sm text-mute">
                    <MapPin size={15} aria-hidden="true" />
                    {item.location}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  {item.dates && (
                    <span className="flex items-center gap-2 text-sm text-mute">
                      <CalendarDays size={15} aria-hidden="true" />
                      {item.dates}
                    </span>
                  )}

                  {item.percentage && (
                    <span className="flex items-center gap-2 rounded-lg border border-line bg-panel px-3 py-1.5 text-sm font-semibold text-ink">
                      <Award size={15} className="text-accent" aria-hidden="true" />
                      {item.percentage}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}