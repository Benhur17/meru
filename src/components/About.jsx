import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const infoItems = [
  { label: "Experience", value: "3+ Years" },
  { label: "Focus", value: "Full Stack Systems" },
  { label: "Education", value: "Computer Science" },
  { label: "Location", value: "India" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader label="// about" title="Who I Am" />
      <br />

      <div className="w-full flex justify-center mb-12 sm:mb-14">
        <div className="w-full max-w-[680px]">
          {/* terminal hint */}
          <p className="font-mono text-[11px] text-white/30 mb-6 text-center tracking-wide">
            <span className="text-[#00ff88]/40">meru@dev</span>
            <span className="text-white/20">:</span>
            <span className="text-white/25">~$</span>
            <span className="text-white/40"> cat about.txt</span>
          </p>

          {/* main text */}
          <div className="text-center">
            <p className="text-sm sm:text-base text-white/45 leading-relaxed">
              With a foundation in Computer Science, I focus on writing clean,
              efficient code and crafting seamless user experiences. I care
              about structure, performance, and building software that feels
              intuitive, not just functional.
            </p>
            <br /> 
          </div>
        </div>
      </div>

      {/* Structured Info */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[680px] border-t border-white/[0.06]">
          {infoItems.map((item, i) => (
            <motion.div
              key={item.label}
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
                {item.label}
              </span>

              <span className="text-sm sm:text-base text-white/80 group-hover:text-[#00ff88]/70 transition-colors duration-200">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
