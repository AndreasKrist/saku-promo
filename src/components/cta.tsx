import Link from 'next/link'
import { site } from '@/lib/site'

const base =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] px-6 py-3 text-[0.94rem] font-bold tracking-[-0.012em] whitespace-nowrap'

export function PrimaryCta({
  children = 'Buka SAKU — gratis',
  className = '',
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={site.appUrl}
      data-pressable="true"
      className={`${base} btn-primary ${className}`}
    >
      {children}
      <span aria-hidden="true" className="text-[1.05em]">
        →
      </span>
    </Link>
  )
}

export function SecondaryCta({
  children,
  href,
  className = '',
}: {
  children: React.ReactNode
  href: string
  className?: string
}) {
  return (
    <Link
      href={href}
      data-pressable="true"
      className={`${base} btn-secondary ${className}`}
    >
      {children}
    </Link>
  )
}
