// app/index.tsx
import { Paso1 } from '@/components/paso1'
import { Paso1_mp } from '@/components/paso1_mp'
import { Paso2 } from '@/components/paso2'
import { Paso2_mp } from '@/components/paso2_mp'
import { Paso3 } from '@/components/paso3'
import { Paso3_mp } from '@/components/paso3_mp'
import { Paso4 } from '@/components/paso4'
import { Paso4_mp } from '@/components/paso4_mp'
import { Paso4Volumen } from '@/components/paso4Volumen'
import { Paso5 } from '@/components/paso5'
import { Paso5_mp } from '@/components/paso5_mp'
import { Paso6 } from '@/components/paso6'
import { StyleSheet, Text, View } from 'react-native'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos.     │
// │  1  FlatList básica — servidores con nombre/IP/estado               │
// │  2  FlatList avanzada — separadores, vacío, refresh, paginación     │
// │  3  SectionList — servidores agrupados por datacenter               │
// │  4  TextInput tipado — campo de IP con teclado controlado           │
// │  5  Formulario con validación — agregar servidor                    │
// │  6  KeyboardAvoidingView — formulario sin tapado de teclado         │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 12

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <Paso4 />
    case 5:
      return <Paso4Volumen />
    case 6:
      return <Paso5 />
    case 7:
      return <Paso6 />
    case 8:
      return <Paso1_mp />
    case 9:
      return <Paso2_mp/>
    case 10:
      return <Paso3_mp/>
    case 11:
      return <Paso4_mp/>
    case 12:
      return <Paso5_mp/>
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  centrado: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})

// Los componentes Paso1…Paso6 se añaden en cada sección del tutorial.