import { memo } from 'react'
import { motion } from 'framer-motion'

interface Props {
  tag: string
  title: string
  subtitle?: string
  light?: boolean
  center?: boolean
}

const SectionHeader = memo(function SectionHeader({ tag, title, subtitle, light = false, center = true }: Props) {
  return (
    <div className={center ? 'text-center' : ''}>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-montserrat text-[11px] tracking-[0.5em] uppercase text-gold-400 mb-3"
      >
        {tag}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4 ${
          light ? 'text-hawk-black' : 'text-hawk-cream'
        }`}
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`h-px w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent ${center ? 'mx-auto' : ''} mb-5`}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className={`font-montserrat text-sm font-light leading-relaxed max-w-xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-hawk-black/60' : 'text-hawk-cream/50'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
})

export default SectionHeader
