import { PrimaryCta } from '@/components/cta'

const freeIncludes = [
  '3 mitra dalam satu usaha',
  '1 usaha per pemilik',
  '100 transaksi per bulan',
  'Semua laporan, termasuk ekspor PDF',
  'Log aktivitas dan pembatalan transaksi',
]

export function Pricing() {
  return (
    <section id="harga" className="py-28">
      <div className="rail">
        <div className="max-w-2xl">
          <p className="eyebrow text-brand">Biaya</p>
          <h2 className="headline mt-4">Mulai gratis. Belum ada yang ditagih.</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="card p-7 sm:p-9">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[1.35rem] font-extrabold tracking-[-0.03em]">Gratis</h3>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-[0.72rem] font-bold text-brand-dark">
                Tersedia sekarang
              </span>
            </div>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">
              Semua yang dibutuhkan kemitraan kecil untuk mulai mencatat dengan benar.
            </p>
            <ul className="mt-7 grid gap-3">
              {freeIncludes.map((item) => (
                <li key={item} className="flex gap-3 text-[0.92rem]">
                  <span aria-hidden="true" className="font-bold text-brand">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <PrimaryCta className="mt-8 w-full sm:w-auto" />
          </div>

          <div className="card border-dashed p-7 sm:p-9">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[1.35rem] font-extrabold tracking-[-0.03em] text-muted">
                Pro
              </h3>
              <span className="rounded-full border border-line px-3 py-1 text-[0.72rem] font-bold text-muted">
                Segera hadir
              </span>
            </div>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">
              Untuk usaha dengan lebih banyak mitra, lebih dari satu usaha, dan tanpa
              batas transaksi bulanan.
            </p>
            <p className="mt-7 text-[0.88rem] leading-relaxed text-muted">
              Belum ada harga dan belum bisa dibeli — pembayaran memang belum kami
              pasang. Pakai yang gratis dulu; Anda akan diberi tahu di dalam aplikasi
              begitu Pro siap.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
