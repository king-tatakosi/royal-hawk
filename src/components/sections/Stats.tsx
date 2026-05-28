import { memo } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { number: '24+', label: 'Luxury Suites', sub: 'Fully appointed rooms' },
  { number: '5★', label: 'Guest Rating', sub: 'Consistently reviewed' },
  { number: '∞', label: 'Pool Access', sub: 'Olympic-size outdoor pool' },
  { number: '24/7', label: 'Concierge', sub: 'At your service always' },
]

export default memo(function Stats() {
  return (
    <section className="bg-hawk-dark border-y border-white/[0.05]">
      <div className="container-max">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.05]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col items-center justify-center py-10 px-6 text-center group"
            >
              <span className="font-cormorant text-4xl sm:text-5xl font-semibold text-gradient-gold leading-none mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </span>
              <span className="font-montserrat text-[11px] tracking-[0.3em] uppercase text-hawk-cream/70 mb-1">
                {stat.label}
              </span>
              <span className="font-montserrat text-[10px] text-hawk-muted hidden sm:block">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})
