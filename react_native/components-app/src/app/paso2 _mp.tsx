import { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'



interface CardProps {
  titulo: string
  subtitulo?: string
  children: ReactNode
}

export function Card({ titulo, subtitulo, children }: CardProps) {
  return (
    <View style={estilos2.card}>
      <View style={estilos2.cardCabecera}>
        <Text style={estilos2.cardTitulo}>{titulo}</Text>
        {subtitulo && (
          <Text style={estilos2.cardSubtitulo}>{subtitulo}</Text>
        )}
      </View>
      <View style={estilos2.cardCuerpo}>{children}</View>
    </View>
  )
}

export function FilaInfo({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={estilos2.fila}>
      <Text style={estilos2.etiqueta}>{etiqueta}</Text>
      <Text style={estilos2.valor}>{valor}</Text>
    </View>
  )
}

export function Paso2_mp() {
  return (
    <View style={estilos2.fondo}>
      <Text style={estilos2.titulo}>Detalle de postulación</Text>

      <Card titulo="Camila Andrade" subtitulo="Postulante a Desarrollo de Software">
        <FilaInfo etiqueta="Instituto" valor="Central Técnico" />
        <FilaInfo etiqueta="Modalidad" valor="Presencial" />
        <FilaInfo etiqueta="Jornada" valor="Matutina" />
        <FilaInfo etiqueta="Examen de acceso" valor="9.2 / 10" />
        <FilaInfo etiqueta="Promedio de bachillerato" valor="9.4 / 10" />
      </Card>

      <Card titulo="Proceso de admisión">
        <FilaInfo etiqueta="Etapa actual" valor="Entrevista" />
        <FilaInfo etiqueta="Documentos" valor="4 de 4 entregados" />
        <FilaInfo etiqueta="Última actualización" valor="hace 3 minutos" />
      </Card>
    </View>
  )
}

const estilos2 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardCabecera: {
    backgroundColor: '#1565c0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 2,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  cardSubtitulo: {
    fontSize: 12,
    color: '#bbdefb',
  },
  cardCuerpo: {
    padding: 12,
    gap: 8,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  etiqueta: {
    fontSize: 13,
    color: '#546e7a',
    fontWeight: '500',
  },
  valor: {
    fontSize: 13,
    color: '#1a1a1a',
    fontFamily: 'monospace',
  },
})
