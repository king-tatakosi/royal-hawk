import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Showcase from './components/sections/Showcase'
import Rooms from './components/sections/Rooms'
import Experience from './components/sections/Experience'
import Testimonials from './components/sections/Testimonials'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import { useAtBottom } from './hooks/useAtBottom'

export default function App() {
  const atBottom = useAtBottom(200)

  return (
    <div className="bg-hawk-black text-hawk-cream font-montserrat">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Showcase />
        <Rooms />
        <Experience />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />

      {/* Back to top — only visible when near the bottom of the page */}
      <AnimatePresence>
        {atBottom && (
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 hover:bg-gold-400 hover:text-hawk-black transition-colors duration-300 cursor-pointer"
            aria-label="Back to top"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  )
}
