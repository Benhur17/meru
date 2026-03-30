import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const links = [
  {
    label: 'email',
    value: 'heudimeru17@gmail.com',
    href: 'mailto:heudimeru17@gmail.com',
  },
  {
    label: 'github',
    value: 'github.com/benhur',
    href: 'https://github.com/benhur17',
  },
  {
    label: 'linkedin',
    value: 'linkedin.com/in/Heudigwangbe Meru',
    href: 'https://linkedin.com/in/Heudigwangbe Meru',
  },
  {
    label: 'instagram',
    value: 'instagram.com/heudi_meru',
    href: 'https://instagram.com/heudi_meru',
  },
  {
    label: 'resume',
    value: 'resume.pdf',
    href: 'src/docs/resume.pdf',
    download: true,
  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeader label="// contact" title="Get In Touch" />
      <br />

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[680px]">

          {/* terminal intro */}
          <p className="font-mono text-[11px] text-white/30 mb-6 text-center tracking-wide">
            <span className="text-[#00ff88]/40">meru@dev</span>
            <span className="text-white/20">:</span>
            <span className="text-white/25">~$</span>
            <span className="text-white/40"> cat contact.txt</span>
          </p>

          {/* message */}
          <div className="text-center mb-10">
            <p className="text-sm sm:text-base text-white/45 leading-relaxed mx-auto">
              Open to opportunities, collaborations, or conversations around building
              meaningful software.
            </p>
          </div>

          {/* contact list */}
          <div className="border-t border-white/[0.06]">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.download ? undefined : '_blank'}
                rel={link.download ? undefined : 'noopener noreferrer'}
                download={link.download ? true : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
                className="
                  flex items-center justify-between
                  py-4
                  border-b border-white/[0.06]
                  group
                "
              >
                <span className="font-mono text-[11px] text-white/30 uppercase tracking-[0.15em]">
                  {link.label}
                </span>

                <span className="text-sm text-white/60 group-hover:text-[#00ff88]/70 transition-colors duration-200">
                  {link.value}
                </span>
              </motion.a>
            ))}
          </div>
          
          <br />

          {/* footer */}
          <div className="text-center mt-14 pt-6 border-t border-white/[0.06]">
            <p className="font-mono text-[11px] text-white/25 tracking-wide">
              built by <span className="text-[#00ff88]/30">meru</span> © {new Date().getFullYear()}
            </p>
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}