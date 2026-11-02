import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { Link, router, Stack } from 'expo-router'


interface Aspirante {
  id: string
  nombre: string
  carrera: string
  nota: number   
  estado: 'admitido' | 'espera' | 'rechazado'
}

const ASPIRANTES: Aspirante[] = [
  { id: '1', nombre: 'Camila Andrade',  carrera: 'Desarrollo de Software', nota: 9.2, estado: 'admitido'  },
  { id: '2', nombre: 'Joselyn Quishpe', carrera: 'Enfermería',             nota: 8.7, estado: 'admitido'  },
  { id: '3', nombre: 'Daniela Loor',    carrera: 'Gastronomía',            nota: 7.4, estado: 'espera'    },
  { id: '4', nombre: 'Kevin Chicaiza',  carrera: 'Electricidad',           nota: 5.8, estado: 'rechazado' },
  { id: '5', nombre: 'Valeria Morocho', carrera: 'Diseño Gráfico',         nota: 8.9, estado: 'admitido'  },
]

const COLOR_ESTADO: Record<Aspirante['estado'], string> = {
  admitido:  '#2e7d32',
  espera:    '#e65100',
  rechazado: '#c62828',
}

export default function ListaAspirantes() {
  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: 'Aspirantes' }} />

      <FlatList
        data={ASPIRANTES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.tarjeta, pressed && styles.tarjetaPresionada]}
            onPress={() => router.push(`/servidores_mp/${item.id}`)}
          >
            <View style={styles.fila}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <View style={[styles.badge, { backgroundColor: COLOR_ESTADO[item.estado] }]}>
                <Text style={styles.badgeTexto}>{item.estado.toUpperCase()}</Text>
              </View>
            </View>
            <Text style={styles.carrera}>
              {item.carrera} · {item.nota.toFixed(1)} / 10
            </Text>
          </Pressable>
        )}
      />

      {/* Alternativa declarativa — un Link que lleva al primer aspirante */}
      <Link href="/servidores_mp/1" style={styles.enlaceDirecto}>
        Ir directo a Camila Andrade (Link declarativo)
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  lista:      { padding: 16, gap: 10 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 6,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tarjetaPresionada: { backgroundColor: '#e3f2fd' },
  fila:       { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  nombre:     { fontSize: 16, fontWeight: '600', color: '#1a1a1a' },
  carrera:    { fontSize: 13, color: '#1565c0' },
  badge: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeTexto:      { color: '#fff', fontSize: 11, fontWeight: '700' },
  enlaceDirecto: {
    textAlign: 'center',
    padding: 12,
    color: '#1565c0',
    fontSize: 14,
  },
})
