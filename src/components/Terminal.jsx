import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const PROMPT = 'meru@dev:~$ '

const COMMANDS = {
  help: () => [
    'Available commands:',
    '',
    '  help          Show this help message',
    '  whoami        About me',
    '  ls            List sections',
    '  cd about      Navigate to about',
    '  cd projects   Navigate to projects',
    '  cat skills    Display skills',
    '  resume        Open resume',
    '  contact       Show contact info',
    '  clear         Clear terminal',
    '  sudo hire     ?',
    '',
    'Use ↑ ↓ to navigate command history.',
  ],

  whoami: () => [
    'Meru - Computer Science Engineer',
    'Full Stack Developer | Systems Thinker | Open Source Contributor',
    '',
    'I build performant, accessible software with precision.',
    'Currently focused on scalable systems and developer tools.',
  ],

  ls: () => [
    'drwxr-xr-x  about/',
    'drwxr-xr-x  projects/',
    'drwxr-xr-x  skills/',
    'drwxr-xr-x  contact/',
    '-rw-r--r--  resume.pdf',
  ],

  'cd about': () => {
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
    return ['Navigating to about...']
  },

  'cd projects': () => {
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
    return ['Navigating to projects...']
  },

  'cat skills': () => [
    'Languages     JavaScript, TypeScript, Python, Rust, Go, Java, C++',
    'Frontend      React, Next.js, Vue.js, Tailwind CSS, Framer Motion',
    'Backend       Node.js, Express, FastAPI, PostgreSQL, MongoDB, Redis',
    'Tools         Git, Docker, AWS, Linux, Neovim, CI/CD, Terraform',
  ],

  resume: () => {
    setTimeout(() => {
      const link = document.createElement('a')
      link.href = '/src/docs/resume.pdf'
      link.download = 'resume.pdf'
      link.click()
    }, 300)
    return ['Downloading resume...']
  },

  contact: () => [
    'Email     heudimeru17@gmail.com',
    'GitHub    github.com/benhur17',
    'LinkedIn  linkedin.com/in/Heudigwangbe Meru',
    'Instagram instagram.com/heudi_meru',
    '',
    'Feel free to reach out!',
  ],

  'sudo hire': () => [
    '',
    '✓ Permission granted.',
    '',
    "Let's build something great together.",
    '→ heudimeru17@gmail.com',
    '',
  ],
}

export default function Terminal() {
  const [lines, setLines] = useState([
    'booting system...',
    'loading modules...',
    'ready.',
    '',
    'Type "help" to begin.',
    '',
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isAnimating, setIsAnimating] = useState(false)

  const containerRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [lines, scrollToBottom])

  const typeOutput = useCallback(async (outputLines) => {
    setIsAnimating(true)
    for (const line of outputLines) {
      await new Promise((resolve) => setTimeout(resolve, 20))
      setLines((prev) => [...prev, line])
    }
    setLines((prev) => [...prev, ''])
    setIsAnimating(false)
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (isAnimating) return

      const trimmed = input.trim().toLowerCase()

      setLines((prev) => [...prev, PROMPT + input])
      setInput('')

      if (!trimmed) {
        setLines((prev) => [...prev, ''])
        return
      }

      setHistory((prev) => [...prev, trimmed])
      setHistoryIndex(-1)

      if (trimmed === 'clear') {
        setLines([])
        return
      }

      const handler = COMMANDS[trimmed]

      if (handler) {
        typeOutput(handler())
      } else {
        typeOutput([
          `command not found: ${trimmed}`,
          'Type "help" for available commands.',
        ])
      }
    },
    [input, isAnimating, typeOutput]
  )

  const handleKeyDown = useCallback(
    (e) => {
      if (isAnimating) {
        e.preventDefault()
        return
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (!history.length) return

        const newIndex =
          historyIndex === -1
            ? history.length - 1
            : Math.max(0, historyIndex - 1)

        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (historyIndex === -1) return

        const newIndex = historyIndex + 1

        if (newIndex >= history.length) {
          setHistoryIndex(-1)
          setInput('')
        } else {
          setHistoryIndex(newIndex)
          setInput(history[newIndex])
        }
      }
    },
    [history, historyIndex, isAnimating]
  )

  const focusInput = () => inputRef.current?.focus()

  return (
    <SectionWrapper id="terminal">
      <SectionHeader label="// terminal" title="Interactive Shell" />
      <br />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="w-full flex justify-center"
      >
        <div className="w-full max-w-[900px]">

          {/* Terminal Window */}
          <div className="rounded-lg border border-white/[0.06] bg-[#0c0c0c] overflow-hidden border-glow-green">

            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
              </div>
              <span className="font-mono text-[11px] text-white/25 tracking-wide">
                terminal - bash
              </span>
              <div className="w-[52px]" />
            </div>

            {/* Body */}
            <div
              ref={containerRef}
              onClick={focusInput}
              className="
                px-4 sm:px-5
                py-4
                h-[240px]
                sm:h-[320px]
                md:h-[420px]
                lg:h-[480px]
                overflow-y-auto
                font-mono
                text-[11px] sm:text-xs
                leading-6
                cursor-text
              "
            >
              {lines.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap break-words">
                  {line.startsWith(PROMPT) ? (
                    <>
                      <span className="text-[#00ff88]/80">meru</span>
                      <span className="text-white/25">@</span>
                      <span className="text-white/50">dev</span>
                      <span className="text-white/25">:</span>
                      <span className="text-white/40">~</span>
                      <span className="text-white/25">$ </span>
                      <span className="text-white/75">
                        {line.slice(PROMPT.length)}
                      </span>
                    </>
                  ) : (
                    <span className="text-white/45">{line}</span>
                  )}
                </div>
              ))}

              {/* Input */}
              <div className="flex items-center">
                <span className="text-[#00ff88]/80">meru</span>
                <span className="text-white/25">@</span>
                <span className="text-white/50">dev</span>
                <span className="text-white/25">:</span>
                <span className="text-white/40">~</span>
                <span className="text-white/25">$ </span>

                <form onSubmit={handleSubmit} className="flex-1">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isAnimating}
                    autoComplete="off"
                    spellCheck="false"
                    className="w-full bg-transparent outline-none text-white/90 caret-[#00ff88]"
                  />
                </form>

                <span className="ml-1 w-[6px] h-[14px] bg-[#00ff88]/80 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Hint */}
          <p className="font-mono text-[11px] text-white/20 mt-4 text-center tracking-wide">
            try: <span className="text-white/30">help</span> · <span className="text-white/30">whoami</span> · <span className="text-white/30">cat skills</span> · <span className="text-white/30">sudo hire</span>
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}