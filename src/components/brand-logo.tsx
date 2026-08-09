import Image from 'next/image'

export function BrandLogo({
  inverse = false,
  compact = false,
  priority = false,
}: {
  inverse?: boolean
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
        <span className={`brand-word ${inverse ? 'text-white' : 'text-brand-dark'}`}>
          SAKU
        </span>
        {!compact && (
          <span className={`brand-name ${inverse ? 'text-white/48' : 'text-muted'}`}>
            Sistem Akuntansi &amp;
            <br />
            Kepemilikan Usaha
          </span>
        )}
      </span>
    </span>
  )
}
