
import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Card, FilaInfo } from './paso2'
import { BadgeEstado } from './paso3'
import { ModalConfirm } from './paso5'



interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6_mp() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} registrado para Camila Andrade`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>Camila Andrade</Text>
          <Text style={estilos6.cabCarrera}>Desarrollo de Software · Central Técnico</Text>
        </View>
        <BadgeEstado estado="admitido" mostrarIcono tamaño={12} />
      </View>


      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >

        <Card titulo="Resultados de admisión" subtitulo="Última actualización: hace 30 s">
          <FilaInfo etiqueta="Examen de acceso" valor="9.2 / 10" />
          <FilaInfo etiqueta="Entrevista" valor="9.0 / 10" />
          <FilaInfo etiqueta="Promedio de bachillerato" valor="9.4 / 10" />
          <FilaInfo etiqueta="Nota final" valor="9.2 / 10" />
          <FilaInfo etiqueta="Posición" valor="3 de 120 aspirantes" />
        </Card>


        <Card titulo="Datos de la postulación">
          <FilaInfo etiqueta="Instituto" valor="Central Técnico, Quito" />
          <FilaInfo etiqueta="Modalidad" valor="Presencial · Matutina" />
          <FilaInfo etiqueta="Provincia" valor="Pichincha" />
          <FilaInfo etiqueta="Colegio" valor="U. E. Fiscal Mejía" />
          <FilaInfo etiqueta="Documentos" valor="4 de 4 entregados" />
        </Card>


        <Card titulo="Acciones">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Matricular"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Matrícula')}
            />
            <BotonAccion
              etiqueta="Retirar"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Retiro de postulación')}
            />
            <BotonAccion
              etiqueta="Documentos"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Envío de documentos')}
            />
            <BotonAccion
              etiqueta="Comprobante"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Descarga de comprobante')}
            />
          </View>
        </Card>

  
        {log.length > 0 && (
          <Card titulo="Actividad reciente">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card>
        )}
      </ScrollView>


      <ModalConfirm
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Registrar "${accionPendiente}" para Camila Andrade?\nEsta acción quedará en su expediente.`}
        etiquetaConfirmar="Confirmar"
        colorConfirmar={accionPendiente === 'Retiro de postulación' ? '#b71c1c' : '#1565c0'}
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
  },
  cabNombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
  },
  cabCarrera: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  entradaLog: {
    fontSize: 11,
    color: '#2e7d32',
    lineHeight: 18,
  },
})
