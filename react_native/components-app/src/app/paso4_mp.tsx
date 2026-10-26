import { DimensionValue, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'


const ASPIRANTES_DEMO = [
  { id: '1',  nombre: 'Camila Andrade',   ciudad: 'Quito',         carrera: 'Desarrollo de Software', examen: 9.2, entrevista: 9.0 },
  { id: '2',  nombre: 'Joselyn Quishpe',  ciudad: 'Latacunga',     carrera: 'Enfermería',             examen: 8.7, entrevista: 8.5 },
  { id: '3',  nombre: 'Mateo Pazmiño',    ciudad: 'Ambato',        carrera: 'Mecánica Automotriz',    examen: 7.1, entrevista: 7.8 },
  { id: '4',  nombre: 'Kevin Chicaiza',   ciudad: 'Ibarra',        carrera: 'Electricidad',           examen: 5.8, entrevista: 6.4 },
  { id: '5',  nombre: 'Daniela Loor',     ciudad: 'Portoviejo',    carrera: 'Gastronomía',            examen: 7.4, entrevista: 8.0 },
  { id: '6',  nombre: 'Valeria Morocho',  ciudad: 'Riobamba',      carrera: 'Diseño Gráfico',         examen: 8.9, entrevista: 9.1 },
  { id: '7',  nombre: 'Josué Naranjo',    ciudad: 'Ambato',        carrera: 'Desarrollo de Software', examen: 9.5, entrevista: 8.8 },
  { id: '8',  nombre: 'Michelle Cobos',   ciudad: 'Cuenca',        carrera: 'Enfermería',             examen: 8.2, entrevista: 9.0 },
  { id: '9',  nombre: 'Bryan Yánez',      ciudad: 'Machala',       carrera: 'Mecánica Automotriz',    examen: 6.9, entrevista: 7.2 },
  { id: '10', nombre: 'Dayana Tapia',     ciudad: 'Guayaquil',     carrera: 'Electricidad',           examen: 7.7, entrevista: 7.5 },
  { id: '11', nombre: 'Cristhian Ayala',  ciudad: 'Santo Domingo', carrera: 'Gastronomía',            examen: 6.2, entrevista: 6.8 },
  { id: '12', nombre: 'Ariana Bastidas',  ciudad: 'Esmeraldas',    carrera: 'Diseño Gráfico',         examen: 8.0, entrevista: 8.4 },
]

interface BarraNotaProps {
  nota: number 
  etiqueta: string
}

function BarraNota({ nota, etiqueta }: BarraNotaProps) {
  const color = nota >= 8 ? '#2e7d32'
              : nota >= 7 ? '#f57f17'
              : '#c62828'
  const ancho = `${Math.round(nota * 10)}%` as DimensionValue
  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View style={[estilos4.barraRelleno, { width: ancho, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4.barraNota, { color }]}>{nota.toFixed(1)}</Text>
    </View>
  )
}

function TarjetaAspirante({ nombre, ciudad, carrera, examen, entrevista }: typeof ASPIRANTES_DEMO[0]) {
  return (
    <View style={estilos4.nodo}>
      <View style={estilos4.nodoEncabezado}>
        <Text style={estilos4.nodoNombre}>{nombre}</Text>
        <Text style={estilos4.nodoCiudad}>{ciudad}</Text>
      </View>
      <Text style={estilos4.nodoCarrera}>{carrera}</Text>
      <BarraNota nota={examen} etiqueta="Exam" />
      <BarraNota nota={entrevista} etiqueta="Entr" />
    </View>
  )
}

export function Paso4_mp() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Aspirantes del proceso 2026</Text>
        <Text style={estilos4.headerSub}>{ASPIRANTES_DEMO.length} aspirantes · notas sobre 10</Text>
      </View>
      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {ASPIRANTES_DEMO.map((asp) => (
          <TarjetaAspirante key={asp.id} {...asp} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1b2a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1c2e40',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  headerSub: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 2,
  },
  scroll: { flex: 1 },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  nodo: {
    backgroundColor: '#132232',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c3548',
  },
  nodoEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  nodoNombre: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  nodoCiudad: {
    fontSize: 12,
    color: '#4fc3f7',
  },
  nodoCarrera: {
    fontSize: 11,
    color: '#546e7a',
    marginBottom: 2,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    fontSize: 11,
    color: '#78909c',
    width: 32,
  },
  barraFondo: {
    flex: 1,
    height: 4,
    backgroundColor: '#1c3548',
    borderRadius: 2,
    overflow: 'hidden',
  },
  barraRelleno: {
    height: '100%',
    borderRadius: 2,
  },
  barraNota: {
    fontSize: 11,
    fontWeight: '600',
    width: 30,
    textAlign: 'right',
  },
})
