// app/index.tsx
import { Paso1 } from '@/components/paso1'
import { Paso1_mp } from '@/components/paso1_mp'
import { Paso1Picapiedra } from '@/components/paso1Picapiedra'
import { Paso2 } from '@/components/paso2'
import { Paso2_mp } from '@/components/paso2_mp'
import { Paso3 } from '@/components/paso3'
import { Paso3_mp } from '@/components/paso3_mp'
import { Paso4 } from '@/components/paso4'
import { Paso4_mp } from '@/components/paso4_mp'
import { Paso5 } from '@/components/paso5'
import { Paso5_mp } from '@/components/paso5_mp'
import { Paso6 } from '@/components/paso6'
import { Paso6_mp } from '@/components/paso6_mp'
import { StyleSheet, Text, View } from 'react-native'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  Flexbox — flexDirection, justify, align, gap        │
// │  2  Paso 2  Unidades dp y la excepción del '%'                  │
// │  3  Paso 3  Dimensions vs useWindowDimensions — grid responsivo │
// │  4  Paso 4  Platform.OS y Platform.select — sombras             │
// │  5  Paso 5  useColorScheme — tema claro/oscuro                  │
// │  6  Paso 6  SafeAreaView y useSafeAreaInsets                    │
// │  7  Paso 7  Dashboard responsivo combinado                      │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 13

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso1Picapiedra />
    case 3:
      return <Paso2 />
    case 4:
      return <Paso3 />
    case 5:
      return <Paso4 />
    case 6:
      return <Paso5 />
    case 7:
      return <Paso6 />
    case 8:
      return <Paso1_mp />
    case 9:
      return <Paso2_mp />
    case 10:
      return <Paso3_mp />
    case 11:
      return <Paso4_mp />
    case 12:
      return <Paso5_mp />
    case 13:
      return <Paso6_mp />
    default:
      return (
        <View style={estilos.centrado}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

const estilos = StyleSheet.create({
  centrado: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo:   { fontSize: 18, fontWeight: '600' },
})