import Link from 'next/link'

const conversions = [
  { href: '/conversions/holt',       label: 'HOLT' },
  { href: '/conversions/dale',       label: 'DALE' },
  { href: '/conversions/fell',       label: 'FELL' },
  { href: '/conversions/crag',       label: 'CRAG' },
  { href: '/conversions/commission', label: 'COMMISSION' },
]

const company = [
  { href: '/builds',   label: 'BUILDS' },
  { href: '/configure',label: 'CONFIGURE' },
  { href: '/systems',  label: 'SYSTEMS' },
  { href: '/process',  label: 'PROCESS' },
  { href: '/about',    label: 'ABOUT' },
  { href: '/contact',  label: 'CONTACT' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--alkota-forest)' }}>
      <div
        className="max-w-site mx-auto px-6 md:px-10 lg:px-20 py-20"
        style={{ borderTop: '1px solid rgba(244,241,236,0.15)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="font-display font-extrabold text-[18px] tracking-[0.2em] uppercase text-white mb-2">
                ALKOTA
              </div>
              <div
                className="font-body text-[13px] italic"
                style={{ color: 'rgba(244,241,236,0.55)' }}
              >
                Built for the unknown.
              </div>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://instagram.com" aria-label="Instagram" className="transition-opacity hover:opacity-100" style={{ color: 'var(--alkota-chalk)', opacity: 0.6 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="transition-opacity hover:opacity-100" style={{ color: 'var(--alkota-chalk)', opacity: 0.6 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="transition-opacity hover:opacity-100" style={{ color: 'var(--alkota-chalk)', opacity: 0.6 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Conversions */}
          <div>
            <div
              className="label-mono mb-5"
              style={{ color: 'rgba(244,241,236,0.4)' }}
            >
              CONVERSIONS
            </div>
            <ul className="flex flex-col gap-3 list-none">
              {conversions.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-[13px] no-underline transition-colors duration-200 text-white/65 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <div
              className="label-mono mb-5"
              style={{ color: 'rgba(244,241,236,0.4)' }}
            >
              COMPANY
            </div>
            <ul className="flex flex-col gap-3 list-none">
              {company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-[13px] no-underline transition-colors duration-200 text-white/65 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <div
              className="label-mono mb-5"
              style={{ color: 'rgba(244,241,236,0.4)' }}
            >
              CONTACT
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-mono text-[10px]" style={{ color: 'var(--alkota-stone)' }}>
                Based in the UK
              </div>
              <a
                href="mailto:hello@alkota.co.uk"
                className="font-body text-[13px] no-underline transition-colors duration-200"
                style={{ color: 'rgba(244,241,236,0.65)' }}
              >
                hello@alkota.co.uk
              </a>
              <div className="font-body text-[12px]" style={{ color: 'rgba(244,241,236,0.45)' }}>
                Enquiry response within 48 hours
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-site mx-auto px-6 md:px-10 lg:px-20 pb-8 flex flex-col md:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid rgba(244,241,236,0.1)' }}
      >
        <div className="font-mono text-[9px] pt-6" style={{ color: 'var(--alkota-stone)' }}>
          © {new Date().getFullYear()} Alkota Van Conversions Ltd. All rights reserved.
        </div>
        <div className="flex items-center gap-6 pt-6">
          {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((label) => (
            <Link
              key={label}
              href="#"
              className="font-mono text-[9px] no-underline transition-colors duration-200"
              style={{ color: 'var(--alkota-stone)' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
