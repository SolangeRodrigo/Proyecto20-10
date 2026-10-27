
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [cursos, setCursos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const obtenerCursos = async () => {
      try {
        const respuesta = await fetch('/api/cursos')

        if (!respuesta.ok) {
          throw new Error('No se pudieron obtener los cursos.')
        }

        const datos = await respuesta.json()
        setCursos(datos)
      } catch {
        setError('No se pudo conectar con el servidor. Intentá nuevamente más tarde.')
      } finally {
        setCargando(false)
      }
    }

    obtenerCursos()
  }, [])

  return (
    <main className="contenedor">
      <header className="encabezado">
        <p className="etiqueta">PROYECTO20-10</p>
        <h1>Hoja de ruta de cursos</h1>
        <p>Explorá los cursos disponibles para organizar tu aprendizaje.</p>
      </header>

      <section className="cursos" aria-labelledby="titulo-cursos">
        <h2 id="titulo-cursos">Cursos disponibles</h2>

        {cargando && <p role="status">Cargando cursos...</p>}

        {error && <p role="alert">{error}</p>}

        {!cargando && !error && cursos.length === 0 && (
          <p>Todavía no hay cursos disponibles.</p>
        )}

        {!cargando && !error && cursos.length > 0 && (
          <ul>
            {cursos.map((curso, indice) => (
              <li key={curso.id ?? indice}>
                {curso.nombre ?? curso.titulo ?? `Curso ${indice + 1}`}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App