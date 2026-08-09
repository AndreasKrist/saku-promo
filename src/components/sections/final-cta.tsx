import { PrimaryCta } from '@/components/cta'

export function FinalCta() {
  return (
    <section className="section-deep py-32">
      <div className="rail text-center">
        <h2 className="display mx-auto max-w-3xl">
          Uang usaha jelas untuk semua mitra.
        </h2>
        <p className="subhead mx-auto mt-6 max-w-xl text-muted">
          Buka usaha pertama Anda, undang mitra, dan catat transaksi pertama hari ini
          juga.
        </p>
        <div className="mt-9 flex justify-center">
          <PrimaryCta />
        </div>
        <p className="mt-4 text-[0.8rem] font-medium text-muted">
          Gratis untuk 3 mitra dan 100 transaksi per bulan.
        </p>
      </div>
    </section>
  )
}
