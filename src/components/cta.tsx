import Link from 'next/link'
import { site } from '@/lib/site'

const base =
  'inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-6 py-3.5 text-[0.98rem] font-semibold tracking-[-0.012em] whitespace-nowrap'

/**
 * Every CTA on this site leads to the app and leads with "gratis" — there is
 * no payment gateway yet, so nothing here may say "beli" or carry a price.
 */
export function PrimaryCta({
  children = 'Mulai gratis',
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
      <span aria-hidden="true">→</span>
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
      className={`${base} border border-line bg-surface text-ink hover:border-brand ${className}`}
    >
      {children}
    </Link>
  )
}
