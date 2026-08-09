'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
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
  const { scrollY } = useScroll()
  // The bar materialises as content passes under it, rather than sitting
  // there as an opaque strip from the first frame.
  const opacity = useTransform(scrollY, [0, 120], [0, 1])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { opacity }}
        className="chrome absolute inset-0 border-b border-line"
      />
      <div className="rail relative flex h-16 items-center gap-6">
        <Link href="/" aria-label={`${site.name} — beranda`} className="shrink-0">
          <BrandLogo compact priority />
        </Link>

        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[0.86rem] font-semibold text-muted hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        <Link
          href={site.appUrl}
          data-pressable="true"
          className="btn-primary ml-auto shrink-0 rounded-[var(--radius-sm)] px-4 py-2 text-[0.84rem] font-bold md:ml-0"
        >
          Mulai gratis
        </Link>
      </div>
    </header>
  )
}
