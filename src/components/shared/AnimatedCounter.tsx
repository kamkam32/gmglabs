'use client'

import { useEffect, useState } from 'react'
import { Text, TextProps } from '@chakra-ui/react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimatedCounterProps extends TextProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  ...props
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, isInView } = useScrollAnimation()

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  return (
    <Text ref={ref} {...props}>
      {prefix}{count}{suffix}
    </Text>
  )
}
