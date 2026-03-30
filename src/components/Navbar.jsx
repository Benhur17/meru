import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/70 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        {/* ✅ FIXED container */}
        <div className="
          w-full h-14 flex items-center justify-between
          px-4 sm:px-6 md:px-[clamp(1rem,4vw,2.5rem)]
          max-w-none md:max-w-[1200px] md:mx-auto
        ">

          {/* Logo */}
          <a
            href="#hero"
            className="font-mono text-[11px] tracking-wider text-white/80"
          >
            <span className="opacity-60">meru@dev:</span>
            ~
            <span className="ml-1 animate-pulse">█</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-white/60 hover:text-white transition group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-white/70 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex text-xs font-mono px-4 py-2 border border-white/10 text-white/80 hover:bg-white/5 transition"
          >
            contact()
          </a>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-7 h-7 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`w-5 h-px bg-white transition ${mobileOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`w-5 h-px bg-white transition ${mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* ✅ MOBILE MENU (FIXED) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed top-14 left-0 right-0 z-40 flex justify-center px-4"
          >
            {/* 🔥 centered panel instead of stretched */}
            <div className="
              w-full max-w-sm
              bg-black/95 backdrop-blur-xl
              border border-white/10
              rounded-xl
              p-5
              flex flex-col gap-4
              font-mono text-sm
            ">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 hover:text-white transition"
                >
                  {'> '} {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-2 border border-white/10 text-white/80 text-center rounded"
              >
                contact()
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}