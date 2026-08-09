'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

const message =
  'Transaksi jelas  •  Modal tercatat  •  Bagi hasil tepat  •  Semua mitra melihat  •  '

export function ScrollTicker() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    ['translateX(-4%)', 'translateX(-28%)'],
  )

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="overflow-hidden border-y border-brand/25 bg-brand-soft py-4 text-brand-dark sm:py-5"
    >
      <motion.p
        style={reduceMotion ? undefined : { transform }}
        className="w-max whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(1.35rem,3vw,2.3rem)] tracking-[-0.035em]"
      >
        {message.repeat(4)}
      </motion.p>
    </div>
  )
}
