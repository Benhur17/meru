import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const skillCategories = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Rust', 'Go', 'Java', 'C++'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vue', 'Tailwind', 'Framer Motion', 'Three.js'],
  },
  {
    title: 'Backend',
    items: ['Node', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'Linux', 'Neovim', 'CI/CD', 'Terraform'],
  },
]

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader label="// skills" title="Tech Stack" />
      <br />

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[800px]">

          <div className="border-t border-white/[0.06]" />

          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              className="
                grid grid-cols-1 sm:grid-cols-[120px_1fr]
                gap-3 sm:gap-8
                py-5 sm:py-6
                border-b border-white/[0.06]
              "
            >
              {/* left label */}
              <div className="font-mono text-[11px] text-[#00ff88]/40 uppercase tracking-[0.15em]">
                {cat.title}
              </div>

              {/* right content */}
              <div className="flex flex-wrap gap-x-4 gap-y-2.5 text-sm text-white/60">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="hover:text-white/90 transition-colors duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </SectionWrapper>
  )
}