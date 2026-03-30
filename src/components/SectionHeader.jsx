export default function SectionHeader({ label, title }) {
  return (
    <div className="mb-16 text-center">
      <p className="font-mono text-xs text-accent-light tracking-widest uppercase mb-4">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
        {title}
      </h2>
    </div>
  )
}
