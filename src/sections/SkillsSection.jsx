import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import SectionHeading from '../components/SectionHeading'
import SkillGroup from '../components/SkillGroup'
import useReveal from '../hooks/useReveal'
import useReducedMotion from '../hooks/useReducedMotion'
import { skills } from '../data/skills'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function SkillsSection() {
  const rootRef = useRef(null)
  const revealRef = useReveal()
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root || reduced) return

      const backgroundText = root.querySelector('[data-skills-word]')
      const glow = root.querySelector('[data-skills-glow]')
      const cards = root.querySelectorAll('[data-skill-card]')

      // Background text moves horizontally on scroll
      if (backgroundText) {
        gsap.fromTo(
          backgroundText,
          { x: '8vw', opacity: 0.08 },
          {
            x: '-18vw',
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

      // Reveal skill cards with a staggered entrance
      if (cards.length) {
        gsap.fromTo(
          cards,
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cards[0].parentElement,
              start: 'top 85%',
              once: true,
            },
          },
        )
      }

      // Cursor-following glow
      const handlePointerMove = (event) => {
        if (!glow) return

        const bounds = root.getBoundingClientRect()
        const x = (event.clientX - bounds.left) / bounds.width - 0.5
        const y = (event.clientY - bounds.top) / bounds.height - 0.5

        gsap.to(glow, {
          x: x * 45,
          y: y * 35,
          duration: 0.9,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }

      const handlePointerLeave = () => {
        if (!glow) return

        gsap.to(glow, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }

      root.addEventListener('pointermove', handlePointerMove)
      root.addEventListener('pointerleave', handlePointerLeave)

      return () => {
        root.removeEventListener('pointermove', handlePointerMove)
        root.removeEventListener('pointerleave', handlePointerLeave)
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
      id="skills"
      ref={rootRef}
      aria-labelledby="skills-title"
      className="relative isolate overflow-hidden py-28 sm:py-32"
    >
      {/* Animated background typography */}
      <div
        data-skills-word
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[12%] z-0 select-none whitespace-nowrap font-black uppercase leading-none tracking-[-0.075em] text-brand text-[25vw] sm:text-[21vw] lg:text-[18vw]"
      >
        TECH STACK
      </div>

      {/* Cursor-following ambient glow */}
      <div
        data-skills-glow
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 z-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-page relative z-10">
        <div ref={revealRef}>
          <SectionHeading
            id="skills-title"
            title="Technical skills"
            subtitle="Backend first, with the frontend skills to build the interface on top."
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <div
              key={group.category}
              data-skill-card
              className="group relative rounded-2xl border border-line/80 bg-card/80 p-1 shadow-lg shadow-black/5 backdrop-blur-sm transition-colors duration-300 hover:border-accent/50"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-brand/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <SkillGroup {...group} />
              </div>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-3 font-mono text-xs text-mute/50"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}