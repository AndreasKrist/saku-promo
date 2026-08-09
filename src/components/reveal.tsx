'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

export function Reveal({
  children,
  className = '',
  delay = 0,
  distance = 26,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  distance?: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={
        reduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              clipPath: 'inset(0 0 14% 0)',
              transform: `translateY(${distance}px)`,
            }
      }
      whileInView={{
        opacity: 1,
        clipPath: 'inset(0 0 0 0)',
        transform: 'translateY(0)',
      }}
      viewport={{ once: true, margin: '-90px 0px' }}
      transition={{ duration: 0.65, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealFromSide({
  children,
  className = '',
  delay = 0,
  side = 'right',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  side?: 'left' | 'right'
}) {
  const reduceMotion = useReducedMotion()
  const offset = side === 'right' ? 42 : -42
  const rotation = side === 'right' ? 0.8 : -0.8

  return (
    <motion.div
      initial={
        reduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              clipPath: `inset(0 ${side === 'right' ? '8%' : '0'} 0 ${side === 'left' ? '8%' : '0'})`,
              transform: `translateX(${offset}px) rotate(${rotation}deg)`,
            }
      }
      whileInView={{
        opacity: 1,
        clipPath: 'inset(0 0 0 0)',
        transform: 'translateX(0) rotate(0deg)',
      }}
      viewport={{ once: true, margin: '-90px 0px' }}
      transition={{ duration: 0.65, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScrollParallax({
  children,
  className = '',
  amount = 28,
  rotate = 0,
}: {
  children: React.ReactNode
  className?: string
  amount?: number
  rotate?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [
      `translateY(${amount}px) rotate(${-rotate}deg)`,
      `translateY(${-amount}px) rotate(${rotate}deg)`,
    ],
  )

  return (
    <motion.div
      ref={ref}
      style={reduceMotion ? undefined : { transform }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScrollScale({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    ['scale(0.95) translateY(28px)', 'scale(1) translateY(0)'],
  )
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0.62, 1])

  return (
    <motion.div
      ref={ref}
      style={reduceMotion ? undefined : { transform, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
