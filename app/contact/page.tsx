'use client'

import { useState } from 'react'
import Link from 'next/link'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Column (Obsidian) */}
      <div style={{ background: 'var(--alkota-obsidian)' }} className="w-full lg:w-[40%] px-6 md:px-12 py-32 flex flex-col lg:min-h-screen">
        <RevealOnScroll>
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase mb-4" style={{ color: 'rgba(244,241,236,0.3)' }}>
            Alkota
          </div>
          <h1 className="font-display font-extrabold text-[36px] text-alkota-chalk uppercase leading-tight tracking-[-0.01em] mb-8">
            Commission<br />+ Enquiries
          </h1>
          <p className="font-body text-[14px] leading-[1.9] max-w-[400px]" style={{ color: 'rgba(244,241,236,0.6)' }}>
            Every Alkota starts with a conversation. Tell us what you&apos;re imagining — the van, the use case, the places you want to go. We&apos;ll come back to you within 48 hours.
          </p>

          <div className="mt-16 space-y-8">
            <div>
              <div className="font-mono text-[9px] tracking-[0.1em] uppercase mb-2" style={{ color: 'rgba(244,241,236,0.4)' }}>Enquiry Response</div>
              <div className="font-body text-[13px]" style={{ color: 'var(--alkota-chalk)' }}>Within 48 hours</div>
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-[0.1em] uppercase mb-2" style={{ color: 'rgba(244,241,236,0.4)' }}>Build Lead Time</div>
              <div className="font-body text-[13px]" style={{ color: 'var(--alkota-chalk)' }}>14–22 weeks from deposit</div>
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-[0.1em] uppercase mb-2" style={{ color: 'rgba(244,241,236,0.4)' }}>Location</div>
              <div className="font-body text-[13px]" style={{ color: 'var(--alkota-chalk)' }}>United Kingdom</div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Right Column (Chalk) */}
      <div style={{ background: 'var(--alkota-chalk)' }} className="w-full lg:w-[60%] px-6 md:px-16 lg:px-24 py-32 flex justify-center items-center">
        <div className="w-full max-w-[600px]">
          {submitted ? (
            <RevealOnScroll>
              <h2 className="font-display font-bold text-[28px] mb-4" style={{ color: 'var(--alkota-forest)' }}>Thank you.</h2>
              <p className="font-body text-[14px] leading-relaxed mb-8" style={{ color: 'var(--alkota-stone)' }}>
                We&apos;ll be in touch within 48 hours.<br />
                In the meantime, explore our recent builds.
              </p>
              <Link href="/builds" className="btn btn-ghost-dark">View all builds →</Link>
            </RevealOnScroll>
          ) : (
            <RevealOnScroll delay={0.1}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block font-body text-[13px] mb-2" style={{ color: 'var(--alkota-obsidian)' }}>Your name</label>
                  <input required type="text" className="w-full bg-white outline-none focus:border-alkota-forest transition-colors duration-200" style={{ border: '1px solid rgba(25,28,20,0.15)', borderRadius: 0, padding: '12px 16px', fontFamily: 'var(--font-dm-sans)', fontSize: '14px' }} />
                </div>
                <div>
                  <label className="block font-body text-[13px] mb-2" style={{ color: 'var(--alkota-obsidian)' }}>Email address</label>
                  <input required type="email" className="w-full bg-white outline-none focus:border-alkota-forest transition-colors duration-200" style={{ border: '1px solid rgba(25,28,20,0.15)', borderRadius: 0, padding: '12px 16px', fontFamily: 'var(--font-dm-sans)', fontSize: '14px' }} />
                </div>
                <div>
                  <label className="block font-body text-[13px] mb-2" style={{ color: 'var(--alkota-obsidian)' }}>Phone (optional)</label>
                  <input type="tel" className="w-full bg-white outline-none focus:border-alkota-forest transition-colors duration-200" style={{ border: '1px solid rgba(25,28,20,0.15)', borderRadius: 0, padding: '12px 16px', fontFamily: 'var(--font-dm-sans)', fontSize: '14px' }} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-[13px] mb-2" style={{ color: 'var(--alkota-obsidian)' }}>Interested layout</label>
                    <select required className="w-full bg-white outline-none focus:border-alkota-forest transition-colors duration-200" style={{ border: '1px solid rgba(25,28,20,0.15)', borderRadius: 0, padding: '12px 16px', fontFamily: 'var(--font-dm-sans)', fontSize: '14px' }}>
                      <option value="">Select layout...</option>
                      <option value="holt">HOLT</option>
                      <option value="dale">DALE</option>
                      <option value="fell">FELL</option>
                      <option value="crag">CRAG</option>
                      <option value="commission">COMMISSION</option>
                      <option value="not_sure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-body text-[13px] mb-2" style={{ color: 'var(--alkota-obsidian)' }}>Base van preference</label>
                    <select required className="w-full bg-white outline-none focus:border-alkota-forest transition-colors duration-200" style={{ border: '1px solid rgba(25,28,20,0.15)', borderRadius: 0, padding: '12px 16px', fontFamily: 'var(--font-dm-sans)', fontSize: '14px' }}>
                      <option value="">Select van...</option>
                      <option value="man_tge">MAN TGE / VW Crafter</option>
                      <option value="sprinter">Mercedes Sprinter</option>
                      <option value="transit">Ford Transit</option>
                      <option value="iveco">Iveco Daily</option>
                      <option value="not_sure">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-body text-[13px] mb-2" style={{ color: 'var(--alkota-obsidian)' }}>Budget range</label>
                  <select required className="w-full bg-white outline-none focus:border-alkota-forest transition-colors duration-200" style={{ border: '1px solid rgba(25,28,20,0.15)', borderRadius: 0, padding: '12px 16px', fontFamily: 'var(--font-dm-sans)', fontSize: '14px' }}>
                    <option value="">Select budget...</option>
                    <option value="60-80">£60k–£80k</option>
                    <option value="80-100">£80k–£100k</option>
                    <option value="100-130">£100k–£130k</option>
                    <option value="130+">£130k+</option>
                    <option value="prefer_not">Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-[13px] mb-2" style={{ color: 'var(--alkota-obsidian)' }}>Tell us about your project</label>
                  <textarea required rows={4} className="w-full bg-white outline-none focus:border-alkota-forest transition-colors duration-200 resize-none" style={{ border: '1px solid rgba(25,28,20,0.15)', borderRadius: 0, padding: '12px 16px', fontFamily: 'var(--font-dm-sans)', fontSize: '14px' }}></textarea>
                </div>

                <button type="submit" className="btn btn-solid w-full justify-center mt-2">
                  Submit Enquiry
                </button>
              </form>
            </RevealOnScroll>
          )}
        </div>
      </div>
    </div>
  )
}
