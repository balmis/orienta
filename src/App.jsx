import { useState } from 'react'
import { questions } from './data/questions'
import { calcularResultado } from './data/scoring'
import ProgressBar from './components/ProgressBar'
import Question from './components/Question'
import ResultCard from './components/ResultCard'

function getVisibleQuestions(respuestas) {
  return questions.filter(q => {
    if (!q.condicional) return true
    return q.condicion(respuestas)
  })
}

function App() {
  const [respuestas, setRespuestas] = useState({})
  const [indiceActual, setIndiceActual] = useState(0)
  const [resultado, setResultado] = useState(null)
  const [fase, setFase] = useState('quiz') // 'quiz' | 'resultado'
  const [visible, setVisible] = useState(true)

  const preguntasVisibles = getVisibleQuestions(respuestas)
  const preguntaActual = preguntasVisibles[indiceActual]
  const esUltima = indiceActual === preguntasVisibles.length - 1

  const respuestaActual = preguntaActual
    ? preguntaActual.tipo === 'multi'
      ? respuestas[preguntaActual.id] || []
      : respuestas[preguntaActual.id]
    : null

  const puedeAvanzar = preguntaActual?.tipo === 'multi'
    ? (respuestas[preguntaActual?.id]?.length ?? 0) > 0
    : Boolean(respuestas[preguntaActual?.id])

  function handleSelect(preguntaId, opcionId, tipo, maxSelecciones) {
    setRespuestas(prev => {
      if (tipo === 'multi') {
        const actual = prev[preguntaId] || []
        if (actual.includes(opcionId)) {
          return { ...prev, [preguntaId]: actual.filter(id => id !== opcionId) }
        }
        if (actual.length < (maxSelecciones || 99)) {
          return { ...prev, [preguntaId]: [...actual, opcionId] }
        }
        return prev
      }
      return { ...prev, [preguntaId]: opcionId }
    })
  }

  function animar(fn) {
    setVisible(false)
    setTimeout(() => {
      fn()
      setVisible(true)
    }, 200)
  }

  function handleNext() {
    if (!puedeAvanzar) return
    if (esUltima) {
      animar(() => {
        const res = calcularResultado(respuestas)
        setResultado(res)
        setFase('resultado')
      })
    } else {
      animar(() => setIndiceActual(i => i + 1))
    }
  }

  function handleBack() {
    if (indiceActual === 0) return
    animar(() => setIndiceActual(i => i - 1))
  }

  function handleReset() {
    animar(() => {
      setRespuestas({})
      setIndiceActual(0)
      setResultado(null)
      setFase('quiz')
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="w-full max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto flex flex-col min-h-screen">
        {/* Header */}
        <header
          className="text-white text-center py-3.5 px-4 sticky top-0 z-20 shadow-sm"
          style={{ backgroundColor: '#1e3a5f' }}
        >
          <p className="text-sm md:text-lg lg:text-xl font-bold tracking-wide">
            Descubre tu Ciclo Formativo ideal · IES Doctor Balmis
          </p>
        </header>

        {/* Barra de progreso */}
        {fase === 'quiz' && (
          <ProgressBar
            current={indiceActual + 1}
            total={preguntasVisibles.length}
          />
        )}

        {/* Contenido principal */}
        <main
          className={`flex-1 transition-opacity duration-200 overflow-y-auto ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {fase === 'quiz' && preguntaActual && (
            <Question
              pregunta={preguntaActual}
              respuesta={respuestaActual}
              onSelect={handleSelect}
              onNext={handleNext}
              onBack={handleBack}
              puedeAvanzar={puedeAvanzar}
              esUltima={esUltima}
              puedeRetroceder={indiceActual > 0}
            />
          )}
          {fase === 'resultado' && resultado && (
            <ResultCard
              top3={resultado.top3}
              necesitaSemi={resultado.necesitaSemi}
              onReset={handleReset}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="text-center text-xs md:text-sm lg:text-base text-gray-400 py-3 md:py-4 lg:py-5 border-t border-gray-100 bg-white">
          IES Doctor Balmis · Alicante
        </footer>
      </div>
    </div>
  )
}

export default App
