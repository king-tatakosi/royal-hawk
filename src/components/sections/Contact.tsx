import { useState, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

// Defined outside — never recreated on re-render
const INPUT_CLASS =
  'w-full bg-hawk-elevated border border-white/[0.08] text-hawk-cream/85 font-montserrat text-[12px] px-4 py-3 placeholder-hawk-muted/60 focus:outline-none focus:border-gold-400/50 focus:bg-hawk-elevated/80 transition-all duration-300'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '0556 668 965',
    href: 'tel:0556668965',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'theroyalhawk@gmail.com',
    href: 'mailto:theroyalhawk@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'N78 Dzablui Kumah St, Kpando',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Check-in / Out',
    value: 'Check-in: 2PM · Check-out: 12PM',
    href: null,
  },
]

const roomOptions = ['Deluxe Room', 'Executive Suite', 'Presidential Suite', 'Event Space']

export default memo(function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '',
    room: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  // Single stable handler for all fields — uses functional update to avoid stale closure
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setForm((prev) => ({ ...prev, [name]: value }))
    },
    []
  )

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }, [])

  return (
    <section id="contact" className="section-padding bg-hawk-dark">
      <div className="container-max px-4 sm:px-6 lg:px-10">
        <SectionHeader
          tag="Get In Touch"
          title="Reserve Your Stay"
          subtitle="Ready to experience The Royal Hawk? Reach out and our team will craft your perfect visit."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="space-y-2 mb-8">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-4 p-4 border border-white/[0.05] hover:border-gold-400/20 transition-all duration-300 group">
                    <div className="w-9 h-9 border border-gold-400/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold-400/60 transition-colors duration-300">
                      <Icon className="w-4 h-4 text-gold-400/70 group-hover:text-gold-400 transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-hawk-muted mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-montserrat text-[13px] text-hawk-cream/75">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )

                return item.href && item.href !== '#' ? (
                  <a key={item.label} href={item.href} className="block cursor-pointer">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>

            {/* Social links */}
            <div>
              <p className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-gold-400/70 mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'Twitter'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="font-montserrat text-[10px] tracking-[0.2em] uppercase px-4 py-2 border border-white/[0.1] text-hawk-cream/50 hover:border-gold-400/40 hover:text-gold-400 transition-all duration-300 cursor-pointer"
                    aria-label={`Follow us on ${platform}`}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Booking form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 border border-gold-400/20 glassmorphism"
              >
                <div className="w-14 h-14 border border-gold-400/50 flex items-center justify-center mb-5">
                  <Send className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-cormorant text-2xl text-hawk-cream mb-3">
                  Request Received
                </h3>
                <p className="font-montserrat text-[12px] text-hawk-muted max-w-sm leading-relaxed">
                  Thank you for reaching out. Our reservations team will contact you within 24 hours to confirm your booking.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-montserrat text-[10px] tracking-[0.3em] uppercase text-hawk-muted mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={INPUT_CLASS}
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-montserrat text-[10px] tracking-[0.3em] uppercase text-hawk-muted mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={INPUT_CLASS}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block font-montserrat text-[10px] tracking-[0.3em] uppercase text-hawk-muted mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={INPUT_CLASS}
                      placeholder="0XX XXX XXXX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="room" className="block font-montserrat text-[10px] tracking-[0.3em] uppercase text-hawk-muted mb-2">
                      Room Type
                    </label>
                    <select
                      id="room"
                      name="room"
                      className={`${INPUT_CLASS} cursor-pointer appearance-none`}
                      value={form.room}
                      onChange={handleChange}
                    >
                      <option value="" className="bg-hawk-elevated">Select a room type</option>
                      {roomOptions.map((r) => (
                        <option key={r} value={r} className="bg-hawk-elevated">
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="checkin" className="block font-montserrat text-[10px] tracking-[0.3em] uppercase text-hawk-muted mb-2">
                      Check-in Date
                    </label>
                    <input
                      id="checkin"
                      name="checkin"
                      type="date"
                      className={INPUT_CLASS}
                      value={form.checkin}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="checkout" className="block font-montserrat text-[10px] tracking-[0.3em] uppercase text-hawk-muted mb-2">
                      Check-out Date
                    </label>
                    <input
                      id="checkout"
                      name="checkout"
                      type="date"
                      className={INPUT_CLASS}
                      value={form.checkout}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block font-montserrat text-[10px] tracking-[0.3em] uppercase text-hawk-muted mb-2">
                      Guests
                    </label>
                    <input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="20"
                      className={INPUT_CLASS}
                      placeholder="1"
                      value={form.guests}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-montserrat text-[10px] tracking-[0.3em] uppercase text-hawk-muted mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${INPUT_CLASS} resize-none`}
                    placeholder="Any special requests or preferences..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-montserrat text-[11px] tracking-[0.35em] uppercase py-4 bg-gold-400 text-hawk-black font-medium hover:bg-gold-300 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  Send Booking Request
                </button>

                <p className="font-montserrat text-[10px] text-hawk-muted text-center">
                  We respond within 24 hours. No payment required at this stage.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
})
