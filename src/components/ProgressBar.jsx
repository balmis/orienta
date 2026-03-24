export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100)

  return (
    <div className="w-full bg-white border-b border-gray-100 px-4 md:px-6 py-2 md:py-3">
      <div className="flex justify-between text-xs md:text-sm text-gray-500 mb-1.5">
        <span className="font-semibold" style={{ color: '#1e3a5f' }}>
          Pregunta {current} de {total}
        </span>
        <span className="font-medium">{pct}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%`, backgroundColor: '#1e3a5f' }}
        />
      </div>
    </div>
  )
}
