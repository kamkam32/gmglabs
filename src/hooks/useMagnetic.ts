'use client'

import { useRef, useEffect, useCallback } from 'react'

export function useMagnetic<T extends HTMLElement>(strength: number = 0.12) {
  const ref = useRef<T>(null)

  const onMouseMove = useCallback((e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * strength
    const dy = (e.clientY - cy) * strength
    // Cap the movement to max 6px so it stays subtle
    const maxMove = 6
    const clampedDx = Math.max(-maxMove, Math.min(maxMove, dx))
    const clampedDy = Math.max(-maxMove, Math.min(maxMove, dy))
    el.style.transition = 'transform 0.2s ease-out'
    el.style.transform = `translate(${clampedDx}px, ${clampedDy}px)`
  }, [strength])

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    el.style.transform = 'translate(0px, 0px)'
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)
    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [onMouseMove, onMouseLeave])

  return ref
}
