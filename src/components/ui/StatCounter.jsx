import { useEffect, useRef, useState } from 'react'

const DURATION_MS = 1200

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)

/**
 * Counts the leading number of a stat up to its value once it scrolls into
 * view, keeping any suffix — so "10" and "100K+" both animate correctly.
 *
 * Uses a fixed duration rather than a fixed step, so every stat on a row
 * lands at the same moment regardless of magnitude. The previous
 * implementation stepped by max(1, n/60) every 20ms, which made "100K+" take
 * five times longer than "10" sitting next to it.
 */
export default function StatCounter({ value }) {
  const [, leading, trailing] = String(value).match(/^(\d+)(.*)$/) ?? []
  const isNumeric = leading !== undefined
  const target = isNumeric ? parseInt(leading, 10) : 0

  // Start at the final value when animation is off or the value is not a
  // number, so the stat is never left reading zero.
  const [val, setVal] = useState(() =>
    !isNumeric || prefersReducedMotion() ? target : 0,
  )
  const ref = useRef(null)

  useEffect(() => {
    if (!isNumeric || prefersReducedMotion()) return

    const node = ref.current
    if (!node) return

    let frame = 0
    let start = null

    const observer = new IntersectionObserver(([entry], obs) => {
      if (!entry.isIntersecting) return
      obs.disconnect()
      const tick = (now) => {
        if (start === null) start = now
        const progress = Math.min((now - start) / DURATION_MS, 1)
        // Ease out, so the number decelerates into its final value.
        setVal(Math.round(target * (1 - Math.pow(1 - progress, 3))))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.3 })

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [isNumeric, target])

  if (!isNumeric) return <span>{value}</span>
  return <span ref={ref}>{val}{trailing}</span>
}
