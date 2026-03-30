import { motion, useScroll, useSpring } from 'framer-motion'
import { useMemo } from 'react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    mass: 0.25,
  })

  // generate long binary string (so it fills full width)
  const binary = useMemo(() => {
    return Array.from({ length: 300 }, () =>
      Math.random() > 0.5 ? '1' : '0'
    ).join(' ')
  }, [])

  return (
    <>
      <style>{`
        .binary-line {
          font-family: monospace;
          font-size: 12px;
          letter-spacing: 3px;
          white-space: nowrap;
          color: rgba(255,255,255,0.9);
        }

        .track {
          color: rgba(255,255,255,0.08);
        }
      `}</style>

      {/* Background (faint binary track) */}
      <div className="fixed top-0 left-0 right-0 overflow-hidden h-[18px] z-[59]">
        <div className="binary-line track">
          {binary}
        </div>
      </div>

      {/* Progress (revealed binary) */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 origin-left h-[18px] overflow-hidden z-[61]"
      >
        <div className="binary-line">
          {binary}
        </div>
      </motion.div>
    </>
  )
}