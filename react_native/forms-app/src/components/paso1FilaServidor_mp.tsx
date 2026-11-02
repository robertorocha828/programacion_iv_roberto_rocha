import { StyleSheet, Text, View } from 'react-native'

export type Aspirante = {
  id: string
  nombre: string
  carrera: string
  nota: number       
  admitido: boolean
}

export function Paso1FilaAspirante_mp({ aspirante }: { aspirante: Aspirante }) {
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
