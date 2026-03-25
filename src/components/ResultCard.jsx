import EmailForm from './EmailForm'

const NIVEL_COLORS = {
  'FP Básica': 'bg-gray-100 text-gray-700',
  'Grado Medio': 'bg-sky-100 text-sky-800',
  'Grado Superior': 'bg-indigo-100 text-indigo-800',
}

const FAMILIA_COLORS = {
  'Informática': 'bg-cyan-100 text-cyan-800',
  'Comercio': 'bg-emerald-100 text-emerald-800',
  'Administración': 'bg-purple-100 text-purple-800',
}

function NivelBadge({ nivel }) {
  return (
    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${NIVEL_COLORS[nivel] || 'bg-gray-100 text-gray-700'}`}>
      {nivel}
    </span>
  )
}

function FamiliaBadge({ familia }) {
  return (
    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${FAMILIA_COLORS[familia] || 'bg-gray-100 text-gray-700'}`}>
      {familia}
    </span>
  )
}

function CycleCardPrincipal({ ciclo, necesitaSemi }) {
  const showSemi = necesitaSemi && ciclo.modalidad.includes('semipresencial')

  return (
    <div className="rounded-2xl border-2 p-5 shadow-sm" style={{ borderColor: '#f97316' }}>
      {/* Cabecera */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap gap-1.5">
            <NivelBadge nivel={ciclo.nivel} />
            <FamiliaBadge familia={ciclo.familia} />
          </div>
        </div>
        <span className="text-3xl font-black shrink-0 ml-3" style={{ color: '#1e3a5f' }}>
          {ciclo.siglas}
        </span>
      </div>

      {/* Nombre */}
      <h3 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
        {ciclo.nombre}
      </h3>

      {/* Descripción */}
      <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-3">{ciclo.descripcion}</p>

      {/* Salidas */}
      <div className="bg-gray-50 rounded-xl p-3 mb-3">
        <p className="text-xs md:text-sm lg:text-base font-bold text-gray-400 uppercase tracking-wide mb-1">
          Salidas profesionales
        </p>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">{ciclo.salidas}</p>
      </div>

      {/* Badge semipresencial */}
      {showSemi && (
        <span className="inline-flex items-center gap-1.5 text-xs md:text-sm lg:text-base font-bold px-3 py-1 rounded-full bg-orange-100 text-orange-700 mb-3">
          🕐 Semipresencial disponible
        </span>
      )}

      {/* Enlace */}
      <div className="mt-1">
        <a
          href={ciclo.enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm md:text-base lg:text-lg font-bold transition-opacity hover:opacity-75"
          style={{ color: '#f97316' }}
        >
          Más información →
        </a>
      </div>
    </div>
  )
}

function CycleCardSecundaria({ ciclo, necesitaSemi }) {
  const showSemi = necesitaSemi && ciclo.modalidad.includes('semipresencial')

  return (
    <div className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm">
      <div className="flex items-start justify-between mb-2">
        <div className="flex flex-wrap gap-1.5">
          <NivelBadge nivel={ciclo.nivel} />
          <FamiliaBadge familia={ciclo.familia} />
        </div>
        <span className="text-xl md:text-2xl lg:text-3xl font-black shrink-0 ml-3" style={{ color: '#1e3a5f' }}>
          {ciclo.siglas}
        </span>
      </div>
      <h3 className="text-base md:text-xl lg:text-2xl font-extrabold text-gray-900 mb-1 leading-tight">
        {ciclo.nombre}
      </h3>
      <p className="text-xs md:text-sm lg:text-base text-gray-500 leading-relaxed mb-2">{ciclo.descripcion}</p>
      {showSemi && (
        <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 mb-2">
          🕐 Semipresencial disponible
        </span>
      )}
      <a
        href={ciclo.enlace}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs md:text-sm lg:text-base font-bold transition-opacity hover:opacity-75"
        style={{ color: '#f97316' }}
      >
        Más información →
      </a>
    </div>
  )
}

export default function ResultCard({ top3, necesitaSemi, onReset }) {
  if (!top3 || top3.length === 0) return null

  const [primero, ...resto] = top3

  return (
    <div className="px-4 md:px-10 lg:px-16 pt-6 md:pt-10 lg:pt-14 pb-10 lg:pb-14 flex flex-col gap-6 md:gap-8 lg:gap-10">
      {/* Encabezado */}
      <div className="text-center">
        <p className="text-5xl mb-3">🎯</p>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">Tu ciclo ideal es...</h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-400 mt-1">Basado en tus respuestas</p>
      </div>

      {/* Ciclo principal */}
      <CycleCardPrincipal ciclo={primero} necesitaSemi={necesitaSemi} />

      {/* Ciclos secundarios */}
      {resto.length > 0 && (
        <div>
          <p className="text-sm md:text-base lg:text-lg font-bold text-gray-500 mb-3 uppercase tracking-wide">
            También podrías encajar en:
          </p>
          <div className="flex flex-col gap-3">
            {resto.map(ciclo => (
              <CycleCardSecundaria key={ciclo.id} ciclo={ciclo} necesitaSemi={necesitaSemi} />
            ))}
          </div>
        </div>
      )}

      {/* Volver a empezar */}
      <button
        onClick={onReset}
        className="w-full py-3 md:py-4 lg:py-5 rounded-2xl border-2 border-gray-200 text-gray-500 font-semibold text-sm md:text-base lg:text-lg transition-all hover:border-gray-300 active:scale-[0.98]"
      >
        🔄 Volver a empezar
      </button>

      {/* Formulario de email */}
      <EmailForm top3={top3} />
    </div>
  )
}
