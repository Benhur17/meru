import { motion } from 'framer-motion'

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative min-h-screen flex items-center justify-center py-24 sm:py-32 px-5 sm:px-8 lg:px-12 grid-bg ${className}`}
    >
      <div className="w-full max-w-[1000px] mx-auto relative z-10">{children}</div>
    </motion.section>
  )
}
