import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type EstadoCupos = 'actualizando' | 'disponible' | 'agotado' | 'inactivo'

const CUPOS_INICIALES = 40

export function Paso2_mp() {
  const [cupos, setCupos] = useState<number>(CUPOS_INICIALES)
  const [estado, setEstado] = useState<EstadoCupos>('inactivo')
  const [activo, setActivo] = useState<boolean>(false)
  const [ciclos, setCiclos] = useState<number>(0)

  const ocupados = CUPOS_INICIALES - cupos
  const porcentajeOcupado = (ocupados / CUPOS_INICIALES) * 100

  useEffect(() => {
    if (!activo) return  
    let temporizador: ReturnType<typeof setTimeout> | undefined

    const intervalo = setInterval(() => {
      setEstado('actualizando')

      temporizador = setTimeout(() => {
        const nuevosInscritos = Math.floor(Math.random() * 3)
        setCupos(actuales => Math.max(0, actuales - nuevosInscritos))
        setEstado('disponible')
        setCiclos(c => c + 1)
      }, 400)
    }, 500)

    return () => {
      clearInterval(intervalo)
      if (temporizador) clearTimeout(temporizador)
    }
  }, [activo])   
  useEffect(() => {
    if (cupos === 0) {
      setActivo(false)
      setEstado('agotado')
    }
  }, [cupos])

  function reiniciar() {
    setActivo(false)
    setCupos(CUPOS_INICIALES)
    setCiclos(0)
    setEstado('inactivo')
  }

  const colorEstado: Record<EstadoCupos, string> = {
    actualizando: '#1565c0',
    disponible:   '#2e7d32',
    agotado:      '#c62828',
    inactivo:     '#757575',
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Cupos en tiempo real — Desarrollo de Software</Text>

      <View style={styles.tarjeta}>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {estado.toUpperCase()}
        </Text>
        <Text style={styles.cupos}>{cupos} cupos disponibles</Text>
        <Text style={styles.ocupacion}>
          Ocupación: {ocupados} de {CUPOS_INICIALES} ({porcentajeOcupado.toFixed(1)}%)
        </Text>
        <Text style={styles.ciclos}>Actualizaciones completadas: {ciclos}</Text>
        <Text style={styles.detalle}>Central Técnico · Quito · Modalidad presencial</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          activo ? styles.botonDetener : styles.botonIniciar,
          (cupos === 0) && styles.botonDeshabilitado,
          pressed && { opacity: 0.75 },
        ]}
        disabled={cupos === 0}
        onPress={() => setActivo(a => !a)}
      >
        <Text style={styles.textoBoton}>
          {activo ? 'Detener actualización' : 'Iniciar actualización'}
        </Text>
      </Pressable>

      <Pressable style={styles.botonSecundario} onPress={reiniciar}>
        <Text style={styles.textoSecundario}>Reiniciar cupos</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    gap: 6,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: '600',
  },
  cupos: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
  },
  ocupacion: {
    fontSize: 12,
    fontWeight: '600',
    color: '#09a57b',
  },
  ciclos: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1267fb',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonIniciar: {
    backgroundColor: '#1565c0',
  },
  botonDetener: {
    backgroundColor: '#de1010',
  },
  botonDeshabilitado: {
    backgroundColor: '#b0bec5',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  botonSecundario: {
    paddingVertical: 10,
  },
  textoSecundario: {
    color: '#1565c0',
    fontSize: 14,
  },
})
