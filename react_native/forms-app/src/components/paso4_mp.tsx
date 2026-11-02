import { useRef, useState, type ComponentRef } from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

export function Paso4_mp() {
  const [nombre, setNombre] = useState('')
  const [cedula, setCedula] = useState('')
  const [celular, setCelular] = useState('')
  const [password, setPassword] = useState('')
  const [mostrarPass, setMostrarPass] = useState(false)

  const refCedula = useRef<ComponentRef<typeof TextInput>>(null)
  const refCelular = useRef<ComponentRef<typeof TextInput>>(null)
  const refPass = useRef<ComponentRef<typeof TextInput>>(null)

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Datos del aspirante</Text>

      <Text style={styles4.etiqueta}>Nombres y apellidos</Text>
      <TextInput
        style={styles4.campo}
        value={nombre}
        onChangeText={setNombre}
        placeholder="ej. Camila Andrade"
        autoCapitalize="words"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => refCedula.current?.focus()}
      />

      <Text style={styles4.etiqueta}>Cédula de identidad</Text>
      <TextInput
        ref={refCedula}
        style={styles4.campo}
        value={cedula}
        onChangeText={setCedula}
        placeholder="10 dígitos"
        keyboardType="number-pad"
        maxLength={10}
        returnKeyType="next"
        onSubmitEditing={() => refCelular.current?.focus()}
      />

      <Text style={styles4.etiqueta}>Celular</Text>
      <TextInput
        ref={refCelular}
        style={styles4.campo}
        value={celular}
        onChangeText={setCelular}
        placeholder="09XXXXXXXX"
        keyboardType="phone-pad"
        maxLength={10}
        returnKeyType="next"
        onSubmitEditing={() => refPass.current?.focus()}
      />

      <Text style={styles4.etiqueta}>Contraseña del portal</Text>
      <View style={styles4.campoConIcono}>
        <TextInput
          ref={refPass}
          style={[styles4.campo, { flex: 1, marginBottom: 0 }]}
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          secureTextEntry={!mostrarPass}
          returnKeyType="done"
          autoCapitalize="none"
        />
        <Pressable
          onPress={() => setMostrarPass((v) => !v)}
          style={styles4.togglePass}
        >
          <Text style={styles4.togglePassTexto}>
            {mostrarPass ? 'Ocultar' : 'Ver'}
          </Text>
        </Pressable>
      </View>

      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>
          Postulante: {nombre || '<nombre>'}
        </Text>
        <Text style={styles4.previewTexto}>
          Cédula: {cedula || '<cédula>'} · Cel: {celular || '09XXXXXXXX'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles4 = StyleSheet.create({
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
  campoConIcono: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  togglePass: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  togglePassTexto: { fontSize: 13, color: '#1565c0', fontWeight: '600' },
  preview: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
    gap: 2,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#a8ff78',
  },
})
