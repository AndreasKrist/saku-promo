export const site = {
  name: 'SAKU',
  domain: 'saku-umkm.site',
  tagline: 'Sistem Akuntansi & Kepemilikan Usaha',
  appUrl: 'https://app.saku-umkm.site',
  description:
    'Catat transaksi, modal, dan bagi hasil tanpa debat soal siapa membayar dan siapa berhak menarik. Untuk usaha kecil Indonesia yang dijalankan beberapa mitra.',
} as const

/** Whole rupiah, dot-separated — same presentation as the app. */
export function rupiah(value: number): string {
  return `Rp ${value.toLocaleString('id-ID')}`
}
