import { Reveal, ScrollScale } from '@/components/reveal'

const groups = [
  {
    number: '01',
    title: 'Transaksi harian tetap mudah dibaca',
    body: 'Catat pemasukan dan pengeluaran, termasuk apakah uangnya berasal dari kas usaha atau uang pribadi mitra.',
    features: ['Transaksi', 'Sumber pembayaran', 'Pembatalan catatan', 'Grafik kas'],
  },
  {
    number: '02',
    title: 'Modal dan pembagian tidak perlu ditebak',
    body: 'Setoran, talangan, porsi kepemilikan, dan hak laba dihitung dari catatan yang benar-benar masuk.',
    features: ['Tambah modal', 'Porsi kepemilikan', 'Bagi hasil', 'Tarik laba'],
  },
  {
    number: '03',
    title: 'Semua mitra melihat data yang sama',
    body: 'Mitra bisa bergabung lewat kode, melihat laporan, dan memeriksa aktivitas tanpa menunggu file terbaru.',
    features: ['Undang mitra', 'Laporan PDF', 'Log aktivitas', 'Arsip usaha'],
  },
]

export function Features() {
  return (
    <section id="fitur" className="section-pad">
      <div className="rail">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow text-brand">Yang bisa dipakai sekarang</p>
            <h2 className="headline mt-5">
              Bukan soal jumlah fitur. Yang penting memang terpakai.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="subhead max-w-2xl text-muted lg:pb-1">
              SAKU berfokus pada hal yang paling sering menghambat usaha bersama:
              transaksi, modal, porsi kepemilikan, dan laporan yang bisa dipercaya.
            </p>
          </Reveal>
        </div>

        <ScrollScale className="mt-14 grid gap-4 lg:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.number} delay={index * 0.07} className="h-full">
              <article
                className={`card lift flex min-h-full flex-col p-6 sm:p-8 ${index === 1 ? 'lg:-translate-y-5' : ''}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="tnum font-[family-name:var(--font-display)] text-3xl text-brand">
                    {group.number}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="mt-8 text-[1.22rem] leading-tight font-bold tracking-[-0.03em]">
                  {group.title}
                </h3>
                <p className="mt-4 text-[0.88rem] leading-relaxed text-muted">
                  {group.body}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
                  {group.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-line bg-canvas px-3 py-1.5 text-[0.7rem] font-bold text-muted"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ScrollScale>

        <Reveal>
          <div className="mt-10 flex flex-col gap-3 rounded-[var(--radius-lg)] border border-dashed border-line px-5 py-4 text-[0.8rem] leading-relaxed text-muted sm:flex-row sm:items-center sm:justify-between">
            <strong className="shrink-0 text-ink">Perlu diketahui:</strong>
            <p className="max-w-4xl">
              SAKU belum memiliki fitur stok barang, faktur, penggajian, atau sinkronisasi
              rekening bank. Kalau itu kebutuhan utama saat ini, SAKU belum cocok.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
