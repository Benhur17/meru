import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const projects = [
  {
    title: 'CloudSync',
    description:
      'Real-time file synchronization platform with conflict resolution and end-to-end encryption.',
    tech: ['React', 'Node.js', 'WebSocket', 'AWS S3'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'DevMetrics',
    description:
      'Analytics dashboard for developer productivity. Tracks commits, PRs, and code review patterns.',
    tech: ['Next.js', 'PostgreSQL', 'D3.js', 'GitHub API'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'TermFlow',
    description:
      'Modern terminal emulator with AI-powered command suggestions and custom themes.',
    tech: ['Rust', 'TypeScript', 'Electron', 'WebGL'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'PacketViz',
    description:
      'Network packet visualization tool for debugging and monitoring traffic in real time.',
    tech: ['Python', 'React', 'WebSocket', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader label="// projects" title="Selected Work" />
      <br />

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[750px]">

          {/* top line */}
          <p className="font-mono text-[11px] text-white/30 mb-6 text-center tracking-wide">
            <span className="text-[#00ff88]/40">meru@dev</span>
            <span className="text-white/20">:</span>
            <span className="text-white/25">~$</span>
            <span className="text-white/40"> ls projects/</span>
          </p>

          <div className="border-t border-white/[0.06]">

            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
                className="
                  py-6
                  border-b border-white/[0.06]
                  group
                "
              >
                {/* header line */}
                <div className="flex items-center justify-between mb-2.5">

                  <h3 className="
                    font-mono text-sm sm:text-base
                    text-white/85
                    group-hover:text-[#00ff88]/80
                    transition-colors duration-200
                  ">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-4 text-[11px] font-mono">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-[#00ff88]/60 transition-colors duration-200"
                    >
                      [code]
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-[#00ff88]/60 transition-colors duration-200"
                    >
                      [live]
                    </a>
                  </div>
                </div>

                {/* description */}
                <p className="text-sm text-white/45 leading-relaxed mb-3 max-w-[600px]">
                  {project.description}
                </p>

                {/* tech line */}
                <div className="font-mono text-[11px] text-white/25 tracking-wide">
                  {project.tech.join(' · ')}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}