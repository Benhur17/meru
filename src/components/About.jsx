import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const infoItems = [
  { label: 'Experience', value: '3+ Years' },
  { label: 'Focus', value: 'Full Stack' },
  { label: 'Education', value: 'CS Engineer' },
  { label: 'Location', value: 'India' },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader label="// about" title="Who I Am" />

      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-lg sm:text-xl text-text font-medium mb-6 leading-relaxed">
          I build things that live on the internet - performant, accessible, and
          crafted with precision.
        </p>
        <p className="text-sm sm:text-base text-text-muted leading-relaxed">
          Computer Science Engineer passionate about clean architecture, elegant
          solutions, and developer experience. I believe great software is
          invisible — it just works.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {infoItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="bg-surface border border-border rounded-xl p-6 text-center"
          >
            <p className="font-mono text-xs text-text-muted mb-2 uppercase tracking-wider">
              {item.label}
            </p>
            <p className="text-sm sm:text-base font-semibold text-text">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
