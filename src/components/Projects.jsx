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
      'A modern terminal emulator with AI-powered command suggestions and custom themes.',
    tech: ['Rust', 'TypeScript', 'Electron', 'WebGL'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'PacketViz',
    description:
      'Network packet visualization tool for debugging and monitoring network traffic in real-time.',
    tech: ['Python', 'React', 'WebSocket', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Scriptly',
    description:
      'Collaborative code editor with live cursors, voice chat, and integrated CI/CD pipeline runner.',
    tech: ['Vue.js', 'Go', 'Redis', 'WebRTC'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'InfraGraph',
    description:
      'Infrastructure-as-code visualizer that renders cloud architecture from Terraform configs.',
    tech: ['TypeScript', 'Svelte', 'AWS CDK', 'GraphQL'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 17L17 7M17 7H7M17 7v10"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader label="// projects" title="Selected Work" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="group bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-text group-hover:text-accent-light transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text transition-colors"
                  aria-label={`${project.title} GitHub`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text transition-colors"
                  aria-label={`${project.title} live demo`}
                >
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <p className="text-sm text-text-muted mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 bg-white/5 text-text-muted rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
