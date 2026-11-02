import { Dimensions, StyleSheet, Text, View } from 'react-native'

const CARRERAS_OCUPACION = [
  { pct: '100%', carrera: 'Desarrollo de Software' },
  { pct: '75%',  carrera: 'Mecánica Automotriz' },
  { pct: '50%',  carrera: 'Enfermería' },
  { pct: '25%',  carrera: 'Gastronomía' },
] as const

export function Paso2_mp() {
  const anchoPantalla = Dimensions.get('window').width

  return (
    <View style={estilosPaso2.pantalla}>

      <Text style={estilosPaso2.seccion}>Tamaños en dp (fijos)</Text>
      <View style={estilosPaso2.fila}>
        {([32, 48, 64, 80] as const).map((dp) => (
          <View key={dp} style={[estilosPaso2.cuadrado, { width: dp, height: dp }]}>
            <Text style={estilosPaso2.etiqueta}>{dp}</Text>
          </View>
        ))}
      </View>

      <Text style={estilosPaso2.seccion}>width en '%' — cupos ocupados, relativo al padre</Text>
      {CARRERAS_OCUPACION.map(({ pct, carrera }) => (
        <View key={pct} style={[estilosPaso2.barra, { width: pct }]}>
          <Text style={estilosPaso2.etiqueta} numberOfLines={1}>{carrera} · {pct}</Text>
        </View>
      ))}

      <Text style={estilosPaso2.seccion}>
        Ancho de pantalla detectado: {anchoPantalla} dp
      </Text>
      <View style={[estilosPaso2.indicador, { width: anchoPantalla * 0.6 }]}>
        <Text style={estilosPaso2.etiqueta}>60% de {anchoPantalla} dp</Text>
      </View>

      <View style={estilosPaso2.nota}>
        <Text style={{ fontSize: 13, color: '#92400e' }}>
          fontSize: 16 (dp) · borderRadius: 8 (dp){'\n'}
          Estas propiedades NO aceptan '%' — solo números dp.
        </Text>
      </View>

    </View>
  )
}

const estilosPaso2 = StyleSheet.create({
  pantalla:   { flex: 1, backgroundColor: '#f5f7fa', padding: 16, gap: 12 },
  seccion:    { fontSize: 12, color: '#6b7280', fontFamily: 'monospace', marginTop: 8 },
  fila:       { flexDirection: 'row', gap: 8, alignItems: 'flex-end' },
  cuadrado: {
    backgroundColor: '#1565c0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  barra: {
    height: 32,
    backgroundColor: '#1565c0',
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  etiqueta:   { color: '#fff', fontSize: 11, fontWeight: '600' },
  indicador: {
    height: 40,
    backgroundColor: '#2e7d32',
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  nota: {
    backgroundColor: '#fef3c7',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#f59e0b',
  },
})
