'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ScreenLaporan } from '@/components/screens'

const reports = [
  ['Laba rugi', 'Pendapatan dikurangi beban, per periode.'],
  ['Arus kas', 'Uang yang benar-benar masuk dan keluar.'],
  ['Modal mitra', 'Posisi modal setiap mitra dari waktu ke waktu.'],
]

export function Reports() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [48, -48])

  return (
    <section id="laporan" ref={ref} className="py-28">
      <div className="rail grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow text-brand">Laporan</p>
          <h2 className="headline mt-4">
            Yang Anda tunjukkan ke akuntan, bank, atau mitra baru.
          </h2>
          <dl className="mt-10 grid gap-6">
            {reports.map(([name, desc]) => (
              <div key={name} className="border-l-2 border-brand pl-4">
                <dt className="text-[1rem] font-bold tracking-[-0.02em]">{name}</dt>
                <dd className="mt-1 text-[0.9rem] leading-relaxed text-muted">{desc}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-[0.88rem] leading-relaxed text-muted">
            Ketiganya bisa diekspor sebagai PDF, langsung dari layar laporan.
          </p>
        </div>

        <motion.div style={reduced ? undefined : { y }} className="mx-auto w-full max-w-md">
          <ScreenLaporan />
        </motion.div>
      </div>
    </section>
  )
}
