import { StyleSheet, Text, View } from 'react-native'
import { Aspirante } from './paso1FilaServidor_mp'

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

export function Paso1FilaPersonajes_mp({ aspirante }: { aspirante: AspirantePersonaje }) {
  return (
    <View style={styles1.fila}>
      <View style={styles1.info}>
        <Text style={styles1.nombre}>{aspirante.nombre}</Text>
        <Text style={styles1.carrera}>
          {aspirante.carrera} · {aspirante.nota.toFixed(1)} / 10
        </Text>
      </View>
      <View
        style={[
          styles1.estado,
          aspirante.admitido ? styles1.estadoActivo : styles1.estadoInactivo,
        ]}
      >
        <Text
          style={[
            styles1.textoEstado,
            { color: aspirante.admitido ? '#2e7d32' : '#f57f17' },
          ]}
        >
          {aspirante.admitido ? 'ADMITIDO' : 'EN ESPERA'}
        </Text>
      </View>
    </View>
  )
}


const styles1 = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  carrera: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoActivo: { backgroundColor: '#e8f5e9' },
  estadoInactivo: { backgroundColor: '#fff8e1' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})
