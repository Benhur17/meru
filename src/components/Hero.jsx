import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Full Stack Developer',
  'Systems Thinker',
  'Open Source Contributor',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentRole.slice(0, text.length - 1)
              : currentRole.slice(0, text.length + 1)
          )
        },
        isDeleting ? 40 : 80
      )
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-neon-purple/5 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-xs sm:text-sm text-accent-light mb-6 tracking-widest uppercase"
          >
            Hello, World — I&apos;m
          </motion.p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text mb-6">
            Benhur
          </h1>

          <div className="h-8 sm:h-10 flex items-center justify-center mb-10">
            <span className="font-mono text-base sm:text-lg text-text-muted">
              {text}
            </span>
            <span className="inline-block w-px h-5 sm:h-6 bg-accent-light ml-1 animate-pulse" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 text-sm font-medium bg-accent hover:bg-accent-light text-white rounded-full transition-all duration-200"
            >
              View Work
            </a>
            <a
              href="#terminal"
              className="px-6 py-3 text-sm font-mono border border-white/10 text-text-muted hover:text-text hover:border-white/20 rounded-full transition-all duration-200"
            >
              {'> terminal'}
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
