import { StyleSheet, Text, View } from "react-native";

export function Paso3EncabezadoSeccion_mp({ titulo, ciudad }: { titulo: string; ciudad: string }) {
  return (
    <View style={styles3.encabezado}>
      <Text style={styles3.encabezadoTitulo}>{titulo}</Text>
      <Text style={styles3.encabezadoCiudad}>{ciudad}</Text>
    </View>
  )
}

const styles3 = StyleSheet.create({
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#1565c0',
  },
  encabezadoTitulo: { fontSize: 13, fontWeight: '700', color: '#0d47a1' },
  encabezadoCiudad: { fontSize: 11, color: '#546e7a', fontFamily: 'monospace' },
})
