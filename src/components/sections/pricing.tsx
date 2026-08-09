import { PrimaryCta } from '@/components/cta'
import { Reveal, ScrollScale } from '@/components/reveal'

const included = [
  '1 usaha dengan maksimal 3 mitra',
  '100 transaksi setiap bulan',
  'Modal, porsi kepemilikan, dan bagi hasil',
  'Laporan lengkap dan ekspor PDF',
  'Riwayat aktivitas dan pembatalan transaksi',
]

export function Pricing() {
  return (
    <section id="harga" className="section-pad">
      <div className="rail">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-brand">Biaya</p>
          <h2 className="headline mt-5">Mulai dengan versi gratis.</h2>
          <p className="subhead mx-auto mt-6 max-w-2xl text-muted">
            Tidak perlu kartu kredit dan tidak ada masa percobaan. Mulai catat usaha, lalu
            lihat apakah SAKU memang membantu kegiatan sehari-hari.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ScrollScale className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-line bg-surface shadow-[var(--shadow-surface)]">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="deep-wash flex flex-col justify-between p-7 text-white sm:p-9">
                <div>
                  <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[0.68rem] font-bold text-white/72">
                    Tersedia sekarang
                  </span>
                  <p className="mt-8 font-[family-name:var(--font-display)] text-5xl tracking-[-0.055em] sm:text-6xl">
                    Gratis
                  </p>
                  <p className="mt-2 text-sm text-white/52">Rp 0 / bulan</p>
                </div>
                <PrimaryCta className="mt-10 w-full" />
              </div>

              <div className="p-7 sm:p-9">
                <p className="text-sm font-bold tracking-[-0.02em]">Sudah termasuk:</p>
                <ul className="mt-6 grid gap-4">
                  {included.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.88rem] leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-[0.65rem] font-black text-brand-dark"
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-line pt-6 text-[0.78rem] leading-relaxed text-muted">
                  <strong className="text-ink">Perlu kapasitas lebih besar?</strong> Paket
                  Pro untuk lebih banyak usaha, mitra, dan transaksi sedang kami siapkan.
                  Harga belum ditentukan dan paketnya belum bisa dibeli.
                </div>
              </div>
            </div>
          </ScrollScale>
        </Reveal>
      </div>
    </section>
  )
}
