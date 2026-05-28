import { memo } from 'react'
import { motion } from 'framer-motion'
import { Wifi, Wind, Tv, Bath, Coffee, Star } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const rooms = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    tagline: 'Comfort & Warmth',
    price: 'GHS 200',
    per: 'per night',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    features: [],
    amenityIcons: [Wifi, Wind, Tv, Bath],
    featured: false,
    badge: null,
    description: 'Warm wood-furnished interiors with blush-toned walls and premium bedding for a restful retreat.',
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    tagline: 'Space & Sophistication',
    price: 'GHS 350',
    per: 'per night',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    features: [],
    amenityIcons: [Wifi, Wind, Tv],
    featured: true,
    badge: 'Most Popular',
    description: 'Expansive living area with dedicated lounge space, premium amenities, and priority pool access.',
  },
  {
    id: 'presidential',
    name: 'Royal Penthouse',
    tagline: 'The Ultimate Luxury',
    price: 'GHS 600',
    per: 'per night',
    image: 'https://images.unsplash.com/photo-1560200353-ce0a76b1d438?auto=format&fit=crop&w=800&q=80',
    features: [],
    amenityIcons: [Wifi, Wind, Bath, Star],
    featured: false,
    badge: 'Exclusive',
    description: 'Our pinnacle of luxury — an expansive suite with private access, personal butler and bespoke dining.',
  },
]

export default memo(function Rooms() {
  return (
    <section id="rooms" className="section-padding bg-hawk-dark">
      <div className="container-max px-4 sm:px-6 lg:px-10">
        <SectionHeader
          tag="Our Accommodations"
          title="Rooms & Suites"
          subtitle="Each room is a carefully composed environment — where warmth, elegance, and modern comfort converge."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {rooms.map((room, i) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`relative flex flex-col overflow-hidden group cursor-pointer ${
                room.featured
                  ? 'border border-gold-400/35 shadow-[0_0_50px_rgba(212,175,55,0.08)]'
                  : 'border border-white/[0.06]'
              } bg-hawk-surface`}
            >
              {/* Badge */}
              {room.badge && (
                <div className={`absolute top-4 right-4 z-20 font-montserrat text-[9px] tracking-[0.3em] uppercase px-3 py-1 ${
                  room.featured
                    ? 'bg-gold-400 text-hawk-black'
                    : 'bg-hawk-surface border border-gold-400/40 text-gold-400'
                }`}>
                  {room.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={room.image}
                  alt={`${room.name} interior`}
                  className="img-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hawk-surface via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Title */}
                <div className="mb-4">
                  <p className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-gold-400/70 mb-1.5">
                    {room.tagline}
                  </p>
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-light text-hawk-cream leading-tight">
                    {room.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-montserrat text-[12px] text-hawk-muted leading-relaxed mb-5 flex-1">
                  {room.description}
                </p>

                {/* Amenity icons */}
                <div className="flex items-center gap-3 mb-4">
                  {room.amenityIcons.map((Icon, idx) => (
                    <div key={idx} className="w-7 h-7 border border-white/[0.1] flex items-center justify-center" aria-hidden="true">
                      <Icon className="w-3.5 h-3.5 text-gold-400/60" />
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gold-400/60 flex-shrink-0" aria-hidden="true" />
                      <span className="font-montserrat text-[11px] text-hawk-cream/55">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="h-px bg-white/[0.06] mb-5" />

                {/* Price + CTA */}
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-cormorant text-2xl font-semibold text-gradient-gold leading-none">
                      {room.price}
                    </span>
                    <span className="font-montserrat text-[11px] text-hawk-muted ml-1">
                      /{room.per.replace('per ', '')}
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className={`font-montserrat text-[10px] tracking-[0.25em] uppercase px-5 py-2.5 transition-all duration-300 cursor-pointer ${
                      room.featured
                        ? 'bg-gold-400 text-hawk-black hover:bg-gold-300'
                        : 'border border-gold-400/40 text-gold-400 hover:bg-gold-400 hover:text-hawk-black'
                    }`}
                  >
                    Book
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center font-montserrat text-[11px] text-hawk-muted mt-10"
        >
  
        </motion.p>
      </div>
    </section>
  )
})
