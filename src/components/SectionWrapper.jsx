import { motion } from 'framer-motion'

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="w-full max-w-5xl mx-auto">{children}</div>
    </motion.section>
  )
}
