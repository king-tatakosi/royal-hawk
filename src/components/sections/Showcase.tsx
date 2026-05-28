import { memo } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

// Defined outside so these objects are never recreated on re-render
const amenities = [
  { icon: '◈', label: 'Olympic Pool', desc: 'Outdoor leisure & relaxation' },
  { icon: '◇', label: 'Luxury Rooms', desc: '24+ premium appointed suites' },
  { icon: '◉', label: 'The Lounge', desc: 'Exclusive underground venue' },
  { icon: '◎', label: 'Free Parking', desc: 'Secured on-site parking' },
]

const gallery = [
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
    caption: 'Grand Exterior',
    sub: 'Iconic architecture',
    className: 'col-span-2 row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=700&q=80',
    caption: 'Olympic Pool',
    sub: 'Outdoor leisure',
    className: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=700&q=80',
    caption: 'Luxury Suites',
    sub: 'Premium comfort',
    className: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=700&q=80',
    caption: 'The Lounge',
    sub: 'Dramatic ambiance',
    className: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80',
    caption: 'Fine Dining',
    sub: 'Culinary excellence',
    className: '',
  },
]

export default memo(function Showcase() {
  return (
    <section id="showcase" className="section-padding bg-hawk-black">
      <div className="container-max px-4 sm:px-6 lg:px-10">
        <SectionHeader
          tag="A World of Refinement"
          title="Every Corner, a Story"
          subtitle="From our cinematic exterior to the intimate warmth of our suites — The Royal Hawk Hotel is designed to leave an impression."
        />

        {/* Gallery grid */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {gallery.map((item, i) => (
            <motion.div
              key={item.caption}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${item.className} ${
                i === 0 ? 'min-h-[320px] sm:min-h-[420px]' : 'min-h-[180px] sm:min-h-[200px]'
              }`}
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.caption}
                className="img-cover transition-transform duration-700 group-hover:scale-110"
                loading={i === 0 ? 'eager' : 'lazy'}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-hawk-black/80 via-hawk-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-400" />

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-gold-400/0 group-hover:border-gold-400/30 transition-all duration-400" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <p className="font-cormorant text-lg sm:text-xl text-hawk-cream font-medium leading-tight">
                  {item.caption}
                </p>
                <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold-400/80 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {amenities.map((amenity, i) => (
            <motion.div
              key={amenity.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="glassmorphism p-5 text-center group hover:border-gold-400/30 transition-all duration-300 cursor-default"
            >
              <div className="font-cormorant text-3xl text-gold-400/70 group-hover:text-gold-400 transition-colors duration-300 mb-3">
                {amenity.icon}
              </div>
              <div className="font-montserrat text-[11px] tracking-[0.25em] uppercase text-hawk-cream/80 mb-1.5">
                {amenity.label}
              </div>
              <div className="font-montserrat text-[11px] text-hawk-muted leading-relaxed">
                {amenity.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
})
