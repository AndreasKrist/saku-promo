'use client'

import { useEffect, useRef } from 'react'

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
  const scrollerRef = useRef<HTMLDivElement>(null)

  // A trackpad sends horizontal deltas natively, so its swipe just works and
  // glides straight to the next snap point. A mouse wheel only sends
  // vertical deltas, in small increments — tracking those 1:1 would need
  // many notches to cross one card. Instead, treat any wheel gesture as a
  // single step: slide exactly one card with a smooth transition, then
  // ignore further wheel input until that slide finishes so one long scroll
  // can't queue up several slides at once.
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    let locked = false

    function slide(direction: 1 | -1) {
      const cards = Array.from(el!.children) as HTMLElement[]
      if (cards.length < 2) return
      const step = cards[1].offsetLeft - cards[0].offsetLeft
      const max = el!.scrollWidth - el!.clientWidth
      const target = Math.min(max, Math.max(0, el!.scrollLeft + direction * step))

      locked = true
      el!.scrollTo({ left: target, behavior: 'smooth' })
      window.setTimeout(() => {
        locked = false
      }, 500)
    }

    function onWheel(e: WheelEvent) {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return

      const max = el!.scrollWidth - el!.clientWidth
      const atStart = el!.scrollLeft <= 0
      const atEnd = el!.scrollLeft >= max - 1
      const scrollingForward = e.deltaY > 0
      if ((scrollingForward && atEnd) || (!scrollingForward && atStart)) return

      e.preventDefault()
      e.stopPropagation()
      if (locked) return
      slide(scrollingForward ? 1 : -1)
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <section id="fitur" className="py-24">
      <div className="rail">
        <p className="eyebrow text-brand">Yang sudah bisa dipakai</p>
        <h2 className="headline mt-4 max-w-xl">
          Semua yang ada di sini sudah jalan hari ini.
        </h2>
      </div>

      {/* Bleeds to the viewport edge, but the first card still lines up with
          the rail — this mirrors .rail's own left edge exactly: half the
          leftover space once it hits its 78rem max-width, plus its
          clamp(1.25rem, 5vw, 3rem) padding. A flat 1.25rem here (instead of
          that same clamp) used to fall out of sync with the rail at most
          mid-range window widths. */}
      <div
        ref={scrollerRef}
        className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-contain pb-4 sm:gap-5"
        style={{
          paddingInline: 'calc(max(0px, (100vw - 78rem) / 2) + clamp(1.25rem, 5vw, 3rem))',
        }}
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
