import { useState, useEffect, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const reviews = [
  {
    id: 1,
    name: 'Elliot Edudzi',
    role: 'Verified Guest',
    rating: 5,
    text: 'A cool and serene environment for anyone who likes to visit places. Kudos to the room services and all other staffs for putting up this place. I really love it!',
    avatar: 'EE',
    color: 'from-blue-600 to-blue-800',
    source: 'Google Reviews',
  },
  {
    id: 2,
    name: 'Roddy Clinch',
    role: 'Verified Guest',
    rating: 5,
    text: 'I really loved my stay here. The ambiance is top-notch, the staff are extremely welcoming, and the pool area is simply breathtaking. Will definitely be returning.',
    avatar: 'RC',
    color: 'from-amber-700 to-amber-900',
    source: 'Google Reviews',
  },
  {
    id: 3,
    name: 'Roy Prince',
    role: 'Verified Guest',
    rating: 5,
    text: 'One of the best hotel experiences I have had in Ghana. The underground lounge alone is worth the visit — a truly unique and unforgettable space. Exceptional service throughout.',
    avatar: 'RP',
    color: 'from-emerald-700 to-emerald-900',
    source: 'Google Reviews',
  },
]

const Stars = memo(function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? 'text-gold-400' : 'text-white/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
})

export default memo(function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length), [])

  // Stable handlers for mouse events — avoids new function refs on every render
  const handleMouseEnter = useCallback(() => setPaused(true), [])
  const handleMouseLeave = useCallback(() => setPaused(false), [])

  // Single stable dot-click handler using data attribute instead of inline closures
  const handleDotClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrent(Number(e.currentTarget.dataset.index))
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, paused])

  return (
    <section
      id="testimonials"
      className="section-padding bg-hawk-dark relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, #D4AF37 0%, transparent 60%), radial-gradient(circle at 70% 50%, #06B6D4 0%, transparent 60%)`,
        }}
      />

      <div className="container-max px-4 sm:px-6 lg:px-10 relative">
        <SectionHeader
          tag="Guest Stories"
          title="What Our Guests Say"
          subtitle="The stories shared by those who have experienced The Royal Hawk — in their own words."
        />

        <div className="mt-14 max-w-3xl mx-auto">
          {/* Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="glassmorphism p-8 sm:p-12 relative"
              >
                {/* Quote icon */}
                <Quote
                  className="absolute top-7 right-8 w-12 h-12 text-gold-400/10"
                  aria-hidden="true"
                />

                {/* Stars */}
                <div className="mb-5">
                  <Stars count={reviews[current].rating} />
                </div>

                {/* Review text */}
                <blockquote className="font-cormorant text-xl sm:text-2xl text-hawk-cream/85 leading-relaxed mb-8 italic">
                  "{reviews[current].text}"
                </blockquote>

                {/* Divider */}
                <div className="h-px w-12 bg-gradient-to-r from-gold-400 to-transparent mb-6" />

                {/* Reviewer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${reviews[current].color} flex items-center justify-center`}>
                      <span className="font-montserrat text-xs font-semibold text-white/90">
                        {reviews[current].avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-montserrat text-sm font-medium text-hawk-cream/90">
                        {reviews[current].name}
                      </p>
                      <p className="font-montserrat text-[11px] text-hawk-muted">
                        {reviews[current].role} · {reviews[current].source}
                      </p>
                    </div>
                  </div>

                  {/* Gold accent */}
                  <div className="hidden sm:flex items-center gap-1">
                    <div className="w-6 h-px bg-gold-400/30" />
                    <div className="w-2 h-2 border border-gold-400/40 rotate-45" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/[0.1] flex items-center justify-center text-hawk-cream/50 hover:border-gold-400/50 hover:text-gold-400 transition-all duration-300 cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2.5" role="tablist" aria-label="Review navigation">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Review ${i + 1}`}
                  data-index={i}
                  onClick={handleDotClick}
                  className={`transition-all duration-400 cursor-pointer ${
                    i === current
                      ? 'w-6 h-1.5 bg-gold-400'
                      : 'w-1.5 h-1.5 bg-white/20 rounded-full hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-white/[0.1] flex items-center justify-center text-hawk-cream/50 hover:border-gold-400/50 hover:text-gold-400 transition-all duration-300 cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Overall rating */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
          >
            <div className="flex items-center gap-2">
              <Stars count={5} />
              <span className="font-cormorant text-2xl font-semibold text-gold-400">5.0</span>
            </div>
            <div className="w-px h-4 bg-white/[0.1] hidden sm:block" />
            <span className="font-montserrat text-[11px] tracking-[0.2em] uppercase text-hawk-muted">
              Rated on Google Reviews · 100% Satisfaction
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
})
