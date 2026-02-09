'use client'

import { useEffect, useRef, useCallback } from 'react'
import { Text, TextProps } from '@chakra-ui/react'

interface AnimatedCounterProps extends TextProps {
  /** The target number to count up to */
  target: number
  /** Suffix appended after the number (e.g. '+', '%', 'K+') */
  suffix?: string
  /** Prefix prepended before the number (e.g. '$') */
  prefix?: string
  /** Duration of the count animation in ms */
  duration?: number
  /** Number of decimal places to show (auto-detected from target if not set) */
  decimals?: number
}

/**
 * Parses a display string like '10K+', '5K+', '98', '99.9%' into
 * { numeric: number, suffix: string, decimals: number }
 */
export function parseMetricValue(value: string): {
  numeric: number
  suffix: string
  decimals: number
} {
  const trimmed = value.trim()
  // Match optional number (with decimals) and the rest as suffix
  const match = trimmed.match(/^([\d.]+)\s*(.*)$/)
  if (!match) return { numeric: 0, suffix: trimmed, decimals: 0 }

  const numStr = match[1]
  let suffix = match[2] || ''
  let numeric = parseFloat(numStr)

  // Detect decimals from the original number string
  const decimalMatch = numStr.match(/\.(\d+)/)
  const decimals = decimalMatch ? decimalMatch[1].length : 0

  // Handle K suffix (multiply by 1000 is NOT needed since we display as-is)
  // We keep the numeric value as-is and preserve the suffix

  return { numeric, suffix, decimals }
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  decimals,
  ...props
}: AnimatedCounterProps) {
  const textRef = useRef<HTMLParagraphElement>(null)
  const hasAnimated = useRef(false)
  const rafId = useRef<number>(0)

  // Auto-detect decimals from target if not explicitly provided
  const decimalPlaces = decimals ?? (target % 1 !== 0 ? String(target).split('.')[1]?.length ?? 1 : 0)

  const animate = useCallback(() => {
    if (!textRef.current) return
    const el = textRef.current
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * target

      if (decimalPlaces > 0) {
        el.textContent = `${prefix}${current.toFixed(decimalPlaces)}${suffix}`
      } else {
        el.textContent = `${prefix}${Math.floor(current)}${suffix}`
      }

      if (progress < 1) {
        rafId.current = requestAnimationFrame(tick)
      } else {
        // Ensure final value is exact
        if (decimalPlaces > 0) {
          el.textContent = `${prefix}${target.toFixed(decimalPlaces)}${suffix}`
        } else {
          el.textContent = `${prefix}${target}${suffix}`
        }
      }
    }

    rafId.current = requestAnimationFrame(tick)
  }, [target, suffix, prefix, duration, decimalPlaces])

  useEffect(() => {
    const el = textRef.current
    if (!el) return

    // Set initial value
    el.textContent = `${prefix}0${decimalPlaces > 0 ? '.' + '0'.repeat(decimalPlaces) : ''}${suffix}`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            animate()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [animate, prefix, suffix, decimalPlaces])

  return <Text ref={textRef} {...props} />
}
