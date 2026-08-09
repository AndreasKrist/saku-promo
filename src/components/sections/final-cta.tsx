import { PrimaryCta } from '@/components/cta'
import { Reveal, ScrollScale } from '@/components/reveal'

export function FinalCta() {
  return (
    <section className="section-deep deep-wash overflow-hidden py-20 sm:py-28">
      <ScrollScale className="rail relative text-center">
        <Reveal>
          <p className="eyebrow text-brand">Mulai dari transaksi berikutnya</p>
          <h2 className="display mx-auto mt-6 max-w-5xl">
            Satu catatan. Satu angka. Tidak ada “katanya”.
          </h2>
          <p className="subhead mx-auto mt-7 max-w-2xl text-muted">
            Buat profil usaha, undang mitra, lalu catat pemasukan atau pengeluaran
            pertama. Tidak perlu menunggu pembukuan lama selesai dirapikan.
          </p>
          <div className="mt-9 flex justify-center">
            <PrimaryCta />
          </div>
          <p className="mt-4 text-[0.75rem] font-medium text-muted">
            Gratis untuk 3 mitra dan 100 transaksi per bulan.
          </p>
        </Reveal>
      </ScrollScale>
    </section>
  )
}
