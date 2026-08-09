import { Reveal, RevealFromSide, ScrollParallax } from '@/components/reveal'
import { ScreenBatalkan, ScreenUndangan } from '@/components/screens'

const points = [
  [
    'Mudah untuk bergabung',
    'Kirim tautan atau kode. Mitra bisa masuk sendiri dan langsung melihat data usaha yang sama.',
  ],
  [
    'Koreksi tetap transparan',
    'Kesalahan dibatalkan dengan catatan baru. Catatan lama tetap tersimpan dan bisa diperiksa.',
  ],
  [
    'Setiap aktivitas memiliki nama',
    'Siapa yang mencatat, mengubah porsi, atau membatalkan transaksi selalu terlihat.',
  ],
]

export function Partners() {
  return (
    <section id="mitra" className="section-pad">
      <div className="rail">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-20">
          <Reveal className="lg:sticky lg:top-28">
            <p className="eyebrow text-brand">Dibuat untuk dipakai bersama</p>
            <h2 className="headline mt-5">
              Bukan spreadsheet yang hanya dimengerti satu orang.
            </h2>
            <p className="subhead mt-6 text-muted">
              Setiap mitra bisa memeriksa catatannya sendiri. Tidak perlu menunggu orang
              lain mengirim file terbaru.
            </p>

            <div className="mt-10 grid gap-5">
              {points.map(([title, body]) => (
                <div key={title} className="border-l-2 border-brand pl-4">
                  <h3 className="text-[0.96rem] font-bold tracking-[-0.02em]">{title}</h3>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <RevealFromSide side="right">
              <ScrollParallax amount={26} rotate={0.45}>
                <div className="sm:translate-y-7 lg:translate-y-0 lg:pr-24">
                  <div className="screen-hover">
                    <ScreenUndangan />
                  </div>
                </div>
              </ScrollParallax>
            </RevealFromSide>
            <RevealFromSide side="right" delay={0.1}>
              <ScrollParallax amount={18} rotate={0.7}>
                <div className="lg:ml-24">
                  <div className="screen-hover">
                    <ScreenBatalkan />
                  </div>
                </div>
              </ScrollParallax>
            </RevealFromSide>
          </div>
        </div>
      </div>
    </section>
  )
}
