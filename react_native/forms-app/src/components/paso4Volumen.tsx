// app/index.tsx
import { useRef, useState, type ComponentRef } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

export function Paso4Volumen() {
  const [largo, setLargo] = useState('')
  const [ancho, setAncho] = useState('')
  const [alto, setAlto] = useState('')

  const refAncho = useRef<ComponentRef<typeof TextInput>>(null)
  const refAlto = useRef<ComponentRef<typeof TextInput>>(null)

  // Cálculo del volumen
  const l = parseFloat(largo) || 0
  const an = parseFloat(ancho) || 0
  const al = parseFloat(alto) || 0
  const volumen = l * an * al

  return (
    <SafeAreaView style={stylesVolumen.contenedor}>
      <Text style={stylesVolumen.titulo}>Calcular Volumen (Prisma)</Text>

      {/* Largo */}
      <Text style={stylesVolumen.etiqueta}>Largo (cm)</Text>
      <TextInput
        style={stylesVolumen.campo}
        value={largo}
        onChangeText={setLargo}
        placeholder="ej. 10"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refAncho.current?.focus()}
      />

      {/* Ancho */}
      <Text style={stylesVolumen.etiqueta}>Ancho (cm)</Text>
      <TextInput
        ref={refAncho}
        style={stylesVolumen.campo}
        value={ancho}
        onChangeText={setAncho}
        placeholder="ej. 5"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refAlto.current?.focus()}
      />

      {/* Alto */}
      <Text style={stylesVolumen.etiqueta}>Alto (cm)</Text>
      <TextInput
        ref={refAlto}
        style={stylesVolumen.campo}
        value={alto}
        onChangeText={setAlto}
        placeholder="ej. 2"
        keyboardType="numeric"
        returnKeyType="done"
      />

      {/* Resultado */}
      <View style={stylesVolumen.preview}>
        <Text style={stylesVolumen.previewEtiqueta}>Resultado:</Text>
        <Text style={stylesVolumen.previewTexto}>
          {largo && ancho && alto
            ? `${volumen.toLocaleString()} cm³`
            : 'Ingresa las dimensiones'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const stylesVolumen = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#1565c0', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#1a1a1a',
  },
  preview: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  previewEtiqueta: {
    fontSize: 12,
    color: '#cfd8dc',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a8ff78',
  },
})