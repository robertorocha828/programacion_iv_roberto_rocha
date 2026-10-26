import { StyleSheet, Text, View } from 'react-native'

export function Paso1_mp() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Sistema de Admisión</Text>
      <Text style={styles.subtitulo}>Instituto Superior Tecnológico Central Técnico</Text>
      <Text style={styles.detalle}>Quito · Proceso de admisión 2026</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    gap: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  subtitulo: {
    fontSize: 16,
    color: '#333',
  },
  detalle: {
    fontSize: 13,
    color: '#777',
  },
})
