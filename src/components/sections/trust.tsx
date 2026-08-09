import { Reveal, ScrollScale } from '@/components/reveal'

const claims = [
  {
    title: 'Catatan lama tidak bisa diubah diam-diam',
    body: 'Kalau ada kesalahan, SAKU membuat catatan pembatalan baru. Catatan awal tetap tersimpan dan bisa dilihat.',
  },
  {
    title: 'Tidak ada transaksi yang tersimpan setengah',
    body: 'Saldo, modal, porsi, dan riwayat disimpan dalam satu proses. Semuanya berhasil atau semuanya dibatalkan.',
  },
  {
    title: 'Pembagian tepat sampai rupiah terakhir',
    body: 'Kalau Rp 100.000 dibagi untuk tiga orang, total hasilnya tetap Rp 100.000. Tidak ada rupiah yang hilang karena pembulatan.',
  },
  {
    title: 'Data setiap usaha tetap terpisah',
    body: 'Setiap pembacaan dan perubahan dibatasi ke usaha yang sedang dibuka, sehingga tidak tercampur dengan usaha lain.',
  },
]

export function Trust() {
  return (
    <section id="kepercayaan" className="section-deep deep-wash section-pad">
      <div className="rail">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow text-brand">Kenapa angkanya bisa dipercaya</p>
            <h2 className="headline mt-5">
              Saling percaya itu penting. Catatan yang rapi membuatnya lebih mudah.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="subhead max-w-2xl text-muted lg:pb-1">
              Kami tidak hanya mengatakan bahwa datanya aman. Sistemnya memang dirancang
              agar catatan bersama sulit dimanipulasi dan mudah diperiksa.
            </p>
          </Reveal>
        </div>

        <ScrollScale className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-line bg-line md:grid-cols-2">
          {claims.map((claim, index) => (
            <Reveal key={claim.title} delay={(index % 2) * 0.07} className="bg-surface">
              <article className="h-full p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="tnum text-[0.68rem] font-bold text-brand">
                    0{index + 1}
                  </span>
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
                </div>
                <h3 className="mt-8 max-w-md text-[1.08rem] leading-snug font-bold tracking-[-0.025em] text-brand-dark">
                  {claim.title}
                </h3>
                <p className="mt-3 max-w-lg text-[0.86rem] leading-relaxed text-muted">
                  {claim.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ScrollScale>

        <Reveal>
          <p className="mt-7 max-w-3xl text-[0.76rem] leading-relaxed text-muted">
            Perlu diketahui: SAKU bukan bank dan belum memiliki sertifikasi keamanan
            khusus. Penjelasan di atas adalah perlindungan yang sudah bekerja di dalam
            produk saat ini.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
