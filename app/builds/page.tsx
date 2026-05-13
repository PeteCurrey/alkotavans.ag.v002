import type { Metadata } from 'next'
import SnapGallery from '@/components/builds/SnapGallery'

export const metadata: Metadata = {
  title: 'Builds | Alkota Van Conversions',
  description: 'Explore our completed expedition van builds — CRAG, FELL, and DALE layouts on Iveco, Sprinter, Transit and TGE platforms.',
}

export default function BuildsPage() {
  return <SnapGallery />
}
