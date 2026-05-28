import { useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '../../hooks/useScrolled'

const navLinks = [
  { href: '#rooms', label: 'Rooms' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default memo(function Navbar() {
  const scrolled = useScrolled(60)
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-hawk-black/96 backdrop-blur-2xl border-b border-gold-400/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a href="#" className="flex items-center group cursor-pointer">
            <img
              src="/logo.webp"
              alt="The Royal Hawk Hotel"
              className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-montserrat text-[11px] tracking-[0.22em] uppercase text-hawk-cream/60 hover:text-gold-400 transition-colors duration-300 cursor-pointer relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:0556668965"
              className="font-montserrat text-[11px] tracking-[0.25em] uppercase px-6 py-2.5 border border-white/20 text-hawk-cream/60 hover:border-gold-400/50 hover:text-gold-400 transition-all duration-300 cursor-pointer"
            >
              Call Us
            </a>
            <a
              href="#contact"
              className="font-montserrat text-[11px] tracking-[0.25em] uppercase px-6 py-2.5 border border-gold-400/50 text-gold-400 hover:bg-gold-400 hover:text-hawk-black transition-all duration-300 cursor-pointer"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-hawk-cream/70 hover:text-gold-400 transition-colors duration-200 cursor-pointer p-1"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-hawk-black/98 backdrop-blur-2xl border-t border-gold-400/10 overflow-hidden"
          >
            <nav className="px-6 py-7 flex flex-col gap-5" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-montserrat text-sm tracking-[0.22em] uppercase text-hawk-cream/65 hover:text-gold-400 transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0556668965"
                onClick={() => setOpen(false)}
                className="mt-2 font-montserrat text-[11px] tracking-[0.25em] uppercase px-6 py-3 border border-white/20 text-hawk-cream/60 text-center hover:border-gold-400/50 hover:text-gold-400 transition-all duration-300 cursor-pointer"
              >
                Call Us
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-montserrat text-[11px] tracking-[0.25em] uppercase px-6 py-3 border border-gold-400/50 text-gold-400 text-center hover:bg-gold-400 hover:text-hawk-black transition-all duration-300 cursor-pointer"
              >
                Book Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
})
