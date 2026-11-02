import { useCallback, useState } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { type Aspirante, ASPIRANTES } from './paso1_mp'
import { Paso1FilaAspirante_mp } from './paso1FilaServidor_mp'
import { Paso2ListaVacia_mp } from './paso2ListaVacia_mp'
import { Paso2Separador_mp } from './paso2Separador_mp'


const PAGINA_2: Aspirante[] = [
  { id: '9',  nombre: 'Michelle Cobos', carrera: 'Enfermería',   nota: 8.2, admitido: true  },
  { id: '10', nombre: 'Dayana Tapia',   carrera: 'Electricidad', nota: 7.7, admitido: false },
]



export function Paso2_mp() {
  const [datos, setDatos] = useState<Aspirante[]>(ASPIRANTES)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)

  const onRefresh = useCallback(() => {
    setRefrescando(true)

    setTimeout(() => {
      setDatos(ASPIRANTES) 
      setPaginaActual(1)
      setRefrescando(false)
    }, 1000)
  }, [])

  const onEndReached = useCallback(() => {
    if (cargandoMas || paginaActual >= 2) return
    setCargandoMas(true)
    setTimeout(() => {
      setDatos((prev) => [...prev, ...PAGINA_2])
      setPaginaActual(2)
      setCargandoMas(false)
    }, 800)
  }, [cargandoMas, paginaActual])

  return (
    <SafeAreaView style={styles2.contenedor}>
      <Text style={styles2.titulo}>Aspirantes · p.{paginaActual}</Text>
      <FlatList<Aspirante>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaAspirante_mp aspirante={item} />}
        ItemSeparatorComponent={Paso2Separador_mp}
        ListEmptyComponent={<Paso2ListaVacia_mp />}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          cargandoMas ? (
            <ActivityIndicator style={{ margin: 16 }} color="#1565c0" />
          ) : undefined
        }
      />
    </SafeAreaView>
  )
}

const styles2 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})
