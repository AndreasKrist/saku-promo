import { Hero } from '@/components/sections/hero'
import { ScrollTicker } from '@/components/scroll-ticker'
import { Problem } from '@/components/sections/problem'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Features } from '@/components/sections/features'
import { Trust } from '@/components/sections/trust'
import { Reports } from '@/components/sections/reports'
import { Partners } from '@/components/sections/partners'
import { Pricing } from '@/components/sections/pricing'
import { Faq } from '@/components/sections/faq'
import { FinalCta } from '@/components/sections/final-cta'

export default function Page() {
  return (
    <>
      <Hero />
      <ScrollTicker />
      <Problem />
      <HowItWorks />
      <Features />
      <Reports />
      <Partners />
      <Trust />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  )
}
