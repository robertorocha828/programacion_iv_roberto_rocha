// app/index.tsx
import { Text, View } from 'react-native'
import { Paso1 } from './paso1'
import { Paso1_mp } from './paso1_mp'
import { Paso2 } from './paso2'
import { Paso2_mp } from './paso2_mp'
import { Paso3 } from './paso3'
import { Paso3_mp } from './paso3_mp'
import { Paso3Suma } from './paso3Suma'
import { Paso4 } from './paso4'
import { Paso4_mp } from './paso4_mp'
import { Paso6 } from './paso6'
import { Paso7 } from './paso7'
import { Paso8 } from './paso8'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  useState — contador de reintentos                    │
// │  2  Paso 2  useEffect — ping periódico con setInterval           │
// │  3  Paso 3  useRef — foco en TextInput y contador sin re-render  │
// │  4  Paso 4  Hooks nativos de RN — dimensiones, esquema de color  │
// │  5  Paso 5  Custom hook — useConexionSimulada                    │
// │  6  Paso 6  Ejemplo combinado — pantalla de estado del servidor  │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 12

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 3.1:
      return <Paso3Suma />
    case 4:
      return <Paso4 />
    case 5:
      return <Paso1_mp />
    case 6:
      return <Paso2_mp />
    case 7:
      return <Paso3_mp />
    case 8:
      return <Paso4_mp />
    case 9:
      return <Paso5 />
    case 10:
      return <Paso6 />
    case 11:
      return <Paso7 />
    case 12:
      return <Paso8 />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}
