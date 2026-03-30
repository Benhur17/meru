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
      }, isDeleting ? 40 : 70)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="
        min-h-screen flex items-center justify-center
        px-4 sm:px-6 md:px-[clamp(1rem,4vw,2.5rem)]
        relative overflow-hidden
      "
    >
      {/* subtle grid / system background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="w-full max-w-[900px] mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          {/* Terminal-style intro */}
          <p className="font-mono text-xs text-white/50 mb-6">
            <span className="text-white/40">meru@dev:~$</span> whoami
          </p>

          {/* Name */}
          <h1 className="
            text-4xl sm:text-6xl lg:text-7xl
            font-semibold tracking-tight text-white
            mb-6
          ">
            Benhur
          </h1>

          {/* Role (typing effect) */}
          <div className="h-8 sm:h-10 flex items-center justify-center mb-10">
            <span className="font-mono text-sm sm:text-base text-white/70">
              {text}
            </span>
            <span className="ml-1 w-[1px] h-5 bg-white animate-pulse" />
          </div>

          {/* CTA (command style) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

            <a
              href="#projects"
              className="
                font-mono text-sm
                px-5 py-2.5
                border border-white/10
                text-white/80
                hover:text-white hover:border-white/20
                transition
              "
            >
              {'> view_projects'}
            </a>

            <a
              href="#terminal"
              className="
                font-mono text-sm
                px-5 py-2.5
                border border-white/10
                text-white/60
                hover:text-white hover:border-white/20
                transition
              "
            >
              {'> open_terminal'}
            </a>

          </div>
        </motion.div>

        {/* Scroll hint (cleaner) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/30 font-mono text-xs"
          >
            ↓ scroll
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}