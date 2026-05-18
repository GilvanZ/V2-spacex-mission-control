interface InfoCardProps {
  label?: string
  value?: string
}

export default function InfoCard({ label, value }: InfoCardProps) {
  return (
    <div className="text-shadow-2xs text-shadow backdrop-blur bg-white/5 border border-white/10 rounded-2xl p-4 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 ease-out">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{label}</p>
      <p className="text-white font-semibold">{value}</p>
    </div>
  )
}