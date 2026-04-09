'use client'

import { useEffect } from 'react'

/**
 * Scroll-linked hero-to-about transition.
 * Sets --hero-scroll (0→1) on <html> as the user scrolls past the hero.
 * The about section reads this to lift gently into place.
 *
 * Uses requestAnimationFrame-throttled scroll listener for smooth 60fps.
 */
export default function HeroAboutTransition() {
  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const vh = window.innerHeight
        const scrollY = window.scrollY

        // Transition zone: 10% → 70% of viewport height
        const start = vh * 0.1
        const end = vh * 0.7
        const progress = Math.min(1, Math.max(0, (scrollY - start) / (end - start)))

        document.documentElement.style.setProperty('--hero-scroll', String(progress))
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // set initial value
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.documentElement.style.removeProperty('--hero-scroll')
    }
  }, [])

  // Renders nothing — purely a scroll-driven side-effect
  return null
}
