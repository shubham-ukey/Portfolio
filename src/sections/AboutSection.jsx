import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { GraduationCap, Target, Code2 } from 'lucide-react'

import SectionHeading from '../components/SectionHeading'
import useReveal from '../hooks/useReveal'
import useReducedMotion from '../hooks/useReducedMotion'
import { profile } from '../data/profile'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const facts = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech, Information Technology, RTMNU',
  },
  {
    icon: Target,
    label: 'Target role',
    value: profile.role,
  },
  {
    icon: Code2,
    label: 'Focus',
    value: 'REST APIs, database integration, practical projects',
  },
]

export default function AboutSection() {
  const rootRef = useRef(null)
  const revealRef = useReveal()
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root || reduced) return

      const word = root.querySelector('[data-about-scroll-word]')
      const glow = root.querySelector('[data-about-glow]')

      // Scroll-triggered background text animation
      if (word) {
        gsap.fromTo(
          word,
          {
            x: 0,
            opacity: 0.1,
          },
          {
            x: '-28vw',
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

      // Mouse movement / parallax animation
      const handlePointerMove = (event) => {
        const bounds = root.getBoundingClientRect()

        if (!bounds.width || !bounds.height) return

        const x = (event.clientX - bounds.left) / bounds.width - 0.5
        const y = (event.clientY - bounds.top) / bounds.height - 0.5

        if (word) {
          gsap.to(word, {
            y: y * 24,
            duration: 0.8,
            ease: 'power2.out',
            overwrite: 'auto',
          })
        }

        if (glow) {
          gsap.to(glow, {
            x: x * 35,
            y: y * 25,
            duration: 1,
            ease: 'power2.out',
            overwrite: 'auto',
          })
        }
      }

      // Reset movement when pointer leaves the section
      const handlePointerLeave = () => {
        if (word) {
          gsap.to(word, {
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            overwrite: 'auto',
          })
        }

        if (glow) {
          gsap.to(glow, {
            x: 0,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            overwrite: 'auto',
          })
        }
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
      id="about"
      ref={rootRef}
      aria-labelledby="about-title"
      className="relative isolate overflow-hidden bg-panel/70 pt-36 pb-24 sm:pt-40 lg:pt-48 lg:pb-28"
    >
      {/* Large animated background word */}
      <div
        data-about-scroll-word
        aria-hidden="true"
        className="pointer-events-none absolute left-[4%] top-[13%] z-0 select-none whitespace-nowrap font-black uppercase leading-none tracking-[-0.07em] text-brand text-[24vw] sm:text-[20vw] lg:text-[17vw]"
      >
        DEVELOPER
      </div>

      {/* Mouse-following background glow */}
      <div
        data-about-glow
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 z-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="container-page relative z-10">
        <SectionHeading id="about-title" title="About me" />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* About description */}
          <div
            ref={revealRef}
            className="space-y-5 text-mute"
            data-reveal
          >
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="max-w-prose leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Personal details */}
          <dl
            data-reveal
            className="space-y-5 self-start rounded-xl border border-line bg-card/90 p-6 shadow-xl shadow-black/10 backdrop-blur-sm"
          >
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <Icon
                  size={20}
                  className="mt-1 shrink-0 text-accent"
                  aria-hidden="true"
                />

                <div>
                  <dt className="text-sm text-mute">{label}</dt>
                  <dd className="font-medium">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}