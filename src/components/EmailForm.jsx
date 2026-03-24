import { useState } from 'react'
import emailjs from 'emailjs-com'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../config/emailjs'
import { GOOGLE_FORM_URL, FIELDS } from '../config/googleForms'

export default function EmailForm({ top3 }) {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [estado, setEstado] = useState('idle') // 'idle' | 'loading' | 'ok' | 'error'

  async function handleSubmit(e) {
    e.preventDefault()
    if (!nombre.trim() || !email.trim()) return
    setEstado('loading')

    const ciclo1 = top3[0]?.nombre || ''
    const ciclo2 = top3[1]?.nombre || ''
    const ciclo3 = top3[2]?.nombre || ''

   try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          nombre,
          email,
          ciclo1,
          enlace1: top3[0]?.enlace,
          ciclo2,
          enlace2: top3[1]?.enlace,
          ciclo3,
          enlace3: top3[2]?.enlace,
        },
        EMAILJS_PUBLIC_KEY
      )

      // Google Forms — fire and forget (no-cors)
      const formData = new URLSearchParams()
      formData.append(FIELDS.nombre, nombre)
      formData.append(FIELDS.email, email)
      formData.append(FIELDS.ciclo1, ciclo1)
      formData.append(FIELDS.ciclo2, ciclo2)
      formData.append(FIELDS.ciclo3, ciclo3)
      fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      }).catch(() => {})

      setEstado('ok')
    } catch {
      setEstado('error')
    }
  }

  if (estado === 'ok') {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-5 text-center">
        <p className="text-2xl mb-2">✅</p>
        <p className="text-green-700 font-bold text-sm md:text-base">¡Listo! Revisa tu bandeja de entrada.</p>
        <p className="text-green-600 text-xs md:text-sm mt-1">
          Si no ves el correo en unos minutos, revisa la carpeta de spam.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm">
      <h3 className="font-extrabold text-gray-900 text-base md:text-xl mb-1">📩 Recibe tus resultados por email</h3>
      <p className="text-xs md:text-sm text-gray-500 mb-4">
        Te enviamos un resumen con los ciclos recomendados para que no se te olvide.
      </p>

      {estado === 'error' && (
        <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-100 flex gap-2">
          <span className="shrink-0">❌</span>
          <p className="text-xs md:text-sm text-red-600">
            Algo salió mal. Apunta los ciclos recomendados y consúltanos en el stand.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <label className="block text-xs md:text-sm font-bold text-gray-600 mb-1">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Tu nombre"
            required
            autoComplete="name"
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm md:text-base focus:outline-none focus:ring-2 transition-all"
            style={{ '--tw-ring-color': '#f97316' }}
          />
        </div>
        <div>
          <label className="block text-xs md:text-sm font-bold text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            autoComplete="email"
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm md:text-base focus:outline-none focus:ring-2 transition-all"
            style={{ '--tw-ring-color': '#f97316' }}
          />
        </div>
        <button
          type="submit"
          disabled={estado === 'loading'}
          className="w-full py-3 md:py-4 rounded-2xl text-white font-bold text-sm md:text-base transition-all disabled:opacity-60 active:scale-[0.98] mt-1"
          style={{ backgroundColor: '#f97316' }}
        >
          {estado === 'loading' ? 'Enviando…' : '📩 Enviarme los resultados'}
        </button>
      </form>
    </div>
  )
}
