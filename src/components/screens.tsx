/**
 * Stylized recreations of real SAKU screens.
 *
 * The app repo has no exported screenshots yet, so these are faithful
 * rebuilds using the exact same tokens, radii and layout language. Every
 * screen here maps to a shipped screen (see the brief, §4) — nothing is
 * invented. Swap them for real captures when they exist.
 */

function Frame({
  title,
  crumb,
  children,
  className = '',
}: {
  title: string
  crumb?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`card overflow-hidden ${className}`}
      role="img"
      aria-label={`Tampilan layar ${title} di aplikasi SAKU`}
    >
      <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
        <span className="h-6 w-6 shrink-0 rounded-[0.45rem] bg-brand-dark" />
        <span className="text-[0.82rem] font-bold tracking-[-0.02em]">{title}</span>
        {crumb && (
          <span className="ml-auto truncate text-[0.68rem] font-semibold text-muted">
            {crumb}
          </span>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 text-[0.66rem] font-semibold tracking-[0.02em] text-muted">
        {label}
      </div>
      {children}
    </div>
  )
}

function Input({ children, mono = false }: { children: React.ReactNode; mono?: boolean }) {
  return (
    <div
      className={`rounded-[var(--radius-sm)] border border-line bg-canvas px-3 py-2.5 text-[0.85rem] font-semibold ${
        mono ? 'tnum' : ''
      }`}
    >
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** Transaksi — the core mechanic: an explicit payment source. */
export function ScreenTransaksi() {
  return (
    <Frame title="Transaksi baru" crumb="Warung Kopi Sudut">
      <div className="grid gap-3">
        <Field label="JUMLAH">
          <Input mono>Rp 2.400.000</Input>
        </Field>
        <Field label="KETERANGAN">
          <Input>Bayar supplier biji kopi</Input>
        </Field>
        <Field label="DIBAYAR DARI">
          <div className="grid gap-2">
            <div className="rounded-[var(--radius-sm)] border border-line bg-canvas px-3 py-2.5 text-[0.82rem] font-medium text-muted">
              Kas usaha
            </div>
            <div className="flex items-center gap-2 rounded-[var(--radius-sm)] border-2 border-brand bg-brand-soft px-3 py-2.5 text-[0.82rem] font-bold text-brand-dark">
              <span
                aria-hidden="true"
                className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand text-[0.6rem] text-white"
              >
                ✓
              </span>
              Uang pribadi Budi
            </div>
          </div>
        </Field>
        <p className="rounded-[var(--radius-sm)] bg-brand-soft/60 px-3 py-2.5 text-[0.74rem] leading-relaxed font-medium text-brand-dark">
          Otomatis tercatat sebagai <strong>penambahan modal Budi</strong> — porsi
          kepemilikan langsung menyesuaikan.
        </p>
      </div>
    </Frame>
  )
}

/** Kelola mitra — ownership in basis points, rendered as percentages. */
export function ScreenKepemilikan() {
  const partners = [
    { name: 'Budi', pct: 46.2, amount: 'Rp 18.480.000' },
    { name: 'Sari', pct: 33.8, amount: 'Rp 13.520.000' },
    { name: 'Dimas', pct: 20.0, amount: 'Rp 8.000.000' },
  ]
  return (
    <Frame title="Kepemilikan mitra" crumb="Total modal Rp 40.000.000">
      <div className="grid gap-3.5">
        {partners.map((p) => (
          <div key={p.name}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <span className="text-[0.84rem] font-bold">{p.name}</span>
              <span className="tnum text-[0.84rem] font-bold text-brand-dark">
                {p.pct.toFixed(1)}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-brand-soft">
              <div
                className="h-full rounded-full bg-brand"
                style={{ width: `${p.pct}%` }}
              />
            </div>
            <div className="tnum mt-1.5 text-[0.7rem] font-medium text-muted">
              {p.amount}
            </div>
          </div>
        ))}
        <p className="border-t border-line pt-3 text-[0.7rem] font-medium text-muted">
          Dihitung dari modal yang benar-benar masuk — bukan angka yang diketik
          manual.
        </p>
      </div>
    </Frame>
  )
}

/** Bagi hasil — largest-remainder split, sums back exactly. */
export function ScreenBagiHasil() {
  const rows = [
    { name: 'Budi', value: '33.334' },
    { name: 'Sari', value: '33.333' },
    { name: 'Dimas', value: '33.333' },
  ]
  return (
    <Frame title="Bagi hasil" crumb="Periode Juli">
      <div className="grid gap-3">
        <div className="rounded-[var(--radius-md)] bg-brand-soft px-3.5 py-3">
          <div className="text-[0.66rem] font-semibold text-brand-dark/70">
            LABA DIBAGIKAN
          </div>
          <div className="tnum text-[1.4rem] font-extrabold tracking-[-0.03em] text-brand-dark">
            Rp 100.000
          </div>
        </div>
        <div className="grid gap-2">
          {rows.map((r) => (
            <div
              key={r.name}
              className="flex items-center justify-between rounded-[var(--radius-sm)] border border-line px-3 py-2.5"
            >
              <span className="text-[0.82rem] font-semibold">{r.name}</span>
              <span className="tnum text-[0.86rem] font-bold">Rp {r.value}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-line pt-3 text-[0.78rem] font-bold">
          <span className="text-muted">Jumlah kembali</span>
          <span className="tnum text-positive">Rp 100.000</span>
        </div>
      </div>
    </Frame>
  )
}

/** Laporan — laba rugi + arus kas, exportable as PDF. */
export function ScreenLaporan() {
  const bars = [38, 52, 44, 61, 55, 72, 66, 84]
  return (
    <Frame title="Laporan" crumb="Laba rugi · Juli 2026">
      <div className="grid gap-3.5">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-[var(--radius-md)] border border-line px-3 py-2.5">
            <div className="text-[0.62rem] font-semibold text-muted">PENDAPATAN</div>
            <div className="tnum text-[0.98rem] font-extrabold text-positive">
              Rp 31.200.000
            </div>
          </div>
          <div className="rounded-[var(--radius-md)] border border-line px-3 py-2.5">
            <div className="text-[0.62rem] font-semibold text-muted">BEBAN</div>
            <div className="tnum text-[0.98rem] font-extrabold text-negative">
              Rp 19.850.000
            </div>
          </div>
        </div>
        <div className="flex h-24 items-end gap-1.5" aria-hidden="true">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[0.3rem] bg-brand"
              style={{ height: `${h}%`, opacity: 0.35 + (i / bars.length) * 0.65 }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-line pt-3">
          <div>
            <div className="text-[0.62rem] font-semibold text-muted">LABA BERSIH</div>
            <div className="tnum text-[1.05rem] font-extrabold tracking-[-0.025em]">
              Rp 11.350.000
            </div>
          </div>
          <span className="rounded-[var(--radius-sm)] border border-line px-3 py-2 text-[0.72rem] font-bold">
            Ekspor PDF
          </span>
        </div>
      </div>
    </Frame>
  )
}

/** Log aktivitas — every action, visible to every partner. */
export function ScreenLogAktivitas() {
  const events = [
    { who: 'Budi', what: 'mencatat beban Rp 2.400.000', when: '2 menit lalu' },
    { who: 'Sari', what: 'menambah modal Rp 5.000.000', when: 'kemarin, 19:04' },
    { who: 'Dimas', what: 'membatalkan transaksi #218', when: '3 hari lalu' },
    { who: 'Sari', what: 'mengubah porsi kepemilikan', when: '5 hari lalu' },
  ]
  return (
    <Frame title="Log aktivitas" crumb="Terlihat oleh semua mitra">
      <ol className="grid gap-0">
        {events.map((e, i) => (
          <li
            key={i}
            className="flex gap-3 border-b border-line py-2.5 last:border-0 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
            />
            <div className="min-w-0">
              <p className="text-[0.79rem] leading-snug">
                <strong className="font-bold">{e.who}</strong>{' '}
                <span className="text-muted">{e.what}</span>
              </p>
              <p className="mt-0.5 text-[0.66rem] font-medium text-muted">{e.when}</p>
            </div>
          </li>
        ))}
      </ol>
    </Frame>
  )
}

/** Undangan — shareable link or a join code. */
export function ScreenUndangan() {
  return (
    <Frame title="Undang mitra" crumb="Warung Kopi Sudut">
      <div className="grid gap-3">
        <Field label="KODE GABUNG">
          <div className="tnum rounded-[var(--radius-sm)] border border-line bg-canvas px-3 py-3 text-center text-[1.35rem] font-extrabold tracking-[0.24em] text-brand-dark">
            7K4M2P
          </div>
        </Field>
        <Field label="ATAU BAGIKAN TAUTAN">
          <div className="truncate rounded-[var(--radius-sm)] border border-line bg-canvas px-3 py-2.5 font-mono text-[0.72rem] text-muted">
            app.saku-umkm.site/gabung/7k4m2p
          </div>
        </Field>
        <p className="text-[0.72rem] leading-relaxed font-medium text-muted">
          Mitra yang bergabung langsung melihat angka yang sama — tidak ada versi
          spreadsheet yang berbeda.
        </p>
      </div>
    </Frame>
  )
}

/** Batalkan transaksi — a reversing entry; the original stays visible. */
export function ScreenBatalkan() {
  return (
    <Frame title="Riwayat transaksi" crumb="#218">
      <div className="grid gap-2">
        <div className="rounded-[var(--radius-sm)] border border-line px-3 py-2.5 opacity-70">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-[0.8rem] font-semibold line-through">
              Beli kompor gas
            </span>
            <span className="tnum text-[0.82rem] font-bold line-through">
              Rp 1.750.000
            </span>
          </div>
          <div className="mt-1 text-[0.66rem] font-medium text-muted">
            12 Juli · dibatalkan, tetap tersimpan
          </div>
        </div>
        <div className="rounded-[var(--radius-sm)] border border-line bg-brand-soft/50 px-3 py-2.5">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-[0.8rem] font-bold text-brand-dark">
              Pembatalan #218
            </span>
            <span className="tnum text-[0.82rem] font-bold text-brand-dark">
              + Rp 1.750.000
            </span>
          </div>
          <div className="mt-1 text-[0.66rem] font-medium text-brand-dark/75">
            Dicatat pada tanggal asli, 12 Juli
          </div>
        </div>
        <p className="pt-1 text-[0.72rem] leading-relaxed font-medium text-muted">
          Koreksi selalu berupa catatan baru. Yang lama tidak pernah hilang.
        </p>
      </div>
    </Frame>
  )
}

/** Penambahan modal. */
export function ScreenModal() {
  return (
    <Frame title="Penambahan modal" crumb="Sari">
      <div className="grid gap-3">
        <Field label="JUMLAH MODAL">
          <Input mono>Rp 5.000.000</Input>
        </Field>
        <div className="grid gap-2 rounded-[var(--radius-md)] border border-line px-3.5 py-3">
          <div className="flex items-baseline justify-between">
            <span className="text-[0.74rem] font-semibold text-muted">
              Porsi Sari sebelum
            </span>
            <span className="tnum text-[0.82rem] font-bold">30,4%</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-[0.74rem] font-semibold text-muted">Sesudah</span>
            <span className="tnum text-[0.82rem] font-bold text-brand-dark">33,8%</span>
          </div>
        </div>
        <p className="text-[0.72rem] leading-relaxed font-medium text-muted">
          Semua porsi mitra dihitung ulang bersamaan, dalam satu penyimpanan.
        </p>
      </div>
    </Frame>
  )
}

/** Penarikan laba. */
export function ScreenPenarikan() {
  return (
    <Frame title="Penarikan laba" crumb="Budi">
      <div className="grid gap-3">
        <div className="rounded-[var(--radius-md)] border border-line px-3.5 py-3">
          <div className="text-[0.64rem] font-semibold text-muted">
            HAK YANG BELUM DITARIK
          </div>
          <div className="tnum text-[1.3rem] font-extrabold tracking-[-0.03em] text-positive">
            Rp 4.620.000
          </div>
        </div>
        <Field label="JUMLAH DITARIK">
          <Input mono>Rp 2.000.000</Input>
        </Field>
        <div className="flex items-baseline justify-between rounded-[var(--radius-sm)] bg-brand-soft px-3 py-2.5">
          <span className="text-[0.74rem] font-semibold text-brand-dark/80">Sisa</span>
          <span className="tnum text-[0.86rem] font-bold text-brand-dark">
            Rp 2.620.000
          </span>
        </div>
      </div>
    </Frame>
  )
}
