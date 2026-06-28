export default function SectionTag({ children, className = '', dark = false }) {
  const tone = dark
    ? 'border-cream/20 bg-white/10 text-leaf-200'
    : 'border-forest-600/15 bg-white/70 text-forest-700'
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] ${tone} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-leaf-500" />
      {children}
    </span>
  )
}
