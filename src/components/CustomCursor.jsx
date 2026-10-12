import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)

  useGSAP(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current

    if (!cursor || !dot) return

    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    )

    if (!finePointer.matches) return

    gsap.set([cursor, dot], {
      xPercent: -50,
      yPercent: -50,
    })

    const moveCursorX = gsap.quickTo(cursor, 'x', {
      duration: 0.35,
      ease: 'power3.out',
    })

    const moveCursorY = gsap.quickTo(cursor, 'y', {
      duration: 0.35,
      ease: 'power3.out',
    })

    const moveDotX = gsap.quickTo(dot, 'x', {
      duration: 0.12,
      ease: 'power2.out',
    })

    const moveDotY = gsap.quickTo(dot, 'y', {
      duration: 0.12,
      ease: 'power2.out',
    })

    const handlePointerMove = (event) => {
      gsap.to([cursor, dot], {
        autoAlpha: 1,
        duration: 0.2,
        overwrite: 'auto',
      })

      moveCursorX(event.clientX)
      moveCursorY(event.clientY)
      moveDotX(event.clientX)
      moveDotY(event.clientY)
    }

    const handlePointerOver = (event) => {
      const target = event.target

      if (!(target instanceof Element)) return

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor-hover]',
      )

      gsap.to(cursor, {
        scale: interactive ? 1.65 : 1,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      })

      gsap.to(dot, {
        scale: interactive ? 0.5 : 1,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    const handleWindowLeave = () => {
      gsap.to([cursor, dot], {
        autoAlpha: 0,
        duration: 0.2,
        overwrite: 'auto',
      })
    }

    const handleWindowEnter = () => {
      gsap.to([cursor, dot], {
        autoAlpha: 1,
        duration: 0.2,
        overwrite: 'auto',
      })
    }

    document.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('pointerover', handlePointerOver)
    document.documentElement.addEventListener(
      'pointerleave',
      handleWindowLeave,
    )
    document.documentElement.addEventListener(
      'pointerenter',
      handleWindowEnter,
    )

    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerover', handlePointerOver)
      document.documentElement.removeEventListener(
        'pointerleave',
        handleWindowLeave,
      )
      document.documentElement.removeEventListener(
        'pointerenter',
        handleWindowEnter,
      )
    }
  })

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border border-accent/80 opacity-0"
      />

      <div
        ref={dotRef}
        aria-hidden="true"
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[10000] h-1.5 w-1.5 rounded-full bg-accent opacity-0"
      />
    </>
  )
}