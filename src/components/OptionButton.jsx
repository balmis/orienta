export default function OptionButton({ opcion, seleccionado, onClick, deshabilitado }) {
  return (
    <button
      onClick={onClick}
      disabled={deshabilitado}
      className={[
        'w-full text-left p-4 md:p-5 lg:p-6 rounded-2xl border-2 transition-all duration-150',
        'flex items-start gap-3',
        seleccionado
          ? 'border-orange-500 bg-orange-50'
          : deshabilitado
          ? 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
          : 'border-gray-200 bg-white active:scale-[0.98] active:border-gray-300',
      ].join(' ')}
    >
      <span className="text-2xl md:text-3xl lg:text-4xl leading-none mt-0.5 shrink-0">{opcion.emoji}</span>
      <span
        className={`text-sm md:text-base lg:text-lg font-medium leading-snug flex-1 ${
          seleccionado ? 'text-orange-900' : 'text-gray-800'
        }`}
      >
        {opcion.texto}
      </span>
      {seleccionado && (
        <span className="shrink-0 text-orange-500 mt-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}
    </button>
  )
}
