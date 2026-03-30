import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const links = [
  {
    label: 'Email',
    value: 'benhur@example.com',
    href: 'mailto:benhur@example.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/benhur',
    href: 'https://github.com/benhur',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/benhur',
    href: 'https://linkedin.com/in/benhur',
  },
  {
    label: 'Resume',
    value: 'Download PDF',
    href: '/resume.pdf',
    download: true,
  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeader label="// contact" title="Get In Touch" />

      <div className="text-center max-w-xl mx-auto mb-16">
        <p className="text-sm sm:text-base text-text-muted leading-relaxed">
          I&apos;m always open to new opportunities, collaborations, or just a good
          conversation about technology. Feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.download ? undefined : '_blank'}
            rel={link.download ? undefined : 'noopener noreferrer'}
            download={link.download ? true : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group bg-surface border border-border rounded-xl p-5 flex items-center justify-between hover:border-accent/30 transition-all duration-300"
          >
            <div>
              <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
                {link.label}
              </p>
              <p className="text-sm text-text group-hover:text-accent-light transition-colors">
                {link.value}
              </p>
            </div>
            <svg
              className="w-4 h-4 text-text-muted group-hover:text-accent-light transition-colors"
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
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center pt-16 pb-8 border-t border-border">
        <p className="font-mono text-xs text-text-muted">
          Designed & built by Benhur — {new Date().getFullYear()}
        </p>
      </div>
    </SectionWrapper>
  )
}
