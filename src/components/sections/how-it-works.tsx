'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Reveal, ScrollParallax } from '@/components/reveal'
import {
  ScreenKepemilikan,
  ScreenLogAktivitas,
  ScreenTransaksi,
} from '@/components/screens'

const steps = [
  {
    number: '01',
    title: 'Catat transaksinya',
    body: 'Masukkan pemasukan atau pengeluaran. Tidak perlu memahami istilah akuntansi terlebih dahulu.',
  },
  {
    number: '02',
    title: 'Pilih siapa yang membayar',
    body: 'Pilih kas usaha atau uang pribadi mitra. Dari sini SAKU tahu cara mencatatnya.',
  },
  {
    number: '03',
    title: 'Semua langsung diperbarui',
    body: 'Saldo, modal, porsi kepemilikan, laporan, dan riwayat diperbarui secara otomatis.',
  },
]

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })
  const progressTransform = useTransform(
    scrollYProgress,
    (progress) => `scaleX(${progress})`,
  )

  return (
    <section
      ref={ref}
      id="cara-kerja"
      className="section-deep deep-wash section-pad overflow-hidden"
    >
      <div className="rail">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-brand">Cara kerjanya</p>
            <h2 className="headline mt-5">Catat sekali. Sisanya SAKU yang urus.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="subhead max-w-2xl text-muted lg:pb-1">
              Tidak ada pengaturan akun yang rumit. Mulai dari transaksi sehari-hari, lalu
              SAKU memastikan semua perhitungannya tetap benar.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14">
          <motion.div
            aria-hidden="true"
            style={{
              transform: reduceMotion ? 'scaleX(1)' : progressTransform,
              transformOrigin: 'left',
            }}
            className="absolute inset-x-0 top-0 z-10 h-[3px] rounded-full bg-brand"
          />
          <Reveal>
            <ol className="grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-line bg-line lg:grid-cols-3">
              {steps.map((step) => (
                <li key={step.number} className="bg-surface p-6 sm:p-8">
                  <span className="tnum font-[family-name:var(--font-display)] text-4xl text-brand">
                    {step.number}
                  </span>
                  <h3 className="mt-8 text-lg font-bold tracking-[-0.025em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-muted">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-3 md:items-start">
          <Reveal delay={0}>
            <ScrollParallax amount={22} rotate={0.7}>
              <div className="md:translate-y-8 md:-rotate-1">
                <div className="screen-hover">
                  <ScreenTransaksi />
                </div>
              </div>
            </ScrollParallax>
          </Reveal>
          <Reveal delay={0.07}>
            <ScrollParallax amount={34} rotate={0.5}>
              <div className="md:-translate-y-2 md:rotate-1">
                <div className="screen-hover">
                  <ScreenKepemilikan />
                </div>
              </div>
            </ScrollParallax>
          </Reveal>
          <Reveal delay={0.14}>
            <ScrollParallax amount={18} rotate={0.8}>
              <div className="md:translate-y-12 md:-rotate-1">
                <div className="screen-hover">
                  <ScreenLogAktivitas />
                </div>
              </div>
            </ScrollParallax>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
