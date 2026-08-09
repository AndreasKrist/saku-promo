import type { Metadata, Viewport } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/sections/footer'
import { site } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  icons: { icon: '/saku-logo.webp', apple: '/saku-logo.webp' },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: `https://${site.domain}`,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: '/saku-logo.webp', width: 512, height: 512 }],
  },
  twitter: {
    card: 'summary',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf4ea' },
    { media: '(prefers-color-scheme: dark)', color: '#2a221c' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-[var(--radius-sm)] focus:bg-surface focus:px-4 focus:py-2 focus:font-semibold"
        >
          Lompat ke konten
        </a>
        <SiteHeader />
        <main id="konten">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
