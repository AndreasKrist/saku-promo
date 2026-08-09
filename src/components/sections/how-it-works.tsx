'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'motion/react'
import {
  ScreenTransaksi,
  ScreenModal,
  ScreenKepemilikan,
  ScreenLogAktivitas,
} from '@/components/screens'
import { beatRamp } from '@/lib/beats'

const steps = [
  {
    title: 'Catat transaksi',
    body: 'Pemasukan atau pengeluaran, secepat menulis di buku.',
    screen: <ScreenTransaksi />,
  },
  {
    title: 'Pilih siapa yang bayar',
    body: 'Kas usaha, atau uang pribadi salah satu mitra. Satu ketukan.',
    screen: <ScreenModal />,
  },
  {
    title: 'Porsi kepemilikan terhitung sendiri',
    body: 'Bayar pakai uang sendiri otomatis jadi tambahan modal — bukan jasa yang harus diingat.',
    screen: <ScreenKepemilikan />,
  },
  {
    title: 'Semua mitra lihat angka yang sama',
    body: 'Satu catatan bersama, lengkap dengan siapa melakukan apa.',
    screen: <ScreenLogAktivitas />,
  },
]

function StepItem({
  progress,
  index,
  step,
}: {
  progress: MotionValue<number>
  index: number
  step: (typeof steps)[number]
}) {
  // Inactive steps dim rather than disappear — the list stays readable as a
  // whole, so the reader can see where they are in the sequence.
  const ramp = beatRamp(index, steps.length)
  const opacity = useTransform(progress, ramp.input, ramp.dim)

  return (
    <motion.li style={{ opacity }} className="flex gap-4">
      <span className="tnum mt-0.5 w-6 shrink-0 text-[0.8rem] font-extrabold text-brand">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div>
        <h3 className="text-[1.15rem] font-bold tracking-[-0.022em]">{step.title}</h3>
        <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">{step.body}</p>
      </div>
    </motion.li>
  )
}

function StepScreen({
  progress,
  index,
  children,
}: {
  progress: MotionValue<number>
  index: number
  children: React.ReactNode
}) {
  const ramp = beatRamp(index, steps.length, 26)
  const opacity = useTransform(progress, ramp.input, ramp.opacity)
  const y = useTransform(progress, ramp.input, ramp.y)

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-x-0 top-0">
      {children}
    </motion.div>
  )
}

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion() ?? false
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const heading = (
    <div className="max-w-md">
      <p className="eyebrow text-brand">Cara kerjanya</p>
      <h2 className="headline mt-4">Empat langkah, lalu tidak ada lagi yang ditebak.</h2>
    </div>
  )

  // Plain stacked layout: what small viewports and reduced-motion readers get.
  // The pinned version costs frame rate on mid-range phones and buys nothing
  // there, so it simply doesn't run.
  const stacked = (
    <div className="rail py-24">
      {heading}
      <ol className="mt-14 grid gap-14">
        {steps.map((s, i) => (
          <li key={s.title} className="grid gap-6 sm:grid-cols-2 sm:items-center">
            <div>
              <span className="tnum text-[0.8rem] font-extrabold text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-1 text-[1.15rem] font-bold tracking-[-0.022em]">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">
                {s.body}
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm">{s.screen}</div>
          </li>
        ))}
      </ol>
    </div>
  )

  if (reduced) {
    return <section id="cara-kerja">{stacked}</section>
  }

  return (
    <>
      <section id="cara-kerja" className="lg:hidden">
        {stacked}
      </section>
      <section ref={ref} className="relative hidden h-[420vh] lg:block">
        <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
          <div className="rail w-full">
            <div className="grid items-center gap-16 lg:grid-cols-[1fr_22rem]">
              <div>
                {heading}
                <ol className="mt-10 grid gap-7">
                  {steps.map((s, i) => (
                    <StepItem
                      key={s.title}
                      progress={scrollYProgress}
                      index={i}
                      step={s}
                    />
                  ))}
                </ol>
              </div>
              <div className="relative h-[26rem]">
                {steps.map((s, i) => (
                  <StepScreen key={s.title} progress={scrollYProgress} index={i}>
                    {s.screen}
                  </StepScreen>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
