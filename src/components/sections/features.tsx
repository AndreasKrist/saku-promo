const features = [
  ['Transaksi', 'Pemasukan dan pengeluaran, dengan sumber uang yang jelas.'],
  ['Penambahan modal', 'Mitra menyetor modal; porsi langsung menyesuaikan.'],
  ['Bagi hasil', 'Laba dibagi menurut porsi kepemilikan, bukan menurut ingatan.'],
  ['Penarikan laba', 'Seorang mitra menarik bagiannya, tercatat rapi.'],
  ['Penarikan bersama', 'Beberapa mitra menarik sekaligus dalam satu catatan.'],
  ['Laporan', 'Laba rugi, arus kas, dan modal mitra — bisa diekspor PDF.'],
  ['Undangan', 'Ajak mitra lewat tautan atau kode gabung.'],
  ['Kelola mitra', 'Atur porsi kepemilikan, termasuk penyesuaian manual.'],
  ['Log aktivitas', 'Siapa melakukan apa, kapan. Terbuka untuk semua mitra.'],
  ['Batalkan transaksi', 'Salah catat diperbaiki dengan catatan baru, bukan dihapus.'],
  ['Grafik', 'Kas dari waktu ke waktu, transaksi harian, komposisi kepemilikan.'],
  ['Pengaturan & arsip', 'Usaha yang sudah punya riwayat diarsipkan, tidak dihapus.'],
]

export function Features() {
  return (
    <section id="fitur" className="py-24">
      <div className="rail">
        <p className="eyebrow text-brand">Yang sudah bisa dipakai</p>
        <h2 className="headline mt-4 max-w-xl">
          Semua yang ada di sini sudah jalan hari ini.
        </h2>
      </div>

      {/* Bleeds to the viewport edge, but the first card still lines up with
          the rail. Inline style because the padding is a max()/calc() pair. */}
      <div
        className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 sm:gap-5"
        style={{ paddingInline: 'max(1.25rem, calc(50vw - 39rem + 1.25rem))' }}
        tabIndex={0}
        aria-label="Daftar fitur, geser ke samping"
      >
        {features.map(([title, body]) => (
          <article
            key={title}
            className="card lift flex w-[16.5rem] shrink-0 snap-start flex-col p-5 sm:w-[18rem]"
          >
            <h3 className="text-[1.02rem] font-bold tracking-[-0.02em]">{title}</h3>
            <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">{body}</p>
          </article>
        ))}
      </div>

      <div className="rail mt-6">
        <p className="text-[0.82rem] font-medium text-muted">
          Belum ada: faktur, stok barang, penggajian, dan sinkronisasi rekening bank.
          Kalau usaha Anda butuh itu sekarang, SAKU belum cukup.
        </p>
      </div>
    </section>
  )
}
