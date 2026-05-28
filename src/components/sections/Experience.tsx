import { useState, useMemo, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

const tabs = [
  {
    id: 'pool',
    label: 'Pool & Recreation',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Dive Into Leisure',
    title: 'Olympic-Size Pool',
    description:
      'Our signature outdoor pool is the heart of the hotel grounds — an expansive, crystal-clear oasis surrounded by lush greenery and freshwater views. Whether you prefer a morning lap or an afternoon float beneath the open sky, the experience is endlessly refreshing.',
    highlights: [
      'Full-length outdoor swimming pool',
      'Poolside seating & sunbeds',
      'Open daily 6am – 10pm',
      'Towel & refreshment service',
    ],
  },
  {
    id: 'lounge',
    label: 'The Underground Lounge',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    tagline: 'An Immersive Experience',
    title: 'The Signature Lounge',
    description:
      'Step beneath the main building into a dramatic space unlike any other. With mesmerizing epoxy flooring that mirrors the ocean, architectural columns, and layered ambient lighting — our lounge is a destination in itself. The perfect setting for private events, celebrations, and exclusive gatherings.',
    highlights: [
      'Dramatic ocean-effect epoxy floor',
      'Ambient architectural lighting',
      'Capacity for private events',
      'Premium sound system',
    ],
  },
  {
    id: 'dining',
    label: 'Fine Dining',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Flavours & Finesse',
    title: 'Culinary Excellence',
    description:
      'Our restaurant is a celebration of flavour. From traditional Ghanaian cuisine to international classics — every dish is prepared with fresh, locally sourced ingredients and meticulous attention to presentation. Dining at The Royal Hawk is a journey in itself.',
    highlights: [
      'International & local cuisine',
      'Private dining reservations',
      'In-room dining available',
      'Curated beverage selection',
    ],
  },
  {
    id: 'events',
    label: 'Events & Conferences',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Gather in Style',
    title: 'Event Spaces',
    description:
      'From intimate business meetings to grand celebrations, The Royal Hawk Hotel offers fully equipped event spaces tailored to your vision. Our experienced events team ensures every detail is handled with precision and care.',
    highlights: [
      'Flexible conference rooms',
      'Dedicated events coordinator',
    ],
  },
]

export default memo(function Experience() {
  const [active, setActive] = useState('pool')

  // Memoized so tabs.find() doesn't run on every render unrelated to `active`
  const current = useMemo(() => tabs.find((t) => t.id === active)!, [active])

  // Stable handler reference — avoids recreating inline arrow on every render
  const handleTabClick = useCallback((id: string) => setActive(id), [])

  return (
    <section id="experience" className="section-padding bg-hawk-black">
      <div className="container-max px-4 sm:px-6 lg:px-10">
        <SectionHeader
          tag="Curated Experiences"
          title="Life at The Royal Hawk"
          subtitle="More than a place to stay — a world of experiences curated for the discerning traveller."
        />

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3"
          role="tablist"
          aria-label="Experience categories"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => handleTabClick(tab.id)}
              className={`font-montserrat text-[11px] tracking-[0.22em] uppercase px-5 py-2.5 transition-all duration-300 cursor-pointer border ${
                active === tab.id
                  ? 'bg-gold-400 text-hawk-black border-gold-400'
                  : 'border-white/[0.1] text-hawk-cream/55 hover:border-gold-400/35 hover:text-hawk-cream/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <div className="mt-10" role="tabpanel" id={`panel-${active}`} aria-label={current.label}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden border border-white/[0.06]"
            >
              {/* Image */}
              <div className="lg:col-span-3 relative h-64 sm:h-80 lg:h-auto min-h-[320px] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.title}
                  className="img-cover transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent lg:from-transparent lg:to-hawk-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-hawk-black/70 lg:from-transparent lg:to-transparent" />

                {/* Tagline overlay */}
                <div className="absolute bottom-5 left-5">
                  <span className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-gold-400">
                    {current.tagline}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 bg-hawk-surface p-7 sm:p-10 flex flex-col justify-center">
                <h3 className="font-cormorant text-3xl sm:text-4xl font-light text-hawk-cream mb-4 leading-tight">
                  {current.title}
                </h3>

                <div className="h-px w-12 bg-gradient-to-r from-gold-400 to-transparent mb-5" />

                <p className="font-montserrat text-[12px] sm:text-[13px] text-hawk-muted leading-relaxed mb-7">
                  {current.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {current.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3">
                      <span className="w-4 h-px bg-gold-400/60 flex-shrink-0" aria-hidden="true" />
                      <span className="font-montserrat text-[12px] text-hawk-cream/65">{h}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="font-montserrat text-[11px] tracking-[0.28em] uppercase px-7 py-3 border border-gold-400/45 text-gold-400 hover:bg-gold-400 hover:text-hawk-black transition-all duration-300 cursor-pointer self-start"
                >
                  Enquire Now
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
})
