'use client'

import Link from 'next/link'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

export default function CommissionCTA() {
  return (
    <section
      className="relative py-32 px-6 md:px-10 lg:px-20 overflow-hidden noise-overlay"
      style={{ background: 'var(--alkota-obsidian)' }}
    >
      {/* Faint van silhouette */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none"
        style={{ opacity: 0.03, transform: 'scale(1.4) translateX(20%)', transformOrigin: 'bottom right' }}
        aria-hidden="true"
      >
        <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 280 L80 200 L120 160 L300 140 L480 160 L520 200 L520 280 Z" fill="#3A4D29" />
          <ellipse cx="160" cy="290" rx="40" ry="40" fill="#3A4D29" />
          <ellipse cx="440" cy="290" rx="40" ry="40" fill="#3A4D29" />
          <rect x="130" y="170" width="120" height="70" rx="0" fill="#3A4D29" opacity="0.6" />
          <rect x="270" y="170" width="140" height="70" rx="0" fill="#3A4D29" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-site mx-auto text-center relative z-10">
        <RevealOnScroll>
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-8" style={{ color: 'rgba(244,241,236,0.3)' }}>
            Alkota Commission
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2
            className="font-display font-extrabold text-alkota-chalk mx-auto mb-6"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 0.95, maxWidth: '700px' }}
          >
            Something exact<br />in mind.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p
            className="font-body text-[16px] max-w-[480px] mx-auto mb-10 leading-relaxed"
            style={{ color: 'rgba(244,241,236,0.55)' }}
          >
            The Commission programme is for clients who know precisely what they want — and don&apos;t want to compromise. Tell us what you&apos;re imagining.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <Link href="/contact" className="btn btn-solid text-[12px] py-4 px-10">
            Start a Commission
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  )
}
