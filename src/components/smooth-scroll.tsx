'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Lenis drives the *real* window scroll position, so Motion's useScroll reads
 * the same value — one scroll system, not two fighting each other.
 *
 * Disabled entirely under prefers-reduced-motion, and on coarse pointers
 * (mid-range Android pays for smoothing in dropped frames, and mobile browsers
 * already have good native inertia).
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarse = window.matchMedia('(pointer: coarse)')
    if (reduced.matches || coarse.matches) return

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      touchMultiplier: 1.4,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return null
}
