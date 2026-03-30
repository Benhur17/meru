import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const infoItems = [
  { label: 'Experience', value: '3+ Years' },
  { label: 'Focus', value: 'Full Stack Systems' },
  { label: 'Education', value: 'Computer Science' },
  { label: 'Location', value: 'India' },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader label="// about" title="Who I Am" />

      {/* 🔥 Centered Content */}
      <div className="
        w-full 
        flex flex-col items-center
        px-4 sm:px-6
        mb-14 sm:mb-16
      ">
        <div className="w-full max-w-[720px] text-center">

          {/* terminal hint */}
          <p className="font-mono text-xs text-white/40 mb-6">
            <span className="text-white/30">meru@dev:~$</span> cat about.txt
          </p>

          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-5">
            I design and build systems that are fast, reliable, and easy to use.
            Every detail is intentional, from architecture to interaction.
          </p>

          <p className="text-sm sm:text-base text-white/60 leading-relaxed">
            Computer Science engineer focused on clean structure, scalable design,
            and developer experience. I care about how software feels, not just how it works.
          </p>
        </div>
      </div>

      {/* 🔥 Centered Grid */}
      <div className="w-full flex justify-center px-4 sm:px-6">
        <div className="
          w-full max-w-[820px]
          grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4
          gap-3 sm:gap-4 md:gap-5
        ">
          {infoItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="
                border border-white/10
                bg-white/[0.02]
                backdrop-blur
                rounded-lg
                px-4 py-4 sm:px-5 sm:py-5
                text-center
                hover:border-white/20
                transition
              "
            >
              <p className="font-mono text-[10px] sm:text-[11px] text-white/40 uppercase tracking-wider mb-1.5">
                {item.label}
              </p>

              <p className="text-sm sm:text-base text-white/90 font-medium">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}