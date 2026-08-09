'use client'

import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { BrandLogo } from '@/components/brand-logo'
import { site } from '@/lib/site'

const nav = [
  ['Cara kerja', '#cara-kerja'],
  ['Fitur', '#fitur'],
  ['Laporan', '#laporan'],
  ['Harga', '#harga'],
]

export function SiteHeader() {
  const reduced = useReducedMotion()
  const { scrollY, scrollYProgress } = useScroll()
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const progressTransform = useTransform(
    scrollYProgress,
    (progress) => `scaleX(${progress})`,
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        aria-hidden="true"
        style={reduced ? { opacity: 1 } : { opacity: shadowOpacity }}
        className="chrome absolute inset-0"
      />
      <div className="rail relative flex h-[4.5rem] items-center gap-5">
        <Link href="/" aria-label={`${site.name} — beranda`} className="shrink-0">
          <BrandLogo compact priority />
        </Link>

        <nav
          className="ml-auto hidden items-center gap-1 lg:flex"
          aria-label="Menu utama"
        >
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3.5 py-2 text-[0.84rem] font-semibold text-muted hover:bg-surface hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        <Link
          href={site.appUrl}
          data-pressable="true"
          className="btn-primary ml-auto hidden min-h-10 shrink-0 items-center rounded-[var(--radius-sm)] px-4 text-[0.82rem] font-bold sm:inline-flex lg:ml-2"
        >
          Coba gratis
          <span aria-hidden="true">↗</span>
        </Link>

        <details className="mobile-menu relative ml-auto lg:hidden">
          <summary
            className="flex h-10 w-10 list-none items-center justify-center rounded-full border border-line bg-surface text-xl font-light text-ink [&::-webkit-details-marker]:hidden"
            aria-label="Buka menu"
          >
            <span className="mobile-menu-icon transition-transform duration-200">+</span>
          </summary>
          <div className="mobile-menu-panel card absolute top-12 right-0 w-[min(18rem,calc(100vw-2.3rem))] p-2">
            <nav className="grid" aria-label="Menu seluler">
              {nav.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-[var(--radius-sm)] px-4 py-3 text-sm font-semibold text-muted hover:bg-brand-soft hover:text-brand-dark"
                >
                  {label}
                </a>
              ))}
            </nav>
            <Link
              href={site.appUrl}
              data-pressable="true"
              className="btn-primary mt-2 flex min-h-11 items-center justify-center rounded-[var(--radius-sm)] px-4 text-sm font-bold sm:hidden"
            >
              Buka SAKU — gratis
            </Link>
          </div>
        </details>
      </div>
      <motion.div
        aria-hidden="true"
        style={{ transform: progressTransform, transformOrigin: 'left' }}
        className="absolute inset-x-0 bottom-0 h-[2px] bg-brand"
      />
    </header>
  )
}
