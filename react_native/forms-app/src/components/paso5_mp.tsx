import { useState, type ReactNode } from 'react'
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

type CamposFormulario = {
  nombre: string
  cedula: string
  nota: string
}

type ErroresFormulario = {
  nombre: string | null
  cedula: string | null
  nota: string | null
}


function esCedulaValida(cedula: string): boolean {
  if (!/^\d{10}$/.test(cedula)) return false

  const provincia = Number(cedula.slice(0, 2))              
  if (provincia < 1 || (provincia > 24 && provincia !== 30)) return false

  if (Number(cedula.charAt(2)) > 5) return false           

  const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2]
  let suma = 0
  for (let i = 0; i < 9; i++) {
    let producto = Number(cedula.charAt(i)) * (coeficientes[i] ?? 0)
    if (producto > 9) producto -= 9
    suma += producto
  }
  const verificador = (10 - (suma % 10)) % 10
  return verificador === Number(cedula.charAt(9))
}

function validar(campos: CamposFormulario): ErroresFormulario {
  const errores: ErroresFormulario = { nombre: null, cedula: null, nota: null }

  if (campos.nombre.trim().length === 0) {
    errores.nombre = 'El nombre es obligatorio'
  } else if (campos.nombre.trim().split(/\s+/).length < 2) {
    errores.nombre = 'Ingresa nombres y apellidos'
  }

  if (campos.cedula.trim().length === 0) {
    errores.cedula = 'La cédula es obligatoria'
  } else if (!esCedulaValida(campos.cedula.trim())) {
    errores.cedula = 'Cédula inválida (10 dígitos con dígito verificador)'
  }

  const numeroNota = Number(campos.nota.replace(',', '.'))
  if (campos.nota.trim().length === 0) {
    errores.nota = 'La nota es obligatoria'
  } else if (Number.isNaN(numeroNota) || numeroNota < 0 || numeroNota > 10) {
    errores.nota = 'Nota inválida (0 – 10)'
  }

  return errores
}

function hayErrores(errores: ErroresFormulario): boolean {
  return Object.values(errores).some((e) => e !== null)
}

function CampoConError({
  etiqueta,
  children,
  error,
}: {
  etiqueta: string
  children: ReactNode
  error: string | null
}) {
  return (
    <View style={styles5.campoWrapper}>
      <Text style={styles5.etiqueta}>{etiqueta}</Text>
      {children}
      {error !== null && <Text style={styles5.textoError}>{error}</Text>}
    </View>
  )
}

export function Paso5_mp() {
  const [campos, setCampos] = useState<CamposFormulario>({
    nombre: '',
    cedula: '',
    nota: '',
  })
  const [errores, setErrores] = useState<ErroresFormulario>({
    nombre: null,
    cedula: null,
    nota: null,
  })
  const [enviado, setEnviado] = useState(false)

  function actualizarCampo(campo: keyof CamposFormulario, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    // Borra el error del campo mientras el usuario escribe (UX más amigable)
    if (errores[campo] !== null) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onSubmit() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    setEnviado(true)
    Alert.alert(
      'Aspirante registrado',
      `${campos.nombre} · Cédula ${campos.cedula} · Nota ${campos.nota} / 10`,
      [
        {
          text: 'Registrar otro',
          onPress: () => {
            setCampos({ nombre: '', cedula: '', nota: '' })
            setErrores({ nombre: null, cedula: null, nota: null })
            setEnviado(false)
          },
        },
      ]
    )
  }

  return (
    <SafeAreaView style={styles5.contenedor}>
      <ScrollView
        contentContainerStyle={styles5.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles5.titulo}>Registrar aspirante</Text>
        <Text style={styles5.subtitulo}>
          Los campos marcados con * son obligatorios
        </Text>

        <CampoConError etiqueta="Nombres y apellidos *" error={errores.nombre}>
          <TextInput
            style={[
              styles5.campo,
              errores.nombre !== null && styles5.campoError,
            ]}
            value={campos.nombre}
            onChangeText={(v) => actualizarCampo('nombre', v)}
            placeholder="ej. Joselyn Quishpe"
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Cédula de identidad *" error={errores.cedula}>
          <TextInput
            style={[
              styles5.campo,
              errores.cedula !== null && styles5.campoError,
            ]}
            value={campos.cedula}
            onChangeText={(v) => actualizarCampo('cedula', v)}
            placeholder="10 dígitos"
            keyboardType="number-pad"
            maxLength={10}
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Nota del examen (sobre 10) *" error={errores.nota}>
          <TextInput
            style={[
              styles5.campo,
              errores.nota !== null && styles5.campoError,
            ]}
            value={campos.nota}
            onChangeText={(v) => actualizarCampo('nota', v)}
            placeholder="8.5"
            keyboardType="decimal-pad"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        </CampoConError>

        <Pressable
          style={({ pressed }) => [
            styles5.botonEnviar,
            pressed && styles5.botonEnviarPresionado,
            enviado && styles5.botonEnviarExito,
          ]}
          onPress={onSubmit}
        >
          <Text style={styles5.textoBoton}>
            {enviado ? '✓ Enviado' : 'Registrar aspirante'}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles5 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  scroll: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1565c0', marginBottom: 4 },
  subtitulo: { fontSize: 12, color: '#888', marginBottom: 20 },
  campoWrapper: { marginBottom: 16 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
  },
  campoError: {
    borderColor: '#e53935',
    backgroundColor: '#fff8f8',
  },
  textoError: {
    fontSize: 12,
    color: '#e53935',
    marginTop: 4,
  },
  botonEnviar: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botonEnviarPresionado: { backgroundColor: '#0d47a1' },
  botonEnviarExito: { backgroundColor: '#2e7d32' },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})
