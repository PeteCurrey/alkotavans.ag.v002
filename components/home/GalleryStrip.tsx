'use client'

import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

const images = [
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80', label: 'CRAG', alt: 'Mountain terrain' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80', label: 'CRAG', alt: 'Dramatic sky mountain road' },
  { src: 'https://images.unsplash.com/photo-1499424939894-f5d9e29e400d?w=600&q=80', label: 'FELL', alt: 'Coastal road' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', label: 'DALE', alt: 'Highland pass' },
  { src: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=80', label: 'HOLT', alt: 'Forest track' },
  { src: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&q=80', label: 'FELL', alt: 'Moorland low light' },
]

export default function GalleryStrip() {
  return (
    <section style={{ background: 'var(--alkota-obsidian)' }} className="py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-site mx-auto">
        {/* Scroll strip */}
        <RevealOnScroll>
          <div className="h-scroll-strip pb-2" style={{ height: '340px' }}>
            {images.map((img, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 overflow-hidden"
                style={{ aspectRatio: '4/5', height: '320px', borderRadius: 0 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(25,28,20,0.5) 0%, transparent 50%)', pointerEvents: 'none' }}
                />
                <div className="absolute bottom-3 left-3">
                  <Badge variant="forest">{img.label}</Badge>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* View all link */}
        <div className="flex justify-end mt-6">
          <Link
            href="/builds"
            className="font-body font-medium text-[11px] uppercase tracking-[0.1em] no-underline transition-colors duration-200"
            style={{ color: 'rgba(244,241,236,0.5)' }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(244,241,236,0.9)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(244,241,236,0.5)')}
          >
            View all builds →
          </Link>
        </div>
      </div>
    </section>
  )
}
