import type { useInscripcionSimulada } from '@/hooks/useInscripcionSimulada'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface PropsTarjeta {
  nombre: string
  hook: ReturnType<typeof useInscripcionSimulada>
}

export function TarjetaAspirante_mp({ nombre, hook }: PropsTarjeta) {
  const { estado, intentos, tiempoRespuesta, enviarSolicitud, reiniciar } = hook

  const colorEstado: Record<string, string> = {
    sin_enviar: '#757575',
    enviando:   '#1565c0',
    enviada:    '#2e7d32',
    error:      '#c62828',
  }

  const etiquetaEstado: Record<string, string> = {
    sin_enviar: 'SIN ENVIAR',
    enviando:   'ENVIANDO',
    enviada:    'ENVIADA',
    error:      'ERROR',
  }

  const textoBoton: Record<string, string> = {
    sin_enviar: 'Enviar solicitud',
    enviando:   'Enviando…',
    enviada:    'Reenviar',
    error:      'Reintentar',
  }

  return (
    <View style={[styles.tarjeta, { borderColor: colorEstado[estado] }]}>
      <View style={styles.encabezado}>
        <Text style={styles.nombreAspirante}>{nombre}</Text>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {etiquetaEstado[estado]}
        </Text>
      </View>

      <Text style={styles.detalle}>
        Intentos: {intentos}
        {tiempoRespuesta !== null ? `  ·  Respuesta: ${tiempoRespuesta} ms` : ''}
      </Text>

      <View style={styles.botones}>
        <Pressable
          style={({ pressed }) => [
            styles.boton,
            estado === 'enviando' ? styles.botonDeshabilitado : styles.botonActivo,
            pressed && { opacity: 0.75 },
          ]}
          onPress={enviarSolicitud}
          disabled={estado === 'enviando'}
        >
          <Text style={styles.textoBoton}>{textoBoton[estado]}</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.botonSecundario, pressed && { opacity: 0.75 }]}
          onPress={reiniciar}
        >
          <Text style={styles.textoSecundario}>Reiniciar</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tarjeta: {
    width: '100%',
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    backgroundColor: '#fff',
    elevation: 2,
    gap: 6,
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nombreAspirante: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  botones: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  boton: {
    flex: 1,
    alignItems: 'center',
    padding: 14,
    borderRadius: 8,
  },
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  botonDeshabilitado: {
    backgroundColor: '#90a4ae',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  botonSecundario: {
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1565c0',
    justifyContent: 'center',
  },
  textoSecundario: {
    color: '#1565c0',
    fontSize: 13,
    fontWeight: 'bold',
  },
})
