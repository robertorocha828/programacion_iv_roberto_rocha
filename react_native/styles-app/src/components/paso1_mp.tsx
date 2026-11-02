import { ScrollView, StyleSheet, Text, View } from 'react-native'

export function Paso1_mp() {
  return (
    <ScrollView style={estilosPaso1.pantalla} contentContainerStyle={{ gap: 24, padding: 16 }}>

      <Text style={estilosPaso1.etiqueta}>flexDirection: 'column' (por defecto)</Text>
      <View style={estilosPaso1.columna}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#1565c0' }]}>
          <Text style={estilosPaso1.textoCaja}>Camila Andrade</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#1976d2' }]}>
          <Text style={estilosPaso1.textoCaja}>Joselyn Quishpe</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#1e88e5' }]}>
          <Text style={estilosPaso1.textoCaja}>Mateo Pazmiño</Text>
        </View>
      </View>

      <Text style={estilosPaso1.etiqueta}>
        flexDirection: 'row' + justifyContent: 'space-between'
      </Text>
      <View style={estilosPaso1.fila}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#2e7d32' }]}>
          <Text style={estilosPaso1.textoCaja}>Examen 9.2</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#388e3c' }]}>
          <Text style={estilosPaso1.textoCaja}>Entrevista 9.0</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#43a047' }]}>
          <Text style={estilosPaso1.textoCaja}>Bachillerato 9.4</Text>
        </View>
      </View>

      <Text style={estilosPaso1.etiqueta}>flex proporcional: 2 / 1 / 1</Text>
      <View style={estilosPaso1.filaFlex}>
        <View style={{ flex: 2, backgroundColor: '#c62828', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Desarrollo de Software (flex: 2)</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#e53935', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Enfermería</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#ef5350', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Electricidad</Text>
        </View>
      </View>

      <Text style={estilosPaso1.etiqueta}>flexWrap: 'wrap' + gap: 8</Text>
      <View style={estilosPaso1.rejilla}>
        {['Pichincha', 'Cotopaxi', 'Tungurahua', 'Imbabura', 'Manabí', 'Chimborazo'].map((provincia) => (
          <View key={provincia} style={estilosPaso1.chip}>
            <Text style={estilosPaso1.textoChip}>{provincia}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  )
}

const estilosPaso1 = StyleSheet.create({
  pantalla:   { flex: 1, backgroundColor: '#f5f7fa' },
  etiqueta:   { fontSize: 12, color: '#6b7280', fontFamily: 'monospace' },
  columna: {
    flexDirection: 'column', // explícito para que sea visible
    gap: 8,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filaFlex: {
    flexDirection: 'row',
    gap: 6,
  },
  caja: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoCaja: { color: '#fff', fontWeight: '600', fontSize: 13 },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#1565c0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  textoChip: { color: '#fff', fontSize: 13 },
})
