import { motion, useScroll, useSpring } from 'framer-motion'
import { useMemo } from 'react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  })

  const binary = useMemo(() => {
    return Array.from({ length: 300 }, () =>
      Math.random() > 0.5 ? '1' : '0'
    ).join(' ')
  }, [])

  return (
    <>
      <style>{`
        .binary-line {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 2.5px;
          white-space: nowrap;
        }

        .track {
          color: rgba(255,255,255,0.04);
        }

        .progress-text {
          color: rgba(0, 255, 136, 0.6);
        }
      `}</style>

      {/* Background track */}
      <div className="fixed top-0 left-0 right-0 overflow-hidden h-[16px] z-[59]">
        <div className="binary-line track">
          {binary}
        </div>
      </div>

      {/* Progress reveal */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 origin-left h-[16px] overflow-hidden z-[61]"
      >
        <div className="binary-line progress-text">
          {binary}
        </div>
      </motion.div>
    </>
  )
}