import Image from 'next/image'

/**
 * Same lockup as the app's <BrandLogo>: mark + wordmark at -0.065em / 820,
 * tagline underneath at 0.57rem. Kept pixel-identical on purpose.
 */
export function BrandLogo({
  compact = false,
  priority = false,
}: {
  compact?: boolean
  priority?: boolean
}) {
  return (
    <span className="brand-lockup">
      <Image
        src="/saku-logo.webp"
        alt=""
        aria-hidden="true"
        width={compact ? 36 : 44}
        height={compact ? 36 : 44}
        priority={priority}
        className="brand-mark"
        sizes={compact ? '36px' : '44px'}
      />
      <span className="min-w-0">
        <span className="brand-word text-brand-dark">SAKU</span>
        {!compact && (
          <span className="brand-name text-muted">
            Sistem Akuntansi &amp;
            <br />
            Kepemilikan Usaha
          </span>
        )}
      </span>
    </span>
  )
}
