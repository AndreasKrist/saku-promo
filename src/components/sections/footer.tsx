import Link from 'next/link'
import { BrandLogo } from '@/components/brand-logo'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="rail grid gap-10 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-16">
        <BrandLogo />

        <div className="grid gap-8 sm:grid-cols-2 sm:justify-items-end">
          <nav className="grid gap-2.5 text-[0.88rem]">
            <a href="#cara-kerja" className="text-muted hover:text-ink">
              Cara kerja
            </a>
            <a href="#fitur" className="text-muted hover:text-ink">
              Fitur
            </a>
            <a href="#kepercayaan" className="text-muted hover:text-ink">
              Kepercayaan
            </a>
            <a href="#tanya" className="text-muted hover:text-ink">
              Pertanyaan
            </a>
          </nav>
          <div className="grid gap-2.5 text-[0.88rem]">
            <Link
              href={site.appUrl}
              className="font-semibold text-brand-dark hover:underline"
            >
              Buka aplikasi
            </Link>
            <a href="mailto:halo@saku-umkm.site" className="text-muted hover:text-ink">
              halo@saku-umkm.site
            </a>
          </div>
        </div>
      </div>

      <div className="rail mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[0.78rem] text-muted">
        <p>
          © {new Date().getFullYear()} {site.name} — {site.tagline}
        </p>
        <p>Dibuat untuk UMKM Indonesia.</p>
      </div>
    </footer>
  )
}
