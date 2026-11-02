import { useCallback, useEffect, useState } from 'react'

export type EstadoInscripcion = 'sin_enviar' | 'enviando' | 'enviada' | 'error'

interface ResultadoInscripcion {
  estado: EstadoInscripcion
  intentos: number
  tiempoRespuesta: number | null
  enviarSolicitud: () => void
  reiniciar: () => void
}

export function useInscripcionSimulada(_nombreAspirante: string): ResultadoInscripcion {
  const [estado, setEstado] = useState<EstadoInscripcion>('sin_enviar')
  const [intentos, setIntentos] = useState<number>(0)
  const [tiempoRespuesta, setTiempoRespuesta] = useState<number | null>(null)
  const [disparador, setDisparador] = useState<number>(0)  // fuerza re-ejecución del efecto

  useEffect(() => {
    if (estado !== 'enviando') return

    const timeout = setTimeout(() => {
      const falla = Math.random() < 0.4   // 40 % de probabilidad de fallo
      setIntentos(n => n + 1)

      if (falla) {
        setEstado('error')
        setTiempoRespuesta(null)
      } else {
        const ms = Math.floor(Math.random() * 150) + 20
        setTiempoRespuesta(ms)
        setEstado('enviada')
      }
    }, 1200)

    return () => clearTimeout(timeout)
  }, [estado, disparador])

  const enviarSolicitud = useCallback(() => {
    setEstado('enviando')
    setDisparador(d => d + 1)   
  }, [])

  const reiniciar = useCallback(() => {
    setEstado('sin_enviar')
    setIntentos(0)
    setTiempoRespuesta(null)
  }, [])

  return { estado, intentos, tiempoRespuesta, enviarSolicitud, reiniciar }
}
