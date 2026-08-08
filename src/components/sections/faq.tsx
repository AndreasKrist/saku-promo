const faqs = [
  [
    'Apakah data saya aman?',
    'Setiap pembacaan dan penulisan dibatasi pada usaha Anda sendiri, dan catatan keuangan tidak bisa diedit atau dihapus diam-diam — koreksi selalu jadi catatan baru. Kami tidak memegang sertifikasi keamanan apa pun dan tidak berafiliasi dengan bank; yang bisa kami tunjukkan adalah cara sistemnya bekerja.',
  ],
  [
    'Bisa kelola lebih dari satu bisnis?',
    'Di paket gratis, satu pemilik mengelola satu usaha dengan maksimal tiga mitra dan 100 transaksi per bulan. Batas yang lebih besar rencananya masuk paket Pro, yang belum tersedia.',
  ],
  [
    'Bagaimana kalau saya salah catat transaksi?',
    'Batalkan transaksinya. SAKU menambahkan catatan pembalik pada tanggal aslinya, sehingga laporan bulan itu ikut benar. Catatan yang salah tetap terlihat — jadi tidak ada mitra yang merasa ada yang dihapus.',
  ],
  [
    'Bisa ekspor laporan untuk akuntan?',
    'Bisa. Laba rugi, arus kas, dan modal mitra bisa diekspor sebagai PDF langsung dari layar laporan.',
  ],
  [
    'Berapa biayanya?',
    'Saat ini gratis, dan tidak ada cara untuk membayar sekalipun Anda mau — sistem pembayaran belum kami pasang. Paket Pro akan diumumkan kalau sudah siap.',
  ],
  [
    'Perlu unduh aplikasi?',
    'Tidak. SAKU dibuka lewat browser di HP maupun komputer. Belum ada aplikasi di Play Store atau App Store.',
  ],
]

export function Faq() {
  return (
    <section id="tanya" className="py-28">
      <div className="rail">
        <div className="max-w-2xl">
          <p className="eyebrow text-brand">Pertanyaan</p>
          <h2 className="headline mt-4">Yang biasanya ditanyakan lebih dulu.</h2>
        </div>

        <div className="mt-12 max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.02rem] font-bold tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
                {q}
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-brand transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-prose text-[0.92rem] leading-relaxed text-muted">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
