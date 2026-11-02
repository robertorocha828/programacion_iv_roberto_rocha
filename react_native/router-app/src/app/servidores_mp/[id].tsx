import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Stack, useLocalSearchParams, router } from 'expo-router'

interface DetalleAspirante {
  nombre:       string
  carrera:      string
  instituto:    string
  examen:       number   
  entrevista:   number   
  bachillerato: number   
  documentos:   string[]
  ultimaActualizacion: string
}

const DB_ASPIRANTES: Record<string, DetalleAspirante> = {
  '1': {
    nombre: 'Camila Andrade', carrera: 'Desarrollo de Software',
    instituto: 'Instituto Central Técnico · Quito',
    examen: 9.2, entrevista: 9.0, bachillerato: 9.4,
    documentos: [
      'Copia de cédula (entregado)',
      'Título de bachiller (entregado)',
      'Certificado de notas (entregado)',
      'Foto tamaño carné (entregado)',
    ],
    ultimaActualizacion: 'hace 12 s',
  },
  '2': {
    nombre: 'Joselyn Quishpe', carrera: 'Enfermería',
    instituto: 'Instituto Central Técnico · Quito',
    examen: 8.7, entrevista: 8.5, bachillerato: 9.0,
    documentos: [
      'Copia de cédula (entregado)',
      'Título de bachiller (entregado)',
      'Certificado de notas (entregado)',
      'Foto tamaño carné (entregado)',
    ],
    ultimaActualizacion: 'hace 5 s',
  },
  '3': {
    nombre: 'Daniela Loor', carrera: 'Gastronomía',
    instituto: 'Instituto Rumiñahui · Sangolquí',
    examen: 7.4, entrevista: 8.0, bachillerato: 7.2,
    documentos: [
      'Copia de cédula (entregado)',
      'Título de bachiller (entregado)',
      'Certificado de notas (entregado)',
      'Foto tamaño carné (pendiente)',
    ],
    ultimaActualizacion: 'hace 2 min',
  },
  '4': {
    nombre: 'Kevin Chicaiza', carrera: 'Electricidad',
    instituto: 'Instituto Japón · Quito',
    examen: 5.8, entrevista: 6.4, bachillerato: 7.0,
    documentos: [
      'Copia de cédula (entregado)',
      'Título de bachiller (pendiente)',
      'Certificado de notas (pendiente)',
    ],
    ultimaActualizacion: 'sin actualizar',
  },
  '5': {
    nombre: 'Valeria Morocho', carrera: 'Diseño Gráfico',
    instituto: 'Instituto Japón · Quito',
    examen: 8.9, entrevista: 9.1, bachillerato: 8.8,
    documentos: [
      'Copia de cédula (entregado)',
      'Título de bachiller (entregado)',
      'Certificado de notas (entregado)',
      'Foto tamaño carné (entregado)',
    ],
    ultimaActualizacion: 'hace 8 s',
  },
}

const sobre10 = (nota: number) => `${nota.toFixed(1)} / 10`

function FilaDetalle({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={styles.fila}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  )
}

export default function DetalleAspirante() {
  // useLocalSearchParams lee el segmento capturado por [id].tsx
  const { id } = useLocalSearchParams<{ id: string }>()
  const aspirante = DB_ASPIRANTES[id ?? '']

  if (!aspirante) {
    return (
      <View style={styles.centrado}>
        <Stack.Screen options={{ title: 'No encontrado' }} />
        <Text style={styles.error}>Aspirante "{id}" no encontrado</Text>
        <Text style={styles.enlace} onPress={() => router.back()}>
          ← Volver a la lista
        </Text>
      </View>
    )
  }

  const notaFinal = (aspirante.examen + aspirante.entrevista + aspirante.bachillerato) / 3

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>
      <Stack.Screen options={{ title: aspirante.nombre }} />

      <View style={styles.encabezado}>
        <Text style={styles.nombreAspirante}>{aspirante.nombre}</Text>
        <Text style={styles.carreraAspirante}>{aspirante.carrera}</Text>
        <Text style={styles.institutoAspirante}>{aspirante.instituto}</Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>RESULTADOS</Text>
        <FilaDetalle etiqueta="Examen de acceso"          valor={sobre10(aspirante.examen)} />
        <FilaDetalle etiqueta="Entrevista"                valor={sobre10(aspirante.entrevista)} />
        <FilaDetalle etiqueta="Promedio de bachillerato"  valor={sobre10(aspirante.bachillerato)} />
        <FilaDetalle etiqueta="Nota final"                valor={sobre10(notaFinal)} />
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>TRÁMITE</Text>
        <FilaDetalle etiqueta="Última actualización" valor={aspirante.ultimaActualizacion} />
        {aspirante.documentos.map((d) => (
          <FilaDetalle key={d} etiqueta="Documento" valor={d} />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll:      { flex: 1, backgroundColor: '#f0f4f8' },
  contenido:   { padding: 16, gap: 16 },
  centrado:    { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  error:       { fontSize: 16, color: '#c62828' },
  enlace:      { fontSize: 14, color: '#1565c0' },
  encabezado: {
    backgroundColor: '#1565c0',
    borderRadius: 12,
    padding: 20,
    gap: 4,
  },
  nombreAspirante:    { fontSize: 22, fontWeight: '700', color: '#fff' },
  carreraAspirante:   { fontSize: 14, color: '#bbdefb' },
  institutoAspirante: { fontSize: 13, color: '#90caf9' },
  seccion: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tituloSeccion: {
    fontSize: 11,
    fontWeight: '700',
    color: '#78909c',
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  fila:     { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  etiqueta: { fontSize: 13, color: '#546e7a', fontWeight: '500' },
  valor:    { fontSize: 13, color: '#1a1a1a', flexShrink: 1, textAlign: 'right' },
})
