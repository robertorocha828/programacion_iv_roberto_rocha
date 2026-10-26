import type { ComponentRef } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Pressable, TextInput as RNTextInput, StyleSheet, Text, TextInput, View } from 'react-native'

export function Paso3_mp() {
  const inputNombreRef = useRef<ComponentRef<typeof RNTextInput>>(null)
  const inputPromedioRef = useRef<ComponentRef<typeof RNTextInput>>(null)

  const [nombre, setNombre] = useState<string>('')
  const [promedio, setPromedio] = useState<string>('')


  useEffect(() => {
    inputNombreRef.current?.focus()
  }, [])


  const intentosSilenciososRef = useRef<number>(0)
  const [ultimoRegistro, setUltimoRegistro] = useState<string>('—')

  function registrarEstudiante() {
    intentosSilenciososRef.current += 1  
    const intento = intentosSilenciososRef.current
    const nota = parseFloat(promedio.replace(',', '.'))

    
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      setUltimoRegistro(`Promedio inválido (debe estar entre 0 y 10) — intento #${intento}`)
      return
    }
    setUltimoRegistro(
      `${nombre || 'Estudiante'} — promedio ${nota.toFixed(1)} / 10 — intento #${intento}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Registro de Estudiante</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Nombres y apellidos</Text>
        <TextInput
          ref={inputNombreRef}
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Camila Andrade"
          placeholderTextColor="#aaa"
          autoCapitalize="words"
          returnKeyType="next"
          onSubmitEditing={() => inputPromedioRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Promedio de bachillerato (sobre 10)</Text>
        <TextInput
          ref={inputPromedioRef}
          style={styles.input}
          value={promedio}
          onChangeText={setPromedio}
          placeholder="9.4"
          placeholderTextColor="#aaa"
          keyboardType="decimal-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={registrarEstudiante}
      >
        <Text style={styles.textoBoton}>Registrar</Text>
      </Pressable>

      <Text style={styles.detalle}>Último registro: {ultimoRegistro}</Text>
      <Text style={styles.detalle}>
        (los intentos silenciosos no causan re-renders)
      </Text>
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
  etiqueta: {
    fontSize: 15,
    fontWeight: '600',
    color: '#893006',
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
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  formulario: {
    width: '100%',
    gap: 6,
  },
  input: {
    color: '#1565c0',
    fontSize: 14,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
})
