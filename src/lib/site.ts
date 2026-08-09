export const site = {
  name: 'SAKU',
  domain: 'saku-umkm.site',
  tagline: 'Sistem Akuntansi & Kepemilikan Usaha',
  appUrl: 'https://app.saku-umkm.site',
  description:
    'Catat uang masuk-keluar, modal setiap orang, dan bagian untung tiap mitra. Semua melihat angka yang sama tanpa perlu mencari di chat lama.',
} as const

/** Whole rupiah, dot-separated — same presentation as the app. */
export function rupiah(value: number): string {
  return `Rp ${value.toLocaleString('id-ID')}`
}
