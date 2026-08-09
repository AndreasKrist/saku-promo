'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Reveal, RevealFromSide } from '@/components/reveal'

const moments = [
  {
    label: 'Di grup chat, Sabtu sore',
    quote: '“Aku bayar supplier dulu, ya. Dua juta empat ratus.”',
    note: 'Semua bilang oke. Belum ada yang mencatat uang itu sebenarnya apa.',
  },
  {
    label: 'Tiga minggu kemudian',
    quote: '“Yang kemarin itu utang usaha ke Budi atau tambahan modal?”',
    note: 'Chat sudah tenggelam. Spreadsheet hanya menulis “supplier”. Ingatan mulai berbeda.',
  },
]

export function Problem() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })
  const progressTransform = useTransform(
    scrollYProgress,
    (progress) => `scaleY(${progress})`,
  )

  return (
    <section
      ref={ref}
      id="masalah"
      className="section-pad border-y border-line bg-surface/45"
    >
      <div className="rail">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal className="max-w-xl">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow text-brand">Masalah yang sering kejadian</p>
              <h2 className="headline mt-5">
                Bukan uang yang sering memicu masalah. Biasanya,{' '}
                <em className="font-normal text-brand-dark">catatannya.</em>
              </h2>
              <p className="subhead mt-6 text-muted">
                Usaha bersama biasanya dimulai dari saling percaya. Namun, semakin banyak
                transaksinya, semakin sulit kalau semuanya hanya mengandalkan ingatan.
              </p>
            </div>
          </Reveal>

          <div className="relative grid gap-5 pl-5 sm:pl-8">
            <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-line" />
            <motion.div
              aria-hidden="true"
              style={{
                transform: reduceMotion ? 'scaleY(1)' : progressTransform,
                transformOrigin: 'top',
              }}
              className="absolute inset-y-0 left-0 w-[2px] bg-brand"
            />
            {moments.map((moment, index) => (
              <RevealFromSide key={moment.label} side="right" delay={index * 0.08}>
                <article
                  className="paper-card lift rounded-[0.45rem] px-5 py-6 sm:px-7 sm:py-7"
                  style={{
                    transform: index === 0 ? 'rotate(-0.6deg)' : 'rotate(0.5deg)',
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[0.66rem] font-extrabold tracking-[0.09em] text-brand-dark uppercase">
                      {moment.label}
                    </p>
                    <span className="tnum text-[0.64rem] font-semibold text-muted">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-7 font-[family-name:var(--font-display)] text-[clamp(1.45rem,3vw,2rem)] leading-tight tracking-[-0.03em]">
                    {moment.quote}
                  </p>
                  <p className="mt-5 max-w-xl text-[0.82rem] leading-relaxed text-muted">
                    {moment.note}
                  </p>
                </article>
              </RevealFromSide>
            ))}

            <RevealFromSide side="right" delay={0.16}>
              <article className="deep-wash overflow-hidden rounded-[var(--radius-xl)] border border-deep-line p-6 text-white shadow-[0_24px_70px_oklch(0.16_0.04_42/22%)] sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.66rem] font-bold tracking-[0.1em] text-white/48 uppercase">
                      Kalau dicatat di SAKU
                    </p>
                    <p className="mt-3 text-xl font-bold tracking-[-0.03em]">
                      Pengeluaran Rp 2.400.000
                    </p>
                    <p className="mt-1 text-sm text-white/62">
                      Dibayar dari uang pribadi Budi
                    </p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-[0.68rem] font-bold text-white/76">
                    12 Juli 2026
                  </span>
                </div>
                <div className="mt-7 grid gap-px overflow-hidden rounded-[var(--radius-md)] bg-white/10 sm:grid-cols-3">
                  {[
                    ['Modal Budi', '+ Rp 2.400.000'],
                    ['Porsi Budi', '43,8% → 46,2%'],
                    ['Bisa dilihat', 'Semua mitra'],
                  ].map(([label, value]) => (
                    <div key={label} className="bg-deep-soft px-4 py-4">
                      <p className="text-[0.64rem] font-semibold text-white/46">
                        {label}
                      </p>
                      <p className="tnum mt-2 text-[0.82rem] font-bold text-brand-dark">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </RevealFromSide>
          </div>
        </div>
      </div>
    </section>
  )
}
