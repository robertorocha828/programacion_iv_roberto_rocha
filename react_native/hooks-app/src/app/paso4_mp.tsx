
import { StyleSheet, Text, useColorScheme, useWindowDimensions, View } from 'react-native'

export function Paso4_mp() {
  const { width, height, scale } = useWindowDimensions()
  const esquema = useColorScheme()   // 'light' | 'dark' | null


  const colores = {
    fondo:   esquema === 'dark' ? '#0d1b2a' : '#f5f5f5',
    tarjeta: esquema === 'dark' ? '#1a2a3a' : '#ffffff',
    texto:   esquema === 'dark' ? '#e8eaed' : '#1a1a1a',
    detalle: esquema === 'dark' ? '#9aa0a6' : '#666666',
    borde:   esquema === 'dark' ? '#2d3e50' : '#e0e0e0',
  }

  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas


  const carreras = [
    { nombre: 'Desarrollo de Software', cupos: 40, notaMinima: 7.5, estado: 'abierta' },
    { nombre: 'Mecánica Automotriz',    cupos: 30, notaMinima: 7.0, estado: 'abierta' },
    { nombre: 'Enfermería',             cupos: 25, notaMinima: 8.0, estado: 'cerrada' },
    { nombre: 'Gastronomía',            cupos: 35, notaMinima: 7.0, estado: 'abierta' },
  ]

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>
        Oferta académica 2026
      </Text>


      <View style={[styles.etiqueta, {
        backgroundColor: colores.tarjeta,
        borderColor: colores.borde,
      }]}>
        <Text style={[styles.etiquetaTexto, { color: colores.detalle }]}>
          Pantalla: {Math.round(width)} × {Math.round(height)} dp
          {'  '}·{'  '}escala: {scale.toFixed(1)}
          {'  '}·{'  '}tema: {esquema ?? 'sin preferencia'}
        </Text>
      </View>


      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
        {carreras.map(carrera => (
          <View
            key={carrera.nombre}
            style={[styles.tarjeta, {
              backgroundColor: colores.tarjeta,
              borderColor: colores.borde,
              width: anchoTarjeta,
            }]}
          >
            <Text style={[styles.nombreCarrera, { color: colores.texto }]}>
              {carrera.nombre}
            </Text>
            <Text style={[styles.detalleCarrera, { color: colores.detalle }]}>
              Nota mínima: {carrera.notaMinima.toFixed(1)} / 10 · Cupos: {carrera.cupos}
            </Text>
            <Text style={{
              fontSize: 12,
              fontWeight: '600',
              color: carrera.estado === 'abierta' ? '#2e7d32' : '#c62828',
            }}>
              {carrera.estado.toUpperCase()}
            </Text>
          </View>
        ))}
      </View>


      <View style={[styles.nota, { borderColor: colores.borde, backgroundColor: colores.tarjeta }]}>
        <Text style={[styles.notaTexto, { color: colores.detalle }]}>
          💡 useSafeAreaInsets() — disponible desde react-native-safe-area-context.
          El hook expone los valores numéricos {'{'}top, bottom, left, right{'}'} para
          cuando necesitas posicionar elementos manualmente respetando el notch y la
          barra de inicio.
        </Text>
      </View>
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
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  etiqueta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
  },
  etiquetaTexto: {
    fontSize: 12,
  },
  nombreCarrera: {
    fontSize: 15,
    fontWeight: '600',
  },
  detalleCarrera: {
    fontSize: 12,
  },
  nota: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
  },
  notaTexto: {
    fontSize: 12,
    lineHeight: 18,
  },
})
