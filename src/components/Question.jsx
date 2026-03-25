import OptionButton from './OptionButton'

export default function Question({
  pregunta,
  respuesta,
  onSelect,
  onNext,
  onBack,
  puedeAvanzar,
  esUltima,
  puedeRetroceder,
}) {
  const seleccionadas = pregunta.tipo === 'multi' ? (respuesta || []) : []

  function handleClick(opcionId) {
    onSelect(pregunta.id, opcionId, pregunta.tipo, pregunta.maxSelecciones)
  }

  return (
    <div className="flex flex-col px-4 md:px-10 lg:px-16 pt-6 md:pt-10 lg:pt-14 pb-8 gap-5 md:gap-7 lg:gap-9 min-h-full">
      {/* Bloque / categoría */}
      <div>
        <span
          className="text-xs md:text-sm lg:text-base font-bold uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ backgroundColor: '#1e3a5f1a', color: '#1e3a5f' }}
        >
          {pregunta.bloque}
        </span>
      </div>

      {/* Texto de la pregunta */}
      <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
        {pregunta.texto}
      </h2>

      {/* Nota informativa */}
      {pregunta.nota && (
        <div className="flex gap-2 bg-blue-50 border border-blue-100 rounded-xl p-3">
          <span className="text-base md:text-lg lg:text-xl shrink-0">ℹ️</span>
          <p className="text-sm md:text-base lg:text-lg text-blue-700 leading-relaxed">{pregunta.nota}</p>
        </div>
      )}

      {/* Opciones */}
      <div className="flex flex-col gap-2.5 md:gap-3 lg:gap-4">
        {pregunta.opciones.map(opcion => {
          const sel =
            pregunta.tipo === 'multi'
              ? seleccionadas.includes(opcion.id)
              : respuesta === opcion.id
          const max = pregunta.maxSelecciones || 99
          const deshabilitado =
            pregunta.tipo === 'multi' && seleccionadas.length >= max && !sel
          return (
            <OptionButton
              key={opcion.id}
              opcion={opcion}
              seleccionado={sel}
              onClick={() => handleClick(opcion.id)}
              deshabilitado={deshabilitado}
            />
          )
        })}
      </div>

      {/* Botones de navegación */}
      <div className="flex gap-3 mt-auto pt-2">
        {puedeRetroceder && (
          <button
            onClick={onBack}
            className="flex-none px-5 md:px-7 lg:px-9 py-3 md:py-4 lg:py-5 rounded-2xl border-2 border-gray-200 text-gray-600 font-semibold text-sm md:text-base lg:text-lg transition-all active:scale-[0.97] hover:border-gray-300"
          >
            ← Atrás
          </button>
        )}
        <button
          onClick={onNext}
          disabled={!puedeAvanzar}
          className={[
            'flex-1 py-3 md:py-4 lg:py-5 rounded-2xl font-bold text-sm md:text-base lg:text-lg transition-all active:scale-[0.97]',
            puedeAvanzar
              ? 'text-white shadow-md hover:opacity-90'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed',
          ].join(' ')}
          style={puedeAvanzar ? { backgroundColor: '#1e3a5f' } : {}}
        >
          {esUltima ? '🎯 Ver mis resultados' : 'Siguiente →'}
        </button>
      </div>
    </div>
  )
}
