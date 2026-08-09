'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'motion/react'
import { beatRamp } from '@/lib/beats'

/** One beat of the pinned narrative. Fades in and out on scroll progress. */
function Beat({
  progress,
  index,
  count,
  reduced,
  children,
}: {
  progress: MotionValue<number>
  index: number
  count: number
  reduced: boolean
  children: React.ReactNode
}) {
  const ramp = beatRamp(index, count, 34)
  const opacity = useTransform(progress, ramp.input, ramp.opacity)
  const y = useTransform(progress, ramp.input, ramp.y)

  if (reduced) {
    return <div className="mb-20 last:mb-0">{children}</div>
  }

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full">{children}</div>
    </motion.div>
  )
}

function Chat() {
  return (
    <div className="card mx-auto max-w-md p-4">
      <div className="mb-3 text-[0.68rem] font-bold tracking-[0.06em] text-muted uppercase">
        Grup WhatsApp · Warung Kopi Sudut
      </div>
      <div className="grid gap-2.5">
        <p className="max-w-[85%] rounded-[var(--radius-md)] rounded-tl-sm bg-canvas px-3.5 py-2.5 text-[0.85rem] leading-snug">
          Aku talangin dulu ya, supplier minta cash 2,4jt
        </p>
        <p className="ml-auto max-w-[85%] rounded-[var(--radius-md)] rounded-tr-sm bg-brand-soft px-3.5 py-2.5 text-[0.85rem] leading-snug text-brand-dark">
          Oke, nanti dicatat
        </p>
        <p className="max-w-[62%] rounded-[var(--radius-md)] rounded-tl-sm bg-canvas px-3.5 py-2.5 text-[0.85rem]">
          <span className="text-muted">📎 foto nota.jpg</span>
        </p>
      </div>
    </div>
  )
}

function Sheet() {
  const rows = [
    ['12 Jul', 'Biji kopi', '2.400.000', 'Budi?'],
    ['14 Jul', 'Gas + galon', '380.000', 'kas'],
    ['18 Jul', 'Servis mesin', '1.150.000', '?'],
  ]
  return (
    <div className="card mx-auto max-w-lg overflow-hidden">
      <div className="border-b border-line px-4 py-2.5 text-[0.68rem] font-bold tracking-[0.06em] text-muted uppercase">
        pembukuan-warung-FIX-revisi3.xlsx
      </div>
      <table className="w-full text-left text-[0.78rem]">
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-line last:border-0">
              <td className="px-4 py-2.5 text-muted">{r[0]}</td>
              <td className="px-2 py-2.5 font-medium">{r[1]}</td>
              <td className="tnum px-2 py-2.5 text-right font-semibold">{r[2]}</td>
              <td className="px-4 py-2.5 text-right font-bold text-negative">{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Answer() {
  return (
    <div className="card mx-auto max-w-lg p-5">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <span className="text-[0.72rem] font-bold tracking-[0.06em] text-muted uppercase">
          Di SAKU
        </span>
        <span className="tnum text-[0.72rem] font-semibold text-muted">12 Juli</span>
      </div>
      <p className="text-[0.95rem] leading-relaxed">
        Beban <strong>Rp 2.400.000</strong>, dibayar dari{' '}
        <strong className="text-brand-dark">uang pribadi Budi</strong>.
      </p>
      <div className="mt-4 grid gap-2.5 border-t border-line pt-4">
        {[
          ['Modal Budi', '+ Rp 2.400.000'],
          ['Porsi Budi', '43,8% → 46,2%'],
          ['Terlihat oleh', 'Budi, Sari, Dimas'],
        ].map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-3">
            <span className="text-[0.8rem] font-medium text-muted">{k}</span>
            <span className="tnum text-[0.85rem] font-bold text-brand-dark">{v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const beats = [
  {
    kicker: 'Sabtu sore',
    line: 'Budi bayar supplier Rp 2.400.000 pakai uang pribadinya.',
    visual: <Chat />,
  },
  {
    kicker: 'Tiga minggu kemudian',
    line: 'Itu tadi utang usaha ke Budi, atau tambahan modal?',
    visual: <Sheet />,
  },
  {
    kicker: 'Jawabannya tidak perlu diingat',
    line: 'Sumber uangnya ikut tercatat, jadi kepemilikan terhitung sendiri.',
    visual: <Answer />,
  },
]

export function Problem() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion() ?? false
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const content = beats.map((b, i) => (
    <Beat
      key={i}
      progress={scrollYProgress}
      index={i}
      count={beats.length}
      reduced={reduced}
    >
      <div className="rail">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-brand">{b.kicker}</p>
          <p className="headline mt-4">{b.line}</p>
        </div>
        <div className="mt-10">{b.visual}</div>
      </div>
    </Beat>
  ))

  if (reduced) {
    return (
      <section id="masalah" className="py-24">
        {content}
      </section>
    )
  }

  return (
    <section id="masalah" ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="relative h-[80svh] w-full">{content}</div>
      </div>
    </section>
  )
}
