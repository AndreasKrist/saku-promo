'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { PrimaryCta, SecondaryCta } from '@/components/cta'
import { ScreenRingkasan } from '@/components/screens'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const copyScrollTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ['translateY(0)', 'translateY(88px)'],
  )
  const copyScrollOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.12])
  const stageScrollTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [
      'translateY(0) scale(1) rotate(0deg)',
      'translateY(-72px) scale(0.96) rotate(-1deg)',
    ],
  )
  const copyItem = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, transform: 'translateY(16px)' },
        visible: { opacity: 1, transform: 'translateY(0)' },
      }

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="rail grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          style={
            reduced
              ? undefined
              : { transform: copyScrollTransform, opacity: copyScrollOpacity }
          }
          className="relative z-10 max-w-2xl"
        >
          <motion.p variants={copyItem} className="eyebrow text-brand-dark">
            Pembukuan untuk usaha bersama
          </motion.p>
          <motion.h1 variants={copyItem} className="display mt-6">
            Biar urusan uang tidak jadi masalah{' '}
            <em className="font-normal text-brand-dark">pribadi.</em>
          </motion.h1>
          <motion.p variants={copyItem} className="subhead mt-7 max-w-xl text-muted">
            SAKU mencatat uang masuk-keluar, modal setiap orang, dan bagian untung tiap
            mitra. Semua melihat angka yang sama, tanpa perlu mencari di chat lama.
          </motion.p>

          <motion.div
            variants={copyItem}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <PrimaryCta className="w-full sm:w-auto" />
            <SecondaryCta href="#masalah" className="w-full sm:w-auto">
              Kenapa pakai SAKU?
            </SecondaryCta>
          </motion.div>

          <motion.ul
            variants={copyItem}
            className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[0.78rem] font-semibold text-muted"
          >
            {['Gratis untuk 3 mitra', 'Tanpa kartu kredit', 'Bisa dibuka di HP'].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-brand"
                  />
                  {item}
                </li>
              ),
            )}
          </motion.ul>
        </motion.div>

        <motion.div
          style={reduced ? undefined : { transform: stageScrollTransform }}
          className="relative mx-auto w-full max-w-[39rem] lg:mx-0"
        >
          <div className="deep-wash relative overflow-hidden rounded-[2rem] border border-deep-line px-4 pt-10 pb-5 shadow-[0_34px_100px_oklch(0.16_0.04_42/28%)] sm:px-8 sm:pt-14 sm:pb-8">
            <div className="absolute top-4 left-5 flex items-center gap-2 text-[0.64rem] font-bold tracking-[0.1em] text-white/42 uppercase sm:left-8">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Posisi usaha hari ini
            </div>
            <motion.div
              initial={reduced ? false : { opacity: 0, transform: 'translateY(18px)' }}
              animate={{ opacity: 1, transform: 'translateY(0) rotate(0deg)' }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
              className="mx-auto w-full max-w-[28rem]"
            >
              <div className="screen-hover">
                <ScreenRingkasan />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={
              reduced
                ? false
                : { opacity: 0, transform: 'translateY(12px) rotate(-2deg)' }
            }
            animate={{ opacity: 1, transform: 'translateY(0) rotate(-2deg)' }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.23, 1, 0.32, 1] }}
            className="paper-card absolute -bottom-8 -left-2 hidden w-60 rounded-[0.35rem] px-4 py-4 text-ink sm:block lg:-left-8"
          >
            <div className="flex items-center justify-between text-[0.61rem] font-bold tracking-[0.08em] text-muted uppercase">
              <span>Catatan baru</span>
              <span>12 Jul</span>
            </div>
            <p className="mt-4 text-[0.76rem] font-semibold">Supplier biji kopi</p>
            <p className="tnum mt-1 text-lg font-extrabold tracking-[-0.04em]">
              Rp 2.400.000
            </p>
            <div className="mt-4 border-t border-dashed border-line pt-3 text-[0.68rem] leading-relaxed text-muted">
              Dibayar Budi → otomatis masuk sebagai modal Budi
            </div>
          </motion.div>

          <div className="hero-status absolute -right-2 -bottom-3 rounded-full border border-brand/40 bg-brand-soft px-3 py-2 text-[0.67rem] font-bold text-brand-dark shadow-lg sm:right-2 sm:bottom-5">
            Porsi mitra ikut diperbarui ✓
          </div>
        </motion.div>
      </div>
    </section>
  )
}
