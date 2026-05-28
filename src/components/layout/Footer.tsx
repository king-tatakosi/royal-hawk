const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#rooms', label: 'Rooms & Suites' },
  { href: '#experience', label: 'Experiences' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
]

const amenities = [
  'Olympic Swimming Pool',
  'Fine Dining Restaurant',
  'Underground Lounge',
  'Conference & Events',
  'Free Parking',
  '24/7 Concierge',
]

import { memo } from 'react'

export default memo(function Footer() {
  return (
    <footer className="bg-hawk-dark border-t border-gold-400/10">
      {/* Top gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

      <div className="container-max px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <p className="font-cormorant text-[17px] font-semibold tracking-[0.28em] text-hawk-cream uppercase leading-none">
                The Royal Hawk
              </p>
              <p className="font-montserrat text-[8px] tracking-[0.55em] text-gold-400 uppercase mt-1 leading-none">
                Hotel · Ghana
              </p>
            </div>
            <p className="font-montserrat text-[12px] text-hawk-muted leading-relaxed mb-6 max-w-xs">
              Where elegance meets excellence. A world-class hospitality experience in the heart of West Africa.
            </p>
            <div className="flex gap-3">
              {['Fb', 'Ig', 'Tw'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 border border-white/[0.1] flex items-center justify-center font-montserrat text-[10px] text-hawk-cream/50 hover:border-gold-400/50 hover:text-gold-400 transition-all duration-300 cursor-pointer"
                  aria-label={s === 'Fb' ? 'Facebook' : s === 'Ig' ? 'Instagram' : 'Twitter'}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-gold-400/80 mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-montserrat text-[12px] text-hawk-muted hover:text-hawk-cream/80 transition-colors duration-200 cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-gold-400/30 group-hover:w-5 group-hover:bg-gold-400/60 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Amenities */}
          <div>
            <p className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-gold-400/80 mb-5">
              Amenities
            </p>
            <ul className="space-y-3">
              {amenities.map((a) => (
                <li
                  key={a}
                  className="font-montserrat text-[12px] text-hawk-muted flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-gold-400/40 flex-shrink-0" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact mini */}
          <div>
            <p className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-gold-400/80 mb-5">
              Contact
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-hawk-muted/60 mb-1">Location</p>
                <p className="font-montserrat text-[12px] text-hawk-muted">Ghana, West Africa</p>
              </div>
              <div>
                <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-hawk-muted/60 mb-1">Phone</p>
                <a href="tel:0556668965" className="font-montserrat text-[12px] text-hawk-muted hover:text-gold-400 transition-colors duration-200 cursor-pointer">
                  0556 668 965
                </a>
              </div>
              <div>
                <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-hawk-muted/60 mb-1">Email</p>
                <a href="mailto:theroyalhawk@gmail.com" className="font-montserrat text-[12px] text-hawk-muted hover:text-gold-400 transition-colors duration-200 cursor-pointer">
                  theroyalhawk@gmail.com
                </a>
              </div>
              <div>
                <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-hawk-muted/60 mb-1">Hours</p>
                <p className="font-montserrat text-[12px] text-hawk-muted">Check-in: 2:00 PM</p>
                <p className="font-montserrat text-[12px] text-hawk-muted">Check-out: 12:00 PM</p>
              </div>
            </div>

            {/* Book CTA */}
            <a
              href="#contact"
              className="mt-7 block font-montserrat text-[11px] tracking-[0.28em] uppercase px-5 py-3 bg-gold-400/10 border border-gold-400/30 text-gold-400 text-center hover:bg-gold-400 hover:text-hawk-black transition-all duration-300 cursor-pointer"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="container-max px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-montserrat text-[10px] text-hawk-muted text-center sm:text-left">
            &copy; {new Date().getFullYear()} The Royal Hawk Hotel. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-4 h-px bg-gold-400/30" aria-hidden="true" />
            <p className="font-montserrat text-[10px] text-hawk-muted/50 tracking-[0.2em]">
              LUXURY · ELEGANCE · EXCELLENCE
            </p>
            <div className="w-4 h-px bg-gold-400/30" aria-hidden="true" />
          </div>
        </div>
      </div>

    </footer>
  )
})
