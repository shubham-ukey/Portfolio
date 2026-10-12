import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import useReducedMotion from './useReducedMotion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/**
 * Scroll reveal for every [data-reveal] element inside the returned ref.
 * Transform + opacity only. Skipped for reduced motion. GSAP cleans up on unmount.
 */
export default function useReveal() {
  const scope = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      if (reduced) return
      const items = gsap.utils.toArray('[data-reveal]', scope.current)
      if (!items.length) return

      gsap.set(items, { opacity: 0, y: 24 })
      ScrollTrigger.batch(items, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', overwrite: true }),
      })
    },
    { scope, dependencies: [reduced], revertOnUpdate: true },
  )

  return scope
}
