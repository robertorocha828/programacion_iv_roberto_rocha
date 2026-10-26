import { Pressable, StyleSheet, Text, View } from 'react-native'



type EstadoPostulacion = 'admitido' | 'espera' | 'pendiente' | 'rechazado' | 'entrevista'

interface BadgeEstadoProps {
  estado: EstadoPostulacion
  tamaño?: number
  mostrarIcono?: boolean
}

const COLOR_ESTADO: Record<EstadoPostulacion, { fondo: string; texto: string }> = {
  admitido:   { fondo: '#e8f5e9', texto: '#2e7d32' },
  espera:     { fondo: '#fff8e1', texto: '#f57f17' },
  pendiente:  { fondo: '#f5f5f5', texto: '#616161' },
  rechazado:  { fondo: '#fce4ec', texto: '#c62828' },
  entrevista: { fondo: '#e1f5fe', texto: '#0288d1' },
}

const ICONO_ESTADO: Record<EstadoPostulacion, string> = {
  admitido:   '✓',
  espera:     '◐',
  pendiente:  '○',
  rechazado:  '✕',
  entrevista: '💬',
}

export function BadgeEstado({
  estado,
  tamaño = 12,
  mostrarIcono = false,
}: BadgeEstadoProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[estilos3.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3.icono, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos3.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {estado.toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaAspiranteProps {
  nombre: string
  carrera: string
  estado: EstadoPostulacion
  nota?: number          // sobre 10 — opcional
  onPress?: () => void
}

function FilaAspirante({ nombre, carrera, estado, nota, onPress }: FilaAspiranteProps) {
  return (
    <Pressable onPress={onPress} style={estilos3.fila}>
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.nombreAspirante}>{nombre}</Text>
        <Text style={estilos3.carreraTexto}>{carrera}</Text>
      </View>
      <View style={estilos3.infoDer}>
        {nota !== undefined && (
          <Text style={estilos3.nota}>{nota.toFixed(1)} / 10</Text>
        )}
        <BadgeEstado estado={estado} mostrarIcono={false} tamaño={11} />
      </View>
    </Pressable>
  )
}

export function Paso3_mp() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Estado de las postulaciones</Text>
      <FilaAspirante nombre="Camila Andrade"   carrera="Desarrollo de Software" estado="admitido"   nota={9.2} />
      <FilaAspirante nombre="Joselyn Quishpe"  carrera="Enfermería"             estado="admitido"   nota={8.7} />
      <FilaAspirante nombre="Mateo Pazmiño"    carrera="Mecánica Automotriz"    estado="espera"     nota={7.1} />
      <FilaAspirante nombre="Kevin Chicaiza"   carrera="Electricidad"           estado="rechazado" />
      <FilaAspirante nombre="Daniela Loor"     carrera="Gastronomía"            estado="pendiente" />
      <FilaAspirante nombre="Valeria Morocho"  carrera="Diseño Gráfico"         estado="entrevista" />
    </View>
  )
}

const estilos3 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 8,
  },
  fila: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  infoIzq: { gap: 2 },
  infoDer: { alignItems: 'flex-end', gap: 4 },
  nombreAspirante: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
  carreraTexto: { fontSize: 12, color: '#90a4ae' },
  nota: { fontSize: 11, color: '#546e7a' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  icono: { fontWeight: '700' },
  textoBadge: { fontWeight: '600' },
})
