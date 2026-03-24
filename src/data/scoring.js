import { cycles } from './cycles'

export function calcularResultado(respuestas) {
  const puntuaciones = {}
  cycles.forEach(c => { puntuaciones[c.id] = 0 })

  // PASO 1 — Filtro de acceso
  const accesibles = new Set(cycles.map(c => c.id))
  if (respuestas.p1 === 'p1a') {
    cycles.forEach(c => {
      if (!['fpb-com'].includes(c.id)) accesibles.delete(c.id)
    })
  }
  if (respuestas.p1 === 'p1b') {
    const gs = ['asir', 'daw', 'dam', 'gvec', 'ci', 'tl', 'af']
    gs.forEach(id => accesibles.delete(id))
  }

  // PASO 2 — Puntuación
  const p3 = respuestas.p3 || []

  // P3
  if (p3.includes('p3a')) { puntuaciones['smr'] += 3; puntuaciones['asir'] += 2 }
  if (p3.includes('p3b')) { puntuaciones['daw'] += 3; puntuaciones['dam'] += 3 }
  if (p3.includes('p3c')) { puntuaciones['ac'] += 3; puntuaciones['gvec'] += 3; puntuaciones['fpb-com'] += 1 }
  if (p3.includes('p3d')) { puntuaciones['ci'] += 3; puntuaciones['tl'] += 2 }
  if (p3.includes('p3e')) { puntuaciones['ga'] += 3; puntuaciones['af'] += 3 }
  if (p3.includes('p3f')) { puntuaciones['ac'] += 2; puntuaciones['gvec'] += 2; puntuaciones['ga'] += 1 }
  if (p3.includes('p3g')) { puntuaciones['tl'] += 3; puntuaciones['gvec'] += 2 }
  if (p3.includes('p3h')) { puntuaciones['daw'] += 2; puntuaciones['gvec'] += 2; puntuaciones['dam'] += 1 }

  // P4
  const p4map = {
    p4a: { smr: 2, asir: 3, dam: 2 },
    p4b: { ac: 2, gvec: 2, ci: 1 },
    p4c: { ga: 3, af: 3, tl: 2 },
    p4d: { ci: 3, asir: 2, af: 2 },
    p4e: { daw: 3, dam: 2 }
  }
  if (p4map[respuestas.p4]) {
    Object.entries(p4map[respuestas.p4]).forEach(([id, pts]) => { puntuaciones[id] += pts })
  }

  // P5
  const p5map = {
    p5a: { smr: 2, asir: 2, dam: 2, daw: 1 },
    p5b: { smr: 3, asir: 3, daw: 3, dam: 3 },
    p5c: { ga: 3, af: 3, gvec: 2, ac: 2 },
    p5d: { ci: 3, tl: 2 },
    p5e: { ci: 2, tl: 2, ac: 1 }
  }
  if (p5map[respuestas.p5]) {
    Object.entries(p5map[respuestas.p5]).forEach(([id, pts]) => { puntuaciones[id] += pts })
  }

  // P6
  const p6map = {
    p6a: { smr: 3, asir: 3 },
    p6b: { daw: 3, dam: 3, gvec: 1 },
    p6c: { ac: 3, gvec: 3 },
    p6d: { ci: 3, tl: 2 },
    p6e: { ga: 3, af: 3 }
  }
  if (p6map[respuestas.p6]) {
    Object.entries(p6map[respuestas.p6]).forEach(([id, pts]) => { puntuaciones[id] += pts })
  }

  // P7 (peso alto)
  const p7map = {
    p7a: { smr: 5 },
    p7b: { asir: 5 },
    p7c: { daw: 5 },
    p7d: { dam: 5 },
    p7e: { gvec: 4, ac: 3 },
    p7f: { ci: 4, tl: 4 },
    p7g: { af: 4, ga: 3 }
  }
  if (p7map[respuestas.p7]) {
    Object.entries(p7map[respuestas.p7]).forEach(([id, pts]) => { puntuaciones[id] += pts })
  }

  // P8
  if (respuestas.p8 === 'p8a') {
    ;['daw', 'dam', 'gvec', 'af', 'ac'].forEach(id => { puntuaciones[id] += 2 })
  }

  // P9
  if (respuestas.p9 === 'p9a') {
    ;['asir', 'daw', 'dam', 'af'].forEach(id => { puntuaciones[id] += 2 })
  }

  // P10 + P11 — Modalidad semipresencial
  const necesitaSemi =
    ['p10b', 'p10c', 'p10d'].includes(respuestas.p10) &&
    ['p11c', 'p11d'].includes(respuestas.p11)
  if (necesitaSemi) {
    ;['daw', 'dam', 'ci'].forEach(id => { puntuaciones[id] += 3 })
  }

  // P12
  if (respuestas.p12 === 'p12a') {
    puntuaciones['fpb-com'] += 3
    puntuaciones['smr'] += 2
    puntuaciones['ga'] += 2
    puntuaciones['ac'] += 2
  }

  // P13
  const p13map = {
    p13a: { daw: 3, dam: 3 },
    p13b: { smr: 2, asir: 1 },
    p13c: { daw: 2, dam: 2 },
    p13d: { smr: 1, asir: 1 }
  }
  if (p13map[respuestas.p13]) {
    Object.entries(p13map[respuestas.p13]).forEach(([id, pts]) => { puntuaciones[id] += pts })
  }

  // P14
  const p14map = {
    p14a: { smr: 4 },
    p14b: { asir: 4 },
    p14c: { daw: 4 },
    p14d: { dam: 4 },
    p14e: { smr: 1, asir: 1, daw: 1, dam: 1 }
  }
  if (p14map[respuestas.p14]) {
    Object.entries(p14map[respuestas.p14]).forEach(([id, pts]) => { puntuaciones[id] += pts })
  }

  // PASO 3 — Filtrar accesibles, ordenar y devolver top 3
  const p7prioridad = {
    p7a: 'smr', p7b: 'asir', p7c: 'daw', p7d: 'dam',
    p7e: 'gvec', p7f: 'ci', p7g: 'af'
  }

  const resultado = cycles
    .filter(c => accesibles.has(c.id))
    .map(c => ({
      ...c,
      puntuacion: puntuaciones[c.id],
      semipresencialRecomendado: necesitaSemi
    }))
    .sort((a, b) => {
      if (b.puntuacion !== a.puntuacion) return b.puntuacion - a.puntuacion
      const prioridad = p7prioridad[respuestas.p7]
      if (a.id === prioridad) return -1
      if (b.id === prioridad) return 1
      return 0
    })
    .slice(0, 3)

  return { top3: resultado, necesitaSemi }
}
