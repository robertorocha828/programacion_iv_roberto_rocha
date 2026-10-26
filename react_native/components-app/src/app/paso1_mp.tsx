import { StyleSheet, Text, View } from 'react-native'

interface TarjetaEstudianteProps {
  nombre: string
  carrera: string
  instituto: string
  notaExamen: number // sobre 10
  provincia?: string
}

function TarjetaEstudiante({ nombre, carrera, instituto, notaExamen, provincia }: TarjetaEstudianteProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreEstudiante}>{nombre}</Text>
      <Text style={styles.datoCarrera}>{carrera} · {instituto}</Text>
      <Text style={styles.datoNota}>Nota del examen: {notaExamen.toFixed(1)} / 10</Text>
      <Text style={styles.datoProvincia}>{provincia ?? 'Sin provincia'}</Text>
    </View>
  )
}

export function Paso1_mp() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Estudiantes inscritos</Text>
      <TarjetaEstudiante
        nombre="Camila Andrade"
        carrera="Desarrollo de Software"
        instituto="Central Técnico"
        notaExamen={9.2}
        provincia="Pichincha"
      />
      <TarjetaEstudiante
        nombre="Joselyn Quishpe"
        carrera="Enfermería"
        instituto="Central Técnico"
        notaExamen={8.7}
        provincia="Cotopaxi"
      />
      <TarjetaEstudiante
        nombre="Mateo Pazmiño"
        carrera="Mecánica Automotriz"
        instituto="Japón"
        notaExamen={8.1}
        provincia="Tungurahua"
      />
      <TarjetaEstudiante
        nombre="Daniela Loor"
        carrera="Gastronomía"
        instituto="Rumiñahui"
        notaExamen={7.4}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombreEstudiante: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoCarrera: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'serif',
  },
  datoNota: {
    fontSize: 12,
    color: '#757575',
  },
  datoProvincia: {
    fontSize: 12,
    color: '#757575',
  },
})
