import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Full Stack Engineer',
  'Digital Craftsman',
  'Clean Code Advocate',
  'Performance-Driven Developer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.slice(0, text.length - 1)
            : currentRole.slice(0, text.length + 1)
        )
      }, isDeleting ? 35 : 60)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="
        min-h-screen flex items-center justify-center
        px-5 sm:px-8 lg:px-12
        relative overflow-hidden grid-bg
      "
    >
      {/* Radial glow from center */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,136,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="w-full max-w-[900px] mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >

          {/* Terminal-style intro */}
          <p className="font-mono text-[11px] text-white/40 mb-8 tracking-wide">
            <span className="text-[#00ff88]/50">meru@dev</span>
            <span className="text-white/25">:</span>
            <span className="text-white/30">~$</span>
            <span className="text-white/50"> whoami</span>
          </p>

          {/* Name */}
          <h1 className="
            text-4xl sm:text-6xl lg:text-7xl
            font-semibold tracking-tight text-white
            mb-6 leading-[1.1]
          ">
            Heudigwangbe Meru
          </h1>

          {/* Role (typing effect) */}
          <div className="h-8 sm:h-10 flex items-center justify-center mb-12">
            <span className="font-mono text-sm sm:text-base text-[#00ff88]/70">
              {text}
            </span>
            <span className="ml-0.5 w-[2px] h-5 bg-[#00ff88]/80 animate-pulse" />
          </div>

          {/* CTA (command style) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

            <a
              href="#projects"
              className="
                font-mono text-sm
                px-6 py-2.5
                border border-[#00ff88]/20
                text-[#00ff88]/80
                hover:text-[#00ff88] hover:border-[#00ff88]/40 hover:bg-[#00ff88]/5
                transition-all duration-200
              "
            >
              {'> view_projects'}
            </a>

            <a
              href="#terminal"
              className="
                font-mono text-sm
                px-6 py-2.5
                border border-white/8
                text-white/50
                hover:text-white/80 hover:border-white/15
                transition-all duration-200
              "
            >
              {'> open_terminal'}
            </a>

          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[#00ff88]/25 font-mono text-[11px] tracking-wider"
          >
            ↓ scroll
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}