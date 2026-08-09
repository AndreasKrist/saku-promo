import Link from 'next/link'
import { BrandLogo } from '@/components/brand-logo'
import { site } from '@/lib/site'

const links = [
  ['Cara kerja', '#cara-kerja'],
  ['Fitur', '#fitur'],
  ['Kepercayaan', '#kepercayaan'],
  ['Harga', '#harga'],
  ['Pertanyaan', '#tanya'],
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas py-12 sm:py-16">
      <div className="rail grid gap-10 md:grid-cols-[1fr_auto] md:items-start md:gap-16">
        <div className="max-w-sm">
          <BrandLogo />
          <p className="mt-5 text-[0.82rem] leading-relaxed text-muted">
            Pembukuan untuk usaha yang dijalankan bersama. Transaksi, modal, dan bagian
            untung yang bisa diperiksa semua mitra.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-[auto_auto] sm:gap-16">
          <nav className="grid gap-3 text-[0.82rem]" aria-label="Tautan bawah">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="text-muted hover:text-ink">
                {label}
              </a>
            ))}
          </nav>
          <div className="grid content-start gap-3 text-[0.82rem]">
            <Link
              href={site.appUrl}
              className="font-bold text-brand-dark hover:underline"
            >
              Buka aplikasi ↗
            </Link>
            <a href="mailto:halo@saku-umkm.site" className="text-muted hover:text-ink">
              halo@saku-umkm.site
            </a>
          </div>
        </div>
      </div>

      <div className="rail mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[0.72rem] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} — {site.tagline}
        </p>
        <p>Dibuat untuk usaha kecil Indonesia.</p>
      </div>
    </footer>
  )
}
