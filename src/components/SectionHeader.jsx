export default function SectionHeader({ label, title }) {
  return (
    <div className="mb-14 sm:mb-16 text-center">
      <p className="font-mono text-[11px] text-[#00ff88]/60 tracking-[0.2em] uppercase mb-3 glow-green-subtle">
        {label}
      </p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white/95">
        {title}
      </h2>
    </div>
  )
}
