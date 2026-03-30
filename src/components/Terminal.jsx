import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const PROMPT = 'benhur@dev:~$ '

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
    '  sudo hire     🤝',
    '',
    'Use ↑ ↓ to navigate command history.',
  ],

  whoami: () => [
    'Benhur — Computer Science Engineer',
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
    '-rw-r--r--  README.md',
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
      link.href = '/resume.pdf'
      link.download = 'Benhur_Resume.pdf'
      link.click()
    }, 300)
    return ['Downloading resume...']
  },

  contact: () => [
    'Email     benhur@example.com',
    'GitHub    github.com/benhur',
    'LinkedIn  linkedin.com/in/benhur',
    '',
    'Feel free to reach out!',
  ],

  'sudo hire': () => [
    '',
    '  ✓ Permission granted.',
    '',
    "  Let's build something great together.",
    '  → benhur@example.com',
    '',
  ],
}

export default function Terminal() {
  const [lines, setLines] = useState([
    'Welcome to benhur.dev — Type "help" to get started.',
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

  const typeOutput = useCallback(
    async (outputLines) => {
      setIsAnimating(true)
      for (const line of outputLines) {
        await new Promise((resolve) => setTimeout(resolve, 30))
        setLines((prev) => [...prev, line])
      }
      setLines((prev) => [...prev, ''])
      setIsAnimating(false)
    },
    []
  )

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (isAnimating) return

      const trimmed = input.trim().toLowerCase()
      setLines((prev) => [...prev, PROMPT + input])
      setInput('')

      if (trimmed === '') {
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
        const output = handler()
        typeOutput(output)
      } else {
        typeOutput([`command not found: ${trimmed}`, 'Type "help" for available commands.'])
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
        if (history.length === 0) return
        const newIndex =
          historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      } else if (e.key === 'ArrowDown') {
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto"
      >
        {/* Title bar */}
        <div className="bg-[#1a1a1a] border border-[#333] border-b-0 rounded-t-lg px-4 py-2.5 flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-xs text-[#666] ml-3 select-none">
            benhur@dev: ~
          </span>
        </div>

        {/* Terminal body */}
        <div
          ref={containerRef}
          onClick={focusInput}
          className="bg-black border border-[#333] border-t-0 rounded-b-lg p-4 h-72 sm:h-96 lg:h-[500px] overflow-y-auto cursor-text"
        >
          {lines.map((line, i) => (
            <div key={i} className="font-mono text-xs sm:text-sm leading-6">
              {line.startsWith(PROMPT) ? (
                <>
                  <span className="text-[#4ade80]">benhur</span>
                  <span className="text-[#666]">@</span>
                  <span className="text-[#38bdf8]">dev</span>
                  <span className="text-[#666]">:</span>
                  <span className="text-[#a78bfa]">~</span>
                  <span className="text-[#666]">$ </span>
                  <span className="text-[#e5e5e5]">
                    {line.slice(PROMPT.length)}
                  </span>
                </>
              ) : (
                <span className="text-[#999]">{line}</span>
              )}
            </div>
          ))}

          {/* Input line */}
          <div className="flex items-center font-mono text-xs sm:text-sm leading-6">
            <span className="text-[#4ade80]">benhur</span>
            <span className="text-[#666]">@</span>
            <span className="text-[#38bdf8]">dev</span>
            <span className="text-[#666]">:</span>
            <span className="text-[#a78bfa]">~</span>
            <span className="text-[#666]">$ </span>
            <form onSubmit={handleSubmit} className="flex-1 flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isAnimating}
                autoComplete="off"
                spellCheck="false"
                className="flex-1 bg-transparent text-[#e5e5e5] outline-none font-mono text-xs sm:text-sm caret-[#4ade80]"
              />
            </form>
            <span className="w-2 h-4 bg-[#4ade80] animate-pulse ml-0.5" />
          </div>
        </div>

        <p className="font-mono text-xs text-text-muted mt-4 text-center">
          Try: help, whoami, cat skills, sudo hire
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
