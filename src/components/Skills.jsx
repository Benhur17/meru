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
    items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="bg-surface border border-border rounded-xl p-6"
          >
            <h3 className="font-mono text-xs text-accent-light tracking-widest uppercase mb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-sm font-mono px-3 py-1.5 bg-white/5 text-text-muted rounded-lg hover:text-text hover:bg-white/10 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
