'use client'

import { useEffect, useRef, useCallback } from 'react'

interface TiltOptions {
  /** Maximum tilt angle in degrees (default: 8) */
  maxTilt?: number
  /** Speed of the return-to-flat transition in ms (default: 400) */
  resetSpeed?: number
  /** Perspective value in px (default: 800) */
  perspective?: number
  /** Shadow shift multiplier (default: 1) */
  shadowIntensity?: number
  /** Accent color for the shadow glow (default: rgba(0,212,255,0.15)) */
  glowColor?: string
}

/**
 * A hook that adds a 3D tilt effect on hover using vanilla DOM events
 * and refs -- no React state, no re-renders.
 *
 * Returns a ref to attach to the element you want to tilt.
 */
export function useTiltEffect<T extends HTMLElement = HTMLDivElement>(
  options: TiltOptions = {}
) {
  const {
    maxTilt = 8,
    resetSpeed = 400,
    perspective = 800,
    shadowIntensity = 1,
    glowColor = 'rgba(0, 212, 255, 0.15)',
  } = options

  const ref = useRef<T>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // Normalize to -1..1
      const normalizedX = (x - centerX) / centerX
      const normalizedY = (y - centerY) / centerY

      // RotateY follows mouse X, rotateX inverts mouse Y
      const rotateY = normalizedX * maxTilt
      const rotateX = -normalizedY * maxTilt

      // Shadow shifts opposite to tilt direction for depth illusion
      const shadowX = normalizedX * 10 * shadowIntensity
      const shadowY = normalizedY * 10 * shadowIntensity

      el.style.transition = 'none'
      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
      el.style.boxShadow = `${shadowX}px ${shadowY}px 30px ${glowColor}`
    },
    [maxTilt, perspective, shadowIntensity, glowColor]
  )

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return

    el.style.transition = `transform ${resetSpeed}ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow ${resetSpeed}ms cubic-bezier(0.23, 1, 0.32, 1)`
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    el.style.boxShadow = '0 0 0 transparent'
  }, [resetSpeed, perspective])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Set initial styles
    el.style.transformStyle = 'preserve-3d'
    el.style.willChange = 'transform, box-shadow'

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return ref
}
