'use client'

import { motion, useReducedMotion } from 'motion/react'

const claims = [
  [
    'Catatan tidak pernah diam-diam berubah.',
    'Tidak ada yang diedit atau dihapus setelah tersimpan. Koreksi ditulis sebagai catatan baru yang membatalkan yang lama — keduanya tetap terlihat selamanya.',
  ],
  [
    'Setiap transaksi harus seimbang, atau tidak tersimpan sama sekali.',
    'Bukan aturan yang harus diingat aplikasi. Basis datanya sendiri yang menolak catatan yang tidak imbang.',
  ],
  [
    'Semua bagian dari satu aksi tersimpan bersama, atau tidak sama sekali.',
    'Mencatat satu pengeluaran memperbarui buku besar, saldo, porsi mitra, dan riwayat sekaligus. Tidak pernah tersimpan setengah.',
  ],
  [
    'Pembagian hasil selalu kembali ke jumlah semula.',
    'Rp 100.000 dibagi tiga menjadi Rp 33.334 / 33.333 / 33.333. Tidak ada satu rupiah pun yang hilang karena pembulatan.',
  ],
  [
    'Data bisnis Anda hanya milik bisnis Anda.',
    'Setiap pembacaan dan penulisan dibatasi pada satu usaha — tidak ada jalan pintas yang melewatinya.',
  ],
]

export function Trust() {
  const reduced = useReducedMotion() ?? false

  return (
    <section id="kepercayaan" className="section-deep py-28">
      <div className="rail">
        <div className="max-w-2xl">
          <p className="eyebrow text-brand">Kenapa angkanya bisa dipercaya</p>
          <h2 className="headline mt-4">
            Bukan janji. Ini yang memang dilakukan sistemnya.
          </h2>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2">
          {claims.map(([claim, how], i) => (
            <motion.li
              key={claim}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
              className="bg-surface p-6 last:sm:col-span-2 sm:p-8"
            >
              <h3 className="text-[1.08rem] leading-snug font-bold tracking-[-0.022em] text-brand-dark">
                {claim}
              </h3>
              <p className="mt-3 max-w-prose text-[0.9rem] leading-relaxed text-muted">
                {how}
              </p>
            </motion.li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-[0.82rem] leading-relaxed text-muted">
          Kami tidak memegang sertifikasi apa pun dan tidak berafiliasi dengan bank.
          Yang bisa kami tunjukkan adalah cara sistemnya bekerja, di atas ini.
        </p>
      </div>
    </section>
  )
}
