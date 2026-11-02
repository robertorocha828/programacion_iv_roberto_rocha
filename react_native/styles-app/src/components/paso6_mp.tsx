import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const ASPIRANTES = ['Camila Andrade', 'Joselyn Quishpe', 'Mateo Pazmiño', 'Valeria Morocho', 'Josué Naranjo']

export function Paso6_mp() {
  const insets = useSafeAreaInsets()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0d1117' }}>

      {/* Barra de cabecera pegada al área segura superior */}
      <View style={estilosPaso6.appBar}>
        <Text style={estilosPaso6.appBarTitulo}>Admisión 2026</Text>
        <Text style={estilosPaso6.appBarMeta}>{ASPIRANTES.length} aspirantes</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, gap: 10 }}
      >
        {ASPIRANTES.map((nombre) => (
          <View key={nombre} style={estilosPaso6.fila}>
            <View style={estilosPaso6.punto} />
            <Text style={estilosPaso6.nombreAspirante}>{nombre}</Text>
          </View>
        ))}

        <View style={estilosPaso6.debug}>
          <Text style={estilosPaso6.debugTitulo}>Safe Area Insets (dp)</Text>
          <Text style={estilosPaso6.debugLinea}>top:    {insets.top}</Text>
          <Text style={estilosPaso6.debugLinea}>bottom: {insets.bottom}</Text>
          <Text style={estilosPaso6.debugLinea}>left:   {insets.left}</Text>
          <Text style={estilosPaso6.debugLinea}>right:  {insets.right}</Text>
        </View>
      </ScrollView>

      <View style={[estilosPaso6.barraInferior, { paddingBottom: insets.bottom + 8 }]}>
        <Text style={estilosPaso6.barraInferiorTexto}>
          Última actualización: hace 30 segundos
        </Text>
      </View>

    </SafeAreaView>
  )
}

const estilosPaso6 = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#161b22',
    borderBottomWidth: 1,
    borderBottomColor: '#30363d',
  },
  appBarTitulo: { fontSize: 18, fontWeight: '700', color: '#e6edf3' },
  appBarMeta:   { fontSize: 13, color: '#8b949e' },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161b22',
    borderRadius: 8,
    padding: 12,
    gap: 10,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  punto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3fb950',
  },
  nombreAspirante: { fontSize: 14, color: '#e6edf3', fontWeight: '500' },
  debug: {
    backgroundColor: '#21262d',
    borderRadius: 8,
    padding: 12,
    gap: 2,
    marginTop: 8,
  },
  debugTitulo: { fontSize: 12, color: '#58a6ff', fontWeight: '600', marginBottom: 4 },
  debugLinea:  { fontSize: 12, color: '#8b949e', fontFamily: 'monospace' },
  barraInferior: {
    backgroundColor: '#161b22',
    paddingTop: 10,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#30363d',
    alignItems: 'center',
  },
  barraInferiorTexto: { fontSize: 12, color: '#8b949e' },
})
