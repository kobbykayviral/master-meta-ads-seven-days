import { useEffect } from 'react'

// Adds the `.reveal` class treatment: fades + slides elements up as they
// scroll into view. Respects prefers-reduced-motion via CSS (see index.css).
export default function useReveal(deps = []) {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
