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
      className={`card screen-card overflow-hidden ${className}`}
      role="img"
      aria-label={`Contoh tampilan ${title} di aplikasi SAKU`}
    >
      <div className="flex min-h-12 items-center gap-2.5 border-b border-line px-4 py-2.5">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-[0.55rem] bg-brand-dark text-[0.66rem] font-black text-[var(--btn-fg)]">
          S
        </span>
        <span className="text-[0.8rem] font-bold tracking-[-0.02em]">{title}</span>
        {crumb && (
          <span className="ml-auto max-w-[48%] truncate text-right text-[0.66rem] font-semibold text-muted">
            {crumb}
          </span>
        )}
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 text-[0.62rem] font-bold tracking-[0.07em] text-muted uppercase">
        {label}
      </div>
      {children}
    </div>
  )
}

function Input({
  children,
  mono = false,
}: {
  children: React.ReactNode
  mono?: boolean
}) {
  return (
    <div
      className={`rounded-[var(--radius-sm)] border border-line bg-canvas px-3 py-2.5 text-[0.82rem] font-semibold ${mono ? 'tnum' : ''}`}
    >
      {children}
    </div>
  )
}

export function ScreenRingkasan() {
  const bars = [42, 55, 36, 68, 58, 76, 63, 88, 74, 92]
  const transactions = [
    ['Kopi susu & pastry', '+ Rp 860.000', 'text-positive'],
    ['Supplier biji kopi', '− Rp 2.400.000', 'text-ink'],
    ['Gas dan galon', '− Rp 380.000', 'text-ink'],
  ]

  return (
    <Frame title="Ringkasan" crumb="Warung Kopi Sudut">
      <div className="grid gap-3.5">
        <div className="rounded-[var(--radius-md)] bg-brand-dark p-4 text-white shadow-[0_14px_34px_oklch(0.2_0.05_42/22%)]">
          <div className="flex items-center justify-between gap-3 text-[0.67rem] font-semibold text-white/78">
            <span>Kas bisnis</span>
            <span>Hari ini</span>
          </div>
          <p className="tnum mt-3 text-[clamp(1.35rem,4vw,1.85rem)] font-bold tracking-[-0.055em]">
            Rp 18.750.000
          </p>
          <p className="mt-1 text-[0.64rem] text-white/70">
            Saldo yang tersedia di usaha
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-[var(--radius-md)] border border-line p-3">
            <p className="text-[0.62rem] font-semibold text-muted">Laba bersih</p>
            <p className="tnum mt-2 text-[0.92rem] font-extrabold tracking-[-0.03em]">
              Rp 11,35 jt
            </p>
          </div>
          <div className="rounded-[var(--radius-md)] border border-line p-3">
            <p className="text-[0.62rem] font-semibold text-muted">Total modal</p>
            <p className="tnum mt-2 text-[0.92rem] font-extrabold tracking-[-0.03em]">
              Rp 40 jt
            </p>
          </div>
        </div>

        <div className="rounded-[var(--radius-md)] border border-line p-3.5">
          <div className="flex items-center justify-between text-[0.64rem] font-semibold">
            <span>Pergerakan kas</span>
            <span className="text-muted">10 hari terakhir</span>
          </div>
          <div className="mt-3 flex h-14 items-end gap-1.5" aria-hidden="true">
            {bars.map((height, index) => (
              <span
                key={index}
                className="dashboard-bar flex-1 rounded-t-[0.2rem] bg-brand"
                style={{
                  height: `${height}%`,
                  opacity: 0.34 + index * 0.06,
                  animationDelay: `${300 + index * 45}ms`,
                }}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-1 flex items-center justify-between text-[0.64rem] font-semibold">
            <span>Transaksi terbaru</span>
            <span className="text-brand-dark">Lihat semua</span>
          </div>
          {transactions.map(([name, amount, color]) => (
            <div
              key={name}
              className="flex items-center justify-between gap-3 border-b border-line py-2.5 last:border-0"
            >
              <span className="truncate text-[0.72rem] font-medium text-muted">
                {name}
              </span>
              <span className={`tnum shrink-0 text-[0.72rem] font-bold ${color}`}>
                {amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

export function ScreenTransaksi() {
  return (
    <Frame title="Transaksi baru" crumb="Warung Kopi Sudut">
      <div className="grid gap-3">
        <Field label="Jumlah">
          <Input mono>Rp 2.400.000</Input>
        </Field>
        <Field label="Untuk apa?">
          <Input>Bayar supplier biji kopi</Input>
        </Field>
        <Field label="Dibayar dari">
          <div className="grid gap-2">
            <div className="rounded-[var(--radius-sm)] border border-line bg-canvas px-3 py-2.5 text-[0.78rem] font-medium text-muted">
              Kas usaha
            </div>
            <div className="flex items-center gap-2 rounded-[var(--radius-sm)] border-2 border-brand bg-brand-soft px-3 py-2.5 text-[0.78rem] font-bold text-brand-dark">
              <span
                aria-hidden="true"
                className="grid h-4 w-4 place-items-center rounded-full bg-brand text-[0.58rem] text-white"
              >
                ✓
              </span>
              Uang pribadi Budi
            </div>
          </div>
        </Field>
        <p className="rounded-[var(--radius-sm)] bg-brand-soft/70 px-3 py-2.5 text-[0.7rem] leading-relaxed font-medium text-brand-dark">
          Otomatis masuk sebagai <strong>tambahan modal Budi</strong>. Porsinya ikut
          diperbarui.
        </p>
      </div>
    </Frame>
  )
}

export function ScreenKepemilikan() {
  const partners = [
    { name: 'Budi', pct: 46.2, amount: 'Rp 18.480.000' },
    { name: 'Sari', pct: 33.8, amount: 'Rp 13.520.000' },
    { name: 'Dimas', pct: 20, amount: 'Rp 8.000.000' },
  ]

  return (
    <Frame title="Porsi mitra" crumb="Total modal Rp 40 juta">
      <div className="grid gap-4">
        {partners.map((partner) => (
          <div key={partner.name}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <span className="text-[0.8rem] font-bold">{partner.name}</span>
              <span className="tnum text-[0.8rem] font-extrabold text-brand-dark">
                {partner.pct.toFixed(1).replace('.', ',')}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-brand-soft">
              <div
                className="h-full rounded-full bg-brand"
                style={{ width: `${partner.pct}%` }}
              />
            </div>
            <p className="tnum mt-1.5 text-[0.66rem] font-medium text-muted">
              Modal {partner.amount}
            </p>
          </div>
        ))}
      </div>
    </Frame>
  )
}

export function ScreenLaporan() {
  const bars = [38, 52, 44, 61, 55, 72, 66, 84]

  return (
    <Frame title="Laporan" crumb="Juli 2026">
      <div className="grid gap-3.5">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-[var(--radius-md)] border border-line px-3 py-2.5">
            <p className="text-[0.58rem] font-bold tracking-[0.06em] text-muted uppercase">
              Pendapatan
            </p>
            <p className="tnum mt-1 text-[0.9rem] font-extrabold text-positive">
              Rp 31,2 jt
            </p>
          </div>
          <div className="rounded-[var(--radius-md)] border border-line px-3 py-2.5">
            <p className="text-[0.58rem] font-bold tracking-[0.06em] text-muted uppercase">
              Beban
            </p>
            <p className="tnum mt-1 text-[0.9rem] font-extrabold text-negative">
              Rp 19,85 jt
            </p>
          </div>
        </div>
        <div
          className="flex h-28 items-end gap-2 border-b border-line"
          aria-hidden="true"
        >
          {bars.map((height, index) => (
            <div
              key={index}
              className="dashboard-bar flex-1 rounded-t-[0.3rem] bg-brand"
              style={{
                height: `${height}%`,
                opacity: 0.35 + index * 0.08,
                animationDelay: `${index * 45}ms`,
              }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[0.58rem] font-bold tracking-[0.06em] text-muted uppercase">
              Laba bersih
            </p>
            <p className="tnum mt-1 text-[1rem] font-extrabold">Rp 11.350.000</p>
          </div>
          <span className="rounded-[var(--radius-sm)] border border-line px-3 py-2 text-[0.68rem] font-bold">
            Ekspor PDF
          </span>
        </div>
      </div>
    </Frame>
  )
}

export function ScreenLogAktivitas() {
  const events = [
    ['Budi', 'mencatat beban Rp 2.400.000', '2 menit lalu'],
    ['Sari', 'menambah modal Rp 5.000.000', 'kemarin, 19.04'],
    ['Dimas', 'membatalkan transaksi #218', '3 hari lalu'],
  ]

  return (
    <Frame title="Aktivitas" crumb="Terlihat semua mitra">
      <ol>
        {events.map(([who, what, when]) => (
          <li
            key={`${who}-${what}`}
            className="flex gap-3 border-b border-line py-3 last:border-0"
          >
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
            <div className="min-w-0">
              <p className="text-[0.76rem] leading-snug">
                <strong>{who}</strong> <span className="text-muted">{what}</span>
              </p>
              <p className="mt-1 text-[0.62rem] font-medium text-muted">{when}</p>
            </div>
          </li>
        ))}
      </ol>
    </Frame>
  )
}

export function ScreenUndangan() {
  return (
    <Frame title="Undang mitra" crumb="Warung Kopi Sudut">
      <div className="grid gap-3">
        <Field label="Kode gabung">
          <div className="tnum rounded-[var(--radius-sm)] border border-line bg-canvas px-3 py-3 text-center text-[1.25rem] font-extrabold tracking-[0.22em] text-brand-dark">
            7K4M2P
          </div>
        </Field>
        <Field label="Atau bagikan tautan">
          <div className="truncate rounded-[var(--radius-sm)] border border-line bg-canvas px-3 py-2.5 font-mono text-[0.68rem] text-muted">
            app.saku-umkm.site/gabung/7k4m2p
          </div>
        </Field>
        <p className="text-[0.68rem] leading-relaxed font-medium text-muted">
          Begitu gabung, mitra langsung melihat catatan dan angka yang sama.
        </p>
      </div>
    </Frame>
  )
}

export function ScreenBatalkan() {
  return (
    <Frame title="Riwayat transaksi" crumb="#218">
      <div className="grid gap-2.5">
        <div className="rounded-[var(--radius-sm)] border border-line px-3 py-2.5 opacity-65">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-[0.74rem] font-semibold line-through">
              Beli kompor gas
            </span>
            <span className="tnum text-[0.74rem] font-bold line-through">
              Rp 1.750.000
            </span>
          </div>
          <p className="mt-1 text-[0.62rem] text-muted">Dibatalkan, tetap tersimpan</p>
        </div>
        <div className="rounded-[var(--radius-sm)] border border-brand/40 bg-brand-soft/65 px-3 py-2.5">
          <div className="flex items-baseline justify-between gap-3 text-brand-dark">
            <span className="text-[0.74rem] font-bold">Pembatalan #218</span>
            <span className="tnum text-[0.74rem] font-bold">+ Rp 1.750.000</span>
          </div>
          <p className="mt-1 text-[0.62rem] text-brand-dark/70">
            Tercatat pada tanggal asli
          </p>
        </div>
      </div>
    </Frame>
  )
}
