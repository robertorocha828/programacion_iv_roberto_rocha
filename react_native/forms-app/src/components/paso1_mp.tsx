import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { type Aspirante, Paso1FilaAspirante_mp } from './paso1FilaServidor_mp'


export type AspirantePersonaje = {
  id: string
  nombre: string
  carrera: string
  nota: number        
  admitido: boolean
}

export const ASPIRANTES: Aspirante[] = [
  { id: '1', nombre: 'Camila Andrade',  carrera: 'Desarrollo de Software', nota: 9.2, admitido: true  },
  { id: '2', nombre: 'Joselyn Quishpe', carrera: 'Enfermería',             nota: 8.7, admitido: true  },
  { id: '3', nombre: 'Mateo Pazmiño',   carrera: 'Mecánica Automotriz',    nota: 8.1, admitido: true  },
  { id: '4', nombre: 'Daniela Loor',    carrera: 'Gastronomía',            nota: 7.4, admitido: false },
  { id: '5', nombre: 'Valeria Morocho', carrera: 'Diseño Gráfico',         nota: 8.9, admitido: true  },
  { id: '6', nombre: 'Josué Naranjo',   carrera: 'Desarrollo de Software', nota: 9.5, admitido: true  },
  { id: '7', nombre: 'Bryan Yánez',     carrera: 'Mecánica Automotriz',    nota: 7.1, admitido: false },
  { id: '8', nombre: 'Kevin Chicaiza',  carrera: 'Electricidad',           nota: 7.0, admitido: false },
]

export function Paso1_mp() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Aspirantes del proceso 2026</Text>
      <FlatList<Aspirante>
        data={ASPIRANTES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaAspirante_mp aspirante={item} />}
      />
    </SafeAreaView>
  )
}

const styles1 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  }
})
