import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import BuildsPreview from '@/components/home/BuildsPreview'
import LayoutRange from '@/components/home/LayoutRange'
import ConfiguratorCTA from '@/components/home/ConfiguratorCTA'
import PartnerLogos from '@/components/home/PartnerLogos'
import SystemsOverview from '@/components/home/SystemsOverview'
import Process from '@/components/home/Process'
import GalleryStrip from '@/components/home/GalleryStrip'
import CommissionCTA from '@/components/home/CommissionCTA'

export const metadata: Metadata = {
  title: 'Alkota Van Conversions | Expedition-Grade Builds · Built in the UK',
  description: 'Premium expedition-grade van conversions. Four layouts, four platforms, no compromises. Built for the unknown.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <BuildsPreview />
      <LayoutRange />
      <ConfiguratorCTA />
      <PartnerLogos />
      <SystemsOverview />
      <Process />
      <GalleryStrip />
      <CommissionCTA />
    </>
  )
}
