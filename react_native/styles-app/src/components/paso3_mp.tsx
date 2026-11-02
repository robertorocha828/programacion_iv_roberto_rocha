import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

type Aspirante = {
  id: string
  nombre: string
  carrera: string
  estado: 'admitido' | 'espera' | 'pendiente'
  nota: number  
}

const ASPIRANTES: Aspirante[] = [
  { id: '1', nombre: 'Camila Andrade',  carrera: 'Desarrollo de Software', estado: 'admitido',  nota: 9.2 },
  { id: '2', nombre: 'Hernan Varas', carrera: 'Enfermería',             estado: 'admitido',  nota: 8.7 },
  { id: '3', nombre: 'Roberto Rocha',   carrera: 'Mecánica Automotriz',    estado: 'admitido',  nota: 8.1 },
  { id: '4', nombre: 'Christian Cañar',    carrera: 'Gastronomía',            estado: 'espera',    nota: 7.4 },
  { id: '5', nombre: 'Valeria Morocho', carrera: 'Diseño Gráfico',         estado: 'admitido',  nota: 8.9 },
  { id: '6', nombre: 'Kevin Chicaiza',  carrera: 'Electricidad',           estado: 'espera',    nota: 7.0 },
  { id: '7', nombre: 'Josué Naranjo',   carrera: 'Desarrollo de Software', estado: 'admitido',  nota: 9.5 },
  { id: '8', nombre: 'Bryan Yánez',     carrera: 'Mecánica Automotriz',    estado: 'pendiente', nota: 0   },
]

const COLOR_ESTADO: Record<Aspirante['estado'], string> = {
  admitido:  '#2e7d32',
  espera:    '#e65100',
  pendiente: '#6b7280',
}

export function Paso3_mp() {
  const { width } = useWindowDimensions()

  const columnas = width >= 600 ? 4 : 2
  const GAP = 12
  const anchoTarjeta = (width - 32 - GAP * (columnas - 1)) / columnas

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f5f7fa' }}
      contentContainerStyle={{ padding: 16, gap: GAP }}
    >
      <Text style={estilosPaso3.cabecera}>
        Panel de admisión · {width}dp · {columnas} col
      </Text>

      <View style={[estilosPaso3.rejilla, { gap: GAP }]}>
        {ASPIRANTES.map((asp) => (
          <TarjetaAspirante
            key={asp.id}
            aspirante={asp}
            ancho={anchoTarjeta}
          />
        ))}
      </View>
    </ScrollView>
  )
}

function TarjetaAspirante({
  aspirante,
  ancho,
}: {
  aspirante: Aspirante
  ancho: number
}) {
  const colorEstado = COLOR_ESTADO[aspirante.estado]

  return (
    <View style={[estilosPaso3.tarjeta, { width: ancho }]}>
      <View style={[estilosPaso3.indicadorEstado, { backgroundColor: colorEstado }]} />

      <Text style={estilosPaso3.nombreAspirante} numberOfLines={1}>
        {aspirante.nombre}
      </Text>
      <Text style={estilosPaso3.carrera} numberOfLines={1}>{aspirante.carrera}</Text>

      <View style={estilosPaso3.barraFondo}>
        <View
          style={[
            estilosPaso3.barraRelleno,
            {
              width: `${Math.round(aspirante.nota * 10)}%`,
              backgroundColor: aspirante.nota < 7 ? '#c62828' : '#1565c0',
            },
          ]}
        />
      </View>
      <Text style={estilosPaso3.nota}>
        {aspirante.estado === 'pendiente'
          ? 'Examen pendiente'
          : `Nota: ${aspirante.nota.toFixed(1)} / 10`}
      </Text>
    </View>
  )
}

const estilosPaso3 = StyleSheet.create({
  cabecera: {
    fontSize: 13,
    color: '#6b7280',
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 12,
    gap: 4,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  indicadorEstado: {
    width: 8,
    height: 8,
    borderRadius: 4,
    alignSelf: 'flex-end',
    marginBottom: 4,
  },
  nombreAspirante: { fontSize: 13, fontWeight: '700', color: '#1a1a2e' },
  carrera:         { fontSize: 11, color: '#6b7280' },
  barraFondo: {
    height: 6,
    backgroundColor: '#e2e8f0',
    borderRadius: 3,
    marginTop: 6,
    overflow: 'hidden',
  },
  barraRelleno: { height: 6, borderRadius: 3 },
  nota:         { fontSize: 11, color: '#6b7280' },
})
