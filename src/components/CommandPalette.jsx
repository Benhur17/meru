import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const commands = [
  { label: 'Go to About', section: 'about', keys: 'A' },
  { label: 'Go to Projects', section: 'projects', keys: 'P' },
  { label: 'Go to Terminal', section: 'terminal', keys: 'T' },
  { label: 'Go to Skills', section: 'skills', keys: 'S' },
  { label: 'Go to Contact', section: 'contact', keys: 'C' },
  { label: 'Back to Top', section: 'hero', keys: 'H' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  )

  const handleNavigate = useCallback((section) => {
    setOpen(false)
    setQuery('')
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
        setQuery('')
      }
      if (e.key === 'Escape') {
        setOpen(false)
        setQuery('')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            onClick={() => { setOpen(false); setQuery('') }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[70]"
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.12 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-[#0c0c0c] border border-white/[0.06] rounded-lg overflow-hidden z-[80] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border-glow-green"
          >
            <div className="flex items-center px-4 py-3 border-b border-white/[0.06] gap-3">
              <svg
                className="w-4 h-4 text-white/20 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Navigate to..."
                className="flex-1 bg-transparent text-sm text-white/90 outline-none placeholder:text-white/25 font-mono"
              />
              <kbd className="text-[10px] font-mono text-white/25 bg-white/[0.03] px-1.5 py-0.5 rounded border border-white/[0.06]">
                ESC
              </kbd>
            </div>

            <div className="max-h-60 overflow-y-auto py-1.5">
              {filtered.length === 0 ? (
                <p className="text-sm text-white/30 text-center py-6 font-mono">
                  No results found.
                </p>
              ) : (
                filtered.map((cmd) => (
                  <button
                    key={cmd.section}
                    onClick={() => handleNavigate(cmd.section)}
                    className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-[#00ff88]/[0.04] transition-colors duration-150"
                  >
                    <span className="text-sm text-white/70">{cmd.label}</span>
                    <kbd className="text-[10px] font-mono text-white/20 bg-white/[0.03] px-1.5 py-0.5 rounded border border-white/[0.06]">
                      {cmd.keys}
                    </kbd>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
