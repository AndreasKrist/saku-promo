'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { PrimaryCta, SecondaryCta } from '@/components/cta'
import { ScreenTransaksi, ScreenKepemilikan } from '@/components/screens'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // The mockup starts tilted back in 3D and settles flat as it scrolls into
  // place — tied to scroll offset, not to a timer.
  const rotateX = useTransform(scrollYProgress, [0, 0.55], [14, 0])
  const scale = useTransform(scrollYProgress, [0, 0.55], [0.94, 1])
  const y = useTransform(scrollYProgress, [0, 1], [0, -110])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const cueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <section ref={ref} className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="rail">
        <motion.div
          style={reduced ? undefined : { y: copyY, opacity: copyOpacity }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="eyebrow text-brand-dark">Untuk usaha yang dijalankan bersama</p>
          <h1 className="display mt-5">Uang usaha jelas untuk semua mitra.</h1>
          <p className="subhead mx-auto mt-6 max-w-2xl text-muted">
            Catat transaksi, modal, dan bagi hasil tanpa debat soal siapa membayar dan
            siapa berhak menarik.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCta />
            <SecondaryCta href="#masalah">Lihat cara kerjanya</SecondaryCta>
          </div>
          <p className="mt-4 text-[0.8rem] font-medium text-muted">
            Gratis untuk 3 mitra. Tanpa kartu kredit — memang belum ada yang ditagih.
          </p>
        </motion.div>

        <motion.div
          style={reduced ? undefined : { y }}
          className="mt-20 [perspective:1400px] sm:mt-28"
        >
          <motion.div
            style={reduced ? undefined : { rotateX, scale }}
            className="mx-auto grid max-w-4xl grid-cols-1 gap-4 [transform-style:preserve-3d] sm:grid-cols-2 sm:gap-5"
          >
            <ScreenTransaksi />
            <div className="sm:mt-10">
              <ScreenKepemilikan />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { opacity: cueOpacity }}
        className="pointer-events-none mt-14 flex justify-center"
      >
        <span className="text-[0.72rem] font-semibold tracking-[0.14em] text-muted uppercase">
          Gulir
        </span>
      </motion.div>
    </section>
  )
}
