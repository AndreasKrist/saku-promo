import { Reveal } from '@/components/reveal'

const faqs = [
  [
    'Kalau salah mencatat, apakah bisa diperbaiki?',
    'Bisa. Transaksi dibatalkan, lalu SAKU membuat catatan pembalik pada tanggal yang sama. Catatan awal tetap terlihat, sehingga riwayatnya tidak hilang diam-diam.',
  ],
  [
    'Apakah setiap mitra perlu membuat akun?',
    'Iya, supaya setiap orang memiliki akses dan riwayat aktivitas sendiri. Undangannya cukup dikirim lewat tautan atau kode gabung.',
  ],
  [
    'Bisa dipakai untuk lebih dari satu usaha?',
    'Untuk paket gratis, satu pemilik dapat mengelola satu usaha dengan maksimal tiga mitra dan 100 transaksi per bulan. Kapasitas lebih besar akan tersedia di paket Pro.',
  ],
  [
    'Apakah datanya aman?',
    'Akses data dibatasi untuk setiap usaha, dan catatan keuangan tidak bisa diubah atau dihapus diam-diam. SAKU belum memiliki sertifikasi keamanan khusus dan bukan produk bank. Kami menjelaskannya apa adanya.',
  ],
  [
    'Apakah laporan bisa dikirim ke akuntan?',
    'Bisa. Laba rugi, arus kas, dan posisi modal mitra dapat diekspor sebagai PDF langsung dari halaman laporan.',
  ],
  [
    'Apakah harus memasang aplikasi?',
    'Tidak perlu. SAKU dapat dibuka melalui browser di HP atau komputer. Saat ini belum ada aplikasi di Play Store maupun App Store.',
  ],
]

export function Faq() {
  return (
    <section id="tanya" className="section-pad border-t border-line bg-surface/45">
      <div className="rail grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-brand">Yang sering ditanyakan</p>
          <h2 className="headline mt-5">Masih ada yang ingin ditanyakan?</h2>
          <p className="mt-6 max-w-md text-[0.88rem] leading-relaxed text-muted">
            Kalau jawabannya belum ada di sini, kirim email ke{' '}
            <a
              href="mailto:halo@saku-umkm.site"
              className="font-semibold text-brand-dark underline decoration-brand/35 underline-offset-4"
            >
              halo@saku-umkm.site
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map(([question, answer], index) => (
              <details key={question} className="faq-item group py-1">
                <summary className="flex list-none items-start justify-between gap-6 py-5 text-[1rem] font-bold tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
                  <span className="flex gap-3">
                    <span className="tnum mt-0.5 text-[0.66rem] font-bold text-brand">
                      0{index + 1}
                    </span>
                    {question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-xl font-light text-brand transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pr-8 pb-6 pl-8 text-[0.86rem] leading-relaxed text-muted">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
