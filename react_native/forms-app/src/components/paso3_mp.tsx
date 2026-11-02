import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import { type Aspirante } from './paso1_mp'
import { Paso1FilaAspirante_mp } from './paso1FilaServidor_mp'
import { Paso3EncabezadoSeccion_mp } from './paso3EncabezadoSeccion_mp'

type SeccionInstituto = {
  title: string
  ciudad: string
  data: Aspirante[]
}

const SECCIONES: SeccionInstituto[] = [
  {
    title: 'Instituto Central Técnico',
    ciudad: 'Quito',
    data: [
      { id: 's1', nombre: 'Camila Andrade',  carrera: 'Desarrollo de Software', nota: 9.2, admitido: true  },
      { id: 's2', nombre: 'Joselyn Quishpe', carrera: 'Enfermería',             nota: 8.7, admitido: true  },
      { id: 's3', nombre: 'Daniela Loor',    carrera: 'Gastronomía',            nota: 7.4, admitido: false },
    ],
  },
  {
    title: 'Instituto Japón',
    ciudad: 'Quito',
    data: [
      { id: 's4', nombre: 'Mateo Pazmiño',   carrera: 'Mecánica Automotriz',    nota: 8.1, admitido: true  },
      { id: 's5', nombre: 'Kevin Chicaiza',  carrera: 'Electricidad',           nota: 7.0, admitido: false },
    ],
  },
  {
    title: 'Instituto Rumiñahui',
    ciudad: 'Sangolquí',
    data: [
      { id: 's6', nombre: 'Valeria Morocho', carrera: 'Diseño Gráfico',         nota: 8.9, admitido: true  },
      { id: 's7', nombre: 'Josué Naranjo',   carrera: 'Desarrollo de Software', nota: 9.5, admitido: true  },
      { id: 's8', nombre: 'Bryan Yánez',     carrera: 'Mecánica Automotriz',    nota: 7.1, admitido: false },
    ],
  },
]


export function Paso3_mp() {
  return (
    <SafeAreaView style={styles3.contenedor}>
      <Text style={styles3.tituloPantalla}>Admisión por instituto</Text>
      <SectionList<Aspirante, SeccionInstituto>
        sections={SECCIONES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaAspirante_mp aspirante={item} />}
        renderSectionHeader={({ section }) => (
          <Paso3EncabezadoSeccion_mp titulo={section.title} ciudad={section.ciudad} />
        )}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#e0e0e0', marginHorizontal: 12 }} />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  )
}

const styles3 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  tituloPantalla: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})
