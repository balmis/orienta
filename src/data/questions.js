export const questions = [
  {
    id: 'p1',
    bloque: 'Tu situación académica',
    texto: '¿Cuál es tu situación académica actual?',
    tipo: 'single',
    nota: 'Los Ciclos de Grado Medio requieren el título de ESO. Los de Grado Superior requieren Bachillerato o haber terminado un Grado Medio. ¡No te preocupes si aún no has terminado, hay opciones para ti!',
    opciones: [
      { id: 'p1a', texto: 'Estoy cursando la ESO y aún no la he terminado', emoji: '📚' },
      { id: 'p1b', texto: 'Tengo el título de ESO o equivalente', emoji: '✅' },
      { id: 'p1c', texto: 'Tengo Bachillerato o he terminado un Ciclo de Grado Medio', emoji: '🎓' },
      { id: 'p1d', texto: 'Tengo estudios universitarios o un Ciclo de Grado Superior', emoji: '🏛️' }
    ]
  },
  {
    id: 'p2',
    bloque: 'Tu situación académica',
    texto: '¿Cuántos años tienes?',
    tipo: 'single',
    nota: 'Nos ayuda a orientarte mejor sobre la modalidad más adecuada para ti.',
    opciones: [
      { id: 'p2a', texto: 'Menos de 18 años', emoji: '🧑' },
      { id: 'p2b', texto: 'Entre 18 y 25 años', emoji: '👨‍🎓' },
      { id: 'p2c', texto: 'Entre 26 y 35 años', emoji: '👨‍💼' },
      { id: 'p2d', texto: 'Más de 35 años', emoji: '🧑‍💼' }
    ]
  },
  {
    id: 'p3',
    bloque: 'Tus intereses',
    texto: '¿Cómo sueles pasar tu tiempo libre o qué actividades disfrutas más?',
    tipo: 'multi',
    maxSelecciones: 2,
    nota: 'Elige hasta 2 opciones que más te representen.',
    opciones: [
      { id: 'p3a', texto: 'Cacharrear con ordenadores, móviles o dispositivos electrónicos', emoji: '🔧' },
      { id: 'p3b', texto: 'Crear cosas digitales: webs, apps, diseño gráfico, edición de vídeo...', emoji: '👨‍💻' },
      { id: 'p3c', texto: 'Comprar y vender cosas, negociar precios, buscar ofertas (Wallapop, Vinted...)', emoji: '🛍️' },
      { id: 'p3d', texto: 'Viajar, conocer otras culturas, interesarme por lo que pasa en el mundo', emoji: '✈️' },
      { id: 'p3e', texto: 'Organizar cosas: listas, presupuestos, agendas, ayudar a gestionar algo', emoji: '📊' },
      { id: 'p3f', texto: 'Relacionarme con la gente, ayudar, convencer, liderar grupos', emoji: '🤝' },
      { id: 'p3g', texto: 'Coordinar equipos, que todo llegue a tiempo y en orden', emoji: '📦' },
      { id: 'p3h', texto: 'Diseñar: escaparates, presentaciones, imágenes, la estética de las cosas', emoji: '🎨' }
    ]
  },
  {
    id: 'p4',
    bloque: 'Tus intereses',
    texto: 'Cuando tienes que resolver un problema, ¿cómo actúas normalmente?',
    tipo: 'single',
    opciones: [
      { id: 'p4a', texto: 'Lo analizo por mi cuenta hasta encontrar la causa raíz, aunque tarde un rato', emoji: '🔍' },
      { id: 'p4b', texto: 'Hablo con la gente implicada, negocio y busco un acuerdo', emoji: '📞' },
      { id: 'p4c', texto: 'Me pongo a organizarlo: hago una lista, un plan, divido el problema en pasos', emoji: '📋' },
      { id: 'p4d', texto: 'Busco información externa, contrasto fuentes, me fijo en cómo lo hacen otros', emoji: '🌐' },
      { id: 'p4e', texto: 'Me lanzo a probar cosas rápido, aprendo sobre la marcha', emoji: '💡' },
      { id: 'p4f', texto: 'Depende mucho del tipo de problema', emoji: '🤷' }
    ]
  },
  {
    id: 'p5',
    bloque: 'Tus intereses',
    texto: '¿Qué asignaturas o áreas te han gustado más en el instituto?',
    tipo: 'single',
    opciones: [
      { id: 'p5a', texto: 'Matemáticas, Física o Tecnología', emoji: '🔢' },
      { id: 'p5b', texto: 'Informática (si la has tenido)', emoji: '💻' },
      { id: 'p5c', texto: 'Economía, Empresa o Matemáticas aplicadas', emoji: '📈' },
      { id: 'p5d', texto: 'Inglés u otros idiomas extranjeros', emoji: '🌍' },
      { id: 'p5e', texto: 'Historia, Geografía o Ciencias Sociales', emoji: '🗺️' },
      { id: 'p5f', texto: 'Ninguna en especial, no he encontrado algo que me apasione aún', emoji: '🤷' }
    ]
  },
  {
    id: 'p6',
    bloque: 'Tus intereses',
    texto: '¿Cómo te describes mejor a ti mismo?',
    tipo: 'single',
    nota: 'Elige la frase que más te representa.',
    opciones: [
      { id: 'p6a', texto: 'Soy una persona técnica. Me gusta entender cómo funcionan las cosas por dentro.', emoji: '🔩' },
      { id: 'p6b', texto: 'Soy creativo. Me gusta construir cosas, diseñar, hacer que algo funcione desde cero.', emoji: '🎨' },
      { id: 'p6c', texto: 'Soy una persona de personas. Me gusta tratar con clientes, convencer, vender ideas.', emoji: '🤝' },
      { id: 'p6d', texto: 'Me atrae el mundo internacional, los idiomas, los negocios a gran escala.', emoji: '🌍' },
      { id: 'p6e', texto: 'Soy ordenado y metódico. Me gusta que todo esté en su sitio y bien gestionado.', emoji: '📋' },
      { id: 'p6f', texto: 'Todavía no lo tengo claro. Quiero explorar opciones.', emoji: '🤷' }
    ]
  },
  {
    id: 'p7',
    bloque: 'Tu visión profesional',
    texto: 'Imagínate dentro de 3 años trabajando. ¿Cuál de estas escenas te encaja mejor?',
    tipo: 'single',
    opciones: [
      { id: 'p7a', texto: 'Estoy en una empresa arreglando ordenadores, instalando programas y manteniendo la red', emoji: '🖥️' },
      { id: 'p7b', texto: 'Administro los servidores y sistemas informáticos de una empresa mediana o grande', emoji: '🌐' },
      { id: 'p7c', texto: 'Trabajo como programador web: hago tiendas online, webs corporativas, apps para el navegador', emoji: '💻' },
      { id: 'p7d', texto: 'Desarrollo apps: una aplicación para móvil, un programa de escritorio, algo que la gente descarga', emoji: '📱' },
      { id: 'p7e', texto: 'Soy responsable comercial: gestiono el equipo de ventas, organizo el espacio, fidelizo clientes', emoji: '🏪' },
      { id: 'p7f', texto: 'Trabajo en logística o comercio exterior: importaciones, exportaciones, transportes internacionales', emoji: '🚢' },
      { id: 'p7g', texto: 'Trabajo en la gestión de una empresa: contabilidad, nóminas, trámites con Hacienda', emoji: '🗂️' }
    ]
  },
  {
    id: 'p8',
    bloque: 'Tu visión profesional',
    texto: '¿Te gustaría trabajar por cuenta propia algún día?',
    tipo: 'single',
    opciones: [
      { id: 'p8a', texto: 'Sí, claramente. Quiero ser mi propio jefe o trabajar como freelance', emoji: '✅' },
      { id: 'p8b', texto: 'Me lo planteo, pero no a corto plazo', emoji: '🤔' },
      { id: 'p8c', texto: 'Prefiero la estabilidad de trabajar en una empresa', emoji: '🏢' },
      { id: 'p8d', texto: 'Ahora mismo no lo sé', emoji: '🤷' }
    ]
  },
  {
    id: 'p9',
    bloque: 'Tu visión profesional',
    texto: '¿Qué importancia le das al sueldo al elegir qué estudiar?',
    tipo: 'single',
    opciones: [
      { id: 'p9a', texto: 'Es lo más importante. Quiero una salida profesional bien pagada', emoji: '💰' },
      { id: 'p9b', texto: 'Es importante, pero también valoro hacer algo que me guste', emoji: '⚖️' },
      { id: 'p9c', texto: 'Prefiero hacer algo que me apasione aunque al principio no gane tanto', emoji: '❤️' },
      { id: 'p9d', texto: 'No lo he pensado todavía', emoji: '🤷' }
    ]
  },
  {
    id: 'p10',
    bloque: 'Tu disponibilidad',
    texto: '¿Cuál es tu situación actual respecto al estudio?',
    tipo: 'single',
    opciones: [
      { id: 'p10a', texto: 'Puedo dedicarme al estudio a tiempo completo, sin otras obligaciones importantes', emoji: '📚' },
      { id: 'p10b', texto: 'Trabajo o tengo responsabilidades y necesito compaginarlo con el estudio', emoji: '💼' },
      { id: 'p10c', texto: 'Tengo cargas familiares que limitan mi disponibilidad horaria', emoji: '👶' },
      { id: 'p10d', texto: 'Mi situación es variable, hay semanas que puedo más y semanas que menos', emoji: '🔄' }
    ]
  },
  {
    id: 'p11',
    bloque: 'Tu disponibilidad',
    texto: '¿Cuántos días a la semana podrías asistir a clase presencialmente?',
    tipo: 'single',
    opciones: [
      { id: 'p11a', texto: 'Todos los días (de lunes a viernes)', emoji: '📅' },
      { id: 'p11b', texto: '3 o 4 días a la semana', emoji: '📆' },
      { id: 'p11c', texto: '1 o 2 días a la semana', emoji: '🗓️' },
      { id: 'p11d', texto: 'Prefiero un modelo mayormente online con asistencia mínima', emoji: '💻' }
    ]
  },
  {
    id: 'p12',
    bloque: 'Tu disponibilidad',
    texto: '¿Cuánto tiempo estás dispuesto a invertir en formarte?',
    tipo: 'single',
    opciones: [
      { id: 'p12a', texto: 'Quiero algo rápido, en torno a 1 año, y ponerme a trabajar cuanto antes', emoji: '⚡' },
      { id: 'p12b', texto: 'Dos años me parece razonable si la salida laboral es buena', emoji: '📅' },
      { id: 'p12c', texto: 'No me importa el tiempo si la formación es completa y de calidad', emoji: '🎓' },
      { id: 'p12d', texto: 'No lo he pensado, depende de lo que me recomiendes', emoji: '🤷' }
    ]
  },
  {
    id: 'p13',
    bloque: 'Tu afinidad tecnológica',
    texto: '¿Has programado alguna vez, aunque sea un poco?',
    tipo: 'single',
    condicional: true,
    condicion: (respuestas) => {
      const p3 = respuestas.p3 || []
      const p7 = respuestas.p7
      return p3.includes('p3a') || p3.includes('p3b') || ['p7b', 'p7c', 'p7d'].includes(p7)
    },
    opciones: [
      { id: 'p13a', texto: 'Sí, y me ha gustado (Python, JavaScript, Scratch, Visual Basic...)', emoji: '✅' },
      { id: 'p13b', texto: 'Lo he intentado pero me ha costado mucho', emoji: '😅' },
      { id: 'p13c', texto: 'No, pero tengo curiosidad por aprenderlo', emoji: '🤔' },
      { id: 'p13d', texto: 'No, y no me llama especialmente la atención', emoji: '❌' }
    ]
  },
  {
    id: 'p14',
    bloque: 'Tu afinidad tecnológica',
    texto: '¿Qué parte de la informática te atrae más?',
    tipo: 'single',
    condicional: true,
    condicion: (respuestas) => {
      const p3 = respuestas.p3 || []
      const p7 = respuestas.p7
      return p3.includes('p3a') || p3.includes('p3b') || ['p7b', 'p7c', 'p7d'].includes(p7)
    },
    opciones: [
      { id: 'p14a', texto: 'El hardware: montar PCs, instalar componentes, configurar dispositivos', emoji: '🔧' },
      { id: 'p14b', texto: 'Las redes: cómo se conectan los ordenadores, WiFi, servidores, ciberseguridad', emoji: '🌐' },
      { id: 'p14c', texto: 'El desarrollo web: diseñar páginas, hacer que funcionen, HTML, CSS, JavaScript', emoji: '🌍' },
      { id: 'p14d', texto: 'Las aplicaciones: programar software para móvil o PC', emoji: '📱' },
      { id: 'p14e', texto: 'Todo por igual, no sé distinguir aún', emoji: '🤷' },
      { id: 'p14f', texto: 'Ninguna en especial, la informática no es lo mío', emoji: '❌' }
    ]
  }
]
