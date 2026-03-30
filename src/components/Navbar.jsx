import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Terminal', href: '#terminal' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
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
        transition={{ duration: 0.35 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="
          w-full h-14 flex items-center justify-between
          px-5 sm:px-8 lg:px-12
          max-w-[1000px] mx-auto
        ">

          {/* Logo */}
          <a
            href="#hero"
            className="font-mono text-[11px] tracking-wider text-white/70 hover:text-white/90 transition-colors duration-200"
          >
            <span className="text-[#00ff88]/60">meru</span>
            <span className="text-white/25">@dev:</span>
            <span className="text-white/40">~</span>
            <span className="ml-1 w-[6px] inline-block text-[#00ff88]/80 animate-pulse">█</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[13px] text-white/45 hover:text-white/90 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#00ff88]/40 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex text-[11px] font-mono px-4 py-1.5 border border-[#00ff88]/15 text-[#00ff88]/70 hover:text-[#00ff88] hover:border-[#00ff88]/30 hover:bg-[#00ff88]/5 transition-all duration-200"
          >
            contact()
          </a>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-7 h-7 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`w-5 h-px bg-white/70 transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`w-5 h-px bg-white/70 transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="fixed top-14 left-0 right-0 z-40 flex justify-center px-5"
          >
            <div className="
              w-full max-w-sm
              bg-[#0a0a0a]/95 backdrop-blur-xl
              border border-white/[0.06]
              rounded-lg
              p-5
              flex flex-col gap-4
              font-mono text-sm
            ">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/55 hover:text-[#00ff88]/80 transition-colors duration-200"
                >
                  <span className="text-[#00ff88]/40">{'>'}</span> {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-2 border border-[#00ff88]/15 text-[#00ff88]/70 text-center hover:bg-[#00ff88]/5 transition-all duration-200"
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