import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export function Paso1_mp() {
  const [intentos, setIntentos] = useState<number>(0)
  const [inscrito, setInscrito] = useState<boolean>(false)

  function manejarReintento() {
    if (inscrito) return
    const nuevoIntento = intentos + 1
    setIntentos(nuevoIntento)
    // Simula éxito al tercer intento
    if (nuevoIntento >= 3) {
      setInscrito(true)
    }
  }

  function reiniciar() {
    setIntentos(0)
    setInscrito(false)
  }

  const estadoTexto = inscrito
    ? '✓ Inscripción registrada'
    : intentos === 0
      ? 'Aún no se ha intentado inscribir'
      : `Intento ${intentos} de 3 fallido`

  const colorEstado = inscrito ? '#2e7d32' : intentos === 0 ? '#757575' : '#c62828'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Inscripción en línea</Text>

      <View style={[styles.tarjeta, { borderColor: colorEstado }]}>
        <Text style={[styles.estado, { color: colorEstado }]}>
          {estadoTexto}
        </Text>
        <Text style={styles.detalle}>Camila Andrade · Desarrollo de Software</Text>
        <Text style={styles.detalle}>Instituto Central Técnico · Quito</Text>
      </View>
      <Text style={[styles.detalle, { color: colorEstado }]}>
        {intentos > 0 && !inscrito ? 'Error al registrar la inscripción' : ''}
      </Text>
      <Pressable
        style={({ pressed }) => [
          styles.boton,
          inscrito ? styles.botonDeshabilitado : styles.botonActivo,
          pressed && !inscrito && { opacity: 0.75 },
        ]}
        onPress={manejarReintento}
        disabled={inscrito}
      >
        <Text style={styles.textoBoton}>
          {inscrito ? 'Inscrita' : 'Reintentar inscripción'}
        </Text>
      </Pressable>

      <Pressable style={styles.botonSecundario} onPress={reiniciar}>
        <Text style={styles.textoSecundario}>Reiniciar simulación</Text>
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
  },
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  estado: {
    fontSize: 15,
    fontWeight: '600',
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
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  botonDeshabilitado: {
    backgroundColor: '#a5d6a7',
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
