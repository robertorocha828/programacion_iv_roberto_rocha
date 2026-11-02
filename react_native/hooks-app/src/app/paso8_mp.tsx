import { useInscripcionSimulada } from '@/hooks/useInscripcionSimulada'
import { StyleSheet, Text, View } from 'react-native'
import { TarjetaAspirante_mp } from './paso8TarjetaAspirante_mp'

export function Paso8_mp() {
  const camilaHook = useInscripcionSimulada('Camila Andrade')
  const mateoHook  = useInscripcionSimulada('Mateo Pazmiño')

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Estado de inscripciones</Text>

      <TarjetaAspirante_mp nombre="Camila Andrade" hook={camilaHook} />
      <TarjetaAspirante_mp nombre="Mateo Pazmiño" hook={mateoHook} />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    marginBottom: 4,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
