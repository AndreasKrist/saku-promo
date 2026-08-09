import { ScreenUndangan, ScreenBatalkan } from '@/components/screens'

export function Partners() {
  return (
    <section id="mitra" className="section-deep py-28">
      <div className="rail">
        <div className="max-w-2xl">
          <p className="eyebrow text-brand">Untuk dipakai bersama</p>
          <h2 className="headline mt-4">
            Catatan bersama yang jujur, bukan spreadsheet milik satu orang.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="grid gap-6">
            {[
              [
                'Undang lewat tautan atau kode',
                'Mitra masuk sendiri, tanpa perlu Anda kirim ulang file setiap bulan.',
              ],
              [
                'Porsi kepemilikan bisa disesuaikan manual',
                'Kalau ada mitra yang menyumbang tenaga, bukan uang, porsinya bisa diatur — dan perubahannya tercatat.',
              ],
              [
                'Riwayat terbuka untuk semua',
                'Setiap tindakan punya nama dan waktu. Tidak ada yang bisa diam-diam.',
              ],
            ].map(([title, body]) => (
              <div key={title} className="card p-6">
                <h3 className="text-[1.05rem] font-bold tracking-[-0.022em]">{title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-8">
            <ScreenUndangan />
            <ScreenBatalkan />
          </div>
        </div>
      </div>
    </section>
  )
}
