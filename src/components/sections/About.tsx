import { memo } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import AnimatedSection from '../ui/AnimatedSection'

const values = [
  { label: 'Excellence', desc: 'Uncompromising standards in every detail' },
  { label: 'Warmth', desc: 'Genuine hospitality that feels like home' },
  { label: 'Prestige', desc: 'A reputation built on memorable stays' },
  { label: 'Comfort', desc: 'Every amenity thoughtfully provided' },
]

export default memo(function About() {
  return (
    <section id="about" className="section-padding bg-hawk-black">
      <div className="container-max px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image side */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative h-[480px] sm:h-[560px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
                alt="The Royal Hawk Hotel aerial view with pool"
                className="img-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-hawk-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-0 sm:-right-8 glassmorphism-strong px-7 py-5 border border-gold-400/20"
            >
              <p className="font-cormorant text-4xl font-semibold text-gold-400 leading-none">5★</p>
              <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-hawk-cream/60 mt-1">
                Guest Rating
              </p>
              <p className="font-montserrat text-[10px] text-hawk-muted mt-0.5">
                100% on Google Reviews
              </p>
            </motion.div>

            {/* Gold corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-gold-400/30" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 sm:-right-8 w-16 h-16 border-b border-r border-gold-400/30" aria-hidden="true" />
          </AnimatedSection>

          {/* Text side */}
          <AnimatedSection direction="right" delay={0.1}>
            <div>
              <SectionHeader
                tag="Our Story"
                title="Born From a Vision of Luxury"
                center={false}
              />

              <div className="space-y-5 mt-6">
                <p className="font-montserrat text-[13px] text-hawk-muted leading-[1.9]">
                  The Royal Hawk Hotel was conceived with a singular purpose — to bring world-class luxury hospitality to Ghana. Set against lush greenery with a sweeping outdoor pool and striking architectural presence, we are more than a hotel; we are an experience.
                </p>
                <p className="font-montserrat text-[13px] text-hawk-muted leading-[1.9]">
                  From the warm, wood-toned interiors of our thoughtfully furnished suites to the dramatic ambiance of our signature underground lounge, every space has been designed to leave a lasting impression on our guests.
                </p>
                <p className="font-montserrat text-[13px] text-hawk-muted leading-[1.9]">
                  Our team of dedicated hospitality professionals is committed to exceeding expectations — because at The Royal Hawk, excellence isn't a standard, it's a promise.
                </p>
              </div>

              {/* Quote */}
              <div className="my-8 pl-6 border-l-2 border-gold-400/40">
                <p className="font-cormorant text-xl italic text-hawk-cream/75 leading-relaxed">
                  "A cool and serene environment — kudos to the team for putting up this place."
                </p>
                <p className="font-montserrat text-[11px] text-gold-400/70 mt-2 tracking-[0.2em] uppercase">
                  — Elliot Edudzi, Guest Review
                </p>
              </div>

              {/* Values grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {values.map((v, i) => (
                  <motion.div
                    key={v.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="p-4 border border-white/[0.06] hover:border-gold-400/25 transition-colors duration-300"
                  >
                    <p className="font-cormorant text-lg text-gold-400/90 font-medium mb-1">
                      {v.label}
                    </p>
                    <p className="font-montserrat text-[11px] text-hawk-muted leading-relaxed">
                      {v.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
})
