'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Reveal, ScrollParallax } from '@/components/reveal'
import { ScreenLaporan } from '@/components/screens'

const reports = [
  ['Laba rugi', 'Menunjukkan apakah usaha benar-benar untung atau hanya ramai.'],
  ['Arus kas', 'Tahu uang masuk, uang keluar, dan saldo yang masih ada.'],
  ['Modal mitra', 'Lihat posisi modal tiap orang dari waktu ke waktu.'],
]

export function Reports() {
  const reduced = useReducedMotion()

  return (
    <section
      id="laporan"
      className="section-pad overflow-hidden border-y border-line bg-surface/55"
    >
      <div className="rail grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-brand">Laporan yang bisa dibawa</p>
          <h2 className="headline mt-5">
            Saat ditanya “uangnya ke mana?”, jawab pakai angka.
          </h2>
          <p className="subhead mt-6 max-w-xl text-muted">
            Buka laporan langsung di HP, atau ekspor PDF untuk dibahas bersama akuntan,
            calon mitra, dan pihak lain yang perlu melihatnya.
          </p>

          <dl className="mt-9 grid gap-3">
            {reports.map(([name, description], index) => (
              <div
                key={name}
                className="grid grid-cols-[2rem_1fr] gap-3 border-t border-line py-4 first:border-t-0"
              >
                <span className="tnum text-[0.7rem] font-bold text-brand">
                  0{index + 1}
                </span>
                <div>
                  <dt className="text-[0.95rem] font-bold tracking-[-0.02em]">{name}</dt>
                  <dd className="mt-1 text-[0.82rem] leading-relaxed text-muted">
                    {description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <ScrollParallax amount={38} rotate={0.6}>
          <motion.div
            initial={
              reduced ? false : { opacity: 0, transform: 'translateY(24px) rotate(1deg)' }
            }
            whileInView={{ opacity: 1, transform: 'translateY(0) rotate(1deg)' }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-6 -z-10 rotate-[-3deg] rounded-[2rem] border border-brand/30 bg-brand-soft/60" />
            <div className="screen-hover">
              <ScreenLaporan />
            </div>
            <div className="paper-card absolute -right-3 -bottom-8 hidden w-48 rotate-[-3deg] rounded-[0.35rem] px-4 py-3 text-[0.68rem] font-bold text-brand-dark shadow-lg sm:block">
              PDF siap dikirim tanpa perlu merapikan spreadsheet lagi.
            </div>
          </motion.div>
        </ScrollParallax>
      </div>
    </section>
  )
}
