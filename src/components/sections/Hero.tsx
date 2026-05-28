import { memo } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'

const HERO_BG = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80'
const HERO_BG_MD = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1024&q=75'
const HERO_BG_SM = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=768&q=70'

export default memo(function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image — proper <img> so browser treats it as LCP candidate; srcset avoids 1920px on mobile */}
      <img
        src={HERO_BG}
        srcSet={`${HERO_BG_SM} 768w, ${HERO_BG_MD} 1024w, ${HERO_BG} 1920w`}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 pointer-events-none"
      />

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-hawk-black/75 via-hawk-black/40 to-hawk-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-hawk-black/55 via-transparent to-hawk-black/55" />

      {/* Top decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 1.8, ease: 'easeOut' }}
        className="absolute top-24 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gold-400/50 to-transparent origin-top"
        aria-hidden="true"
      />

      {/* Center content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">

        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center justify-center gap-2 mb-7"
        >
          <MapPin className="w-3 h-3 text-gold-400 flex-shrink-0" aria-hidden="true" />
          <span className="font-montserrat text-[10px] tracking-[0.45em] uppercase text-hawk-cream/55">
            Kpando, Ghana
          </span>
        </motion.div>

        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-montserrat text-[10px] tracking-[0.55em] uppercase text-gold-400 mb-5"
        >
          Where Elegance Meets Excellence
        </motion.p>

        {/* Main headline — kept at minimal delay to reduce LCP */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-cormorant font-light text-hawk-cream leading-[0.88] mb-5"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)' }}
        >
          The Royal{' '}
          <span className="text-gradient-gold italic font-medium">Hawk</span>
          <br />
          Hotel
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="h-px w-28 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"
          aria-hidden="true"
        />

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="font-montserrat text-sm sm:text-[15px] font-light text-hawk-cream/55 max-w-md mx-auto mb-10 leading-relaxed"
        >
          Experience world-class hospitality in a serene environment crafted for those who appreciate the extraordinary
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#rooms"
            className="font-montserrat text-[11px] tracking-[0.28em] uppercase px-9 py-[14px] bg-gold-400 text-hawk-black font-medium hover:bg-gold-300 transition-all duration-300 cursor-pointer w-full sm:w-auto text-center"
          >
            Explore Suites
          </a>
          <a
            href="#showcase"
            className="font-montserrat text-[11px] tracking-[0.28em] uppercase px-9 py-[14px] border border-hawk-cream/25 text-hawk-cream/70 hover:border-gold-400/55 hover:text-gold-400 transition-all duration-300 cursor-pointer w-full sm:w-auto text-center"
          >
            View Gallery
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
        aria-hidden="true"
      >
        <span className="font-montserrat text-[9px] tracking-[0.5em] uppercase text-hawk-cream/35">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-gold-400/50" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-hawk-black to-transparent pointer-events-none" />
    </section>
  )
})
