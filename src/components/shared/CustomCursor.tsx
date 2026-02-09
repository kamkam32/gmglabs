'use client'

import { useEffect, useRef } from 'react'

/**
 * Custom dual-circle cursor:
 * - Small inner dot (~8px) follows mouse instantly
 * - Larger outer ring (~35px) follows with smooth lerp delay
 * - Outer ring scales up when hovering interactive elements
 * - Hidden on touch devices
 * - Uses requestAnimationFrame + lerp, no React state
 */
export default function CustomCursor() {
  const innerRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const outerPos = useRef({ x: 0, y: 0 })
  const isVisible = useRef(false)
  const isHovering = useRef(false)
  const rafId = useRef<number>(0)

  useEffect(() => {
    // Detect touch device -- skip entirely
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0

    if (isTouchDevice) return

    const inner = innerRef.current
    const outer = outerRef.current
    if (!inner || !outer) return

    // Hide the default cursor on the whole page
    document.body.style.cursor = 'none'

    // Add global style to hide cursor on all elements
    const styleEl = document.createElement('style')
    styleEl.id = 'custom-cursor-style'
    styleEl.textContent = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `
    document.head.appendChild(styleEl)

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      // Inner dot follows immediately
      inner.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`

      if (!isVisible.current) {
        isVisible.current = true
        inner.style.opacity = '1'
        outer.style.opacity = '1'
      }
    }

    const onMouseLeave = () => {
      isVisible.current = false
      inner.style.opacity = '0'
      outer.style.opacity = '0'
    }

    const onMouseEnter = () => {
      isVisible.current = true
      inner.style.opacity = '1'
      outer.style.opacity = '1'
    }

    // Detect hover over interactive elements
    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, [data-interactive], label'

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest(interactiveSelector)) {
        if (!isHovering.current) {
          isHovering.current = true
          outer.style.width = '50px'
          outer.style.height = '50px'
          outer.style.borderColor = '#00D4FF'
          outer.style.backgroundColor = 'rgba(0, 212, 255, 0.06)'
          inner.style.backgroundColor = '#00D4FF'
          inner.style.transform = `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px) scale(0.7)`
        }
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest(interactiveSelector)) {
        // Check if relatedTarget is still inside an interactive element
        const relatedTarget = e.relatedTarget as HTMLElement | null
        if (!relatedTarget || !relatedTarget.closest(interactiveSelector)) {
          isHovering.current = false
          outer.style.width = '35px'
          outer.style.height = '35px'
          outer.style.borderColor = 'rgba(0, 212, 255, 0.5)'
          outer.style.backgroundColor = 'transparent'
          inner.style.backgroundColor = '#00D4FF'
          inner.style.transform = `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px) scale(1)`
        }
      }
    }

    // Animation loop for the outer ring (lerp)
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      outerPos.current.x = lerp(outerPos.current.x, mouse.current.x, 0.12)
      outerPos.current.y = lerp(outerPos.current.y, mouse.current.y, 0.12)

      const outerSize = isHovering.current ? 50 : 35
      const halfOuter = outerSize / 2

      outer.style.transform = `translate(${outerPos.current.x - halfOuter}px, ${outerPos.current.y - halfOuter}px)`

      rafId.current = requestAnimationFrame(animate)
    }

    // Initialize positions off-screen
    outerPos.current = { x: -100, y: -100 }
    mouse.current = { x: -100, y: -100 }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    rafId.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      cancelAnimationFrame(rafId.current)
      document.body.style.cursor = ''
      const existingStyle = document.getElementById('custom-cursor-style')
      if (existingStyle) existingStyle.remove()
    }
  }, [])

  return (
    <>
      {/* Inner dot */}
      <div
        ref={innerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#00D4FF',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          transition: 'background-color 0.2s, transform 0.1s',
          willChange: 'transform',
        }}
      />
      {/* Outer ring */}
      <div
        ref={outerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '35px',
          height: '35px',
          border: '1.5px solid rgba(0, 212, 255, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: 0,
          backgroundColor: 'transparent',
          transition:
            'width 0.3s cubic-bezier(0.23,1,0.32,1), height 0.3s cubic-bezier(0.23,1,0.32,1), border-color 0.3s, background-color 0.3s',
          willChange: 'transform',
        }}
      />
    </>
  )
}
