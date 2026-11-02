import {
    createContext,
    useCallback,
    useContext,
    useState,
    type ReactNode,
} from 'react'
import {
    Pressable,
    ScrollView,
    Text,
    useColorScheme,
    View
} from 'react-native'

const PALETA = {
  claro: {
    fondo:      '#f5f7fa',
    superficie: '#ffffff',
    texto:      '#1a1a2e',
    textoSutil: '#6b7280',
    primario:   '#1565c0',
    peligro:    '#c62828',
    borde:      '#e2e8f0',
    exito:      '#2e7d32',
    alerta:     '#e65100',
  },
  oscuro: {
    fondo:      '#0d1117',
    superficie: '#161b22',
    texto:      '#e6edf3',
    textoSutil: '#8b949e',
    primario:   '#58a6ff',
    peligro:    '#ff7b72',
    borde:      '#30363d',
    exito:      '#3fb950',
    alerta:     '#f0883e',
  },
} as const

type ColoresTema = Record<keyof typeof PALETA.claro, string>

type ContextoTema = {
  colores: ColoresTema
  temaForzado: 'claro' | 'oscuro' | null
  alternarTema: () => void
}

const TemaContext = createContext<ContextoTema | null>(null)

function ProveedorTema({ children }: { children: ReactNode }) {
  const esquemaSistema = useColorScheme()
  const [temaForzado, setTemaForzado] = useState<'claro' | 'oscuro' | null>(null)

  const temaActivo = temaForzado ?? (esquemaSistema === 'dark' ? 'oscuro' : 'claro')
  const colores = PALETA[temaActivo]

  const alternarTema = useCallback(() => {
    setTemaForzado((prev) => {
      if (prev === null) return temaActivo === 'claro' ? 'oscuro' : 'claro'
      return prev === 'claro' ? 'oscuro' : 'claro'
    })
  }, [temaActivo])

  return (
    <TemaContext.Provider value={{ colores, temaForzado, alternarTema }}>
      {children}
    </TemaContext.Provider>
  )
}

function useTema(): ContextoTema {
  const ctx = useContext(TemaContext)
  if (!ctx) throw new Error('useTema debe usarse dentro de ProveedorTema')
  return ctx
}

export function Paso5_mp() {
  return (
    <ProveedorTema>
      <PantallaAdmisionTema />
    </ProveedorTema>
  )
}

function PantallaAdmisionTema() {
  const { colores, temaForzado, alternarTema } = useTema()
  const esquemaSistema = useColorScheme()

  const aspirantes = [
    { id: '1', nombre: 'Camila Andrade', detalle: 'Desarrollo de Software · 9.2 / 10', estado: 'admitido'  as const },
    { id: '2', nombre: 'Daniela Loor',   detalle: 'Gastronomía · 7.4 / 10',            estado: 'espera'    as const },
    { id: '3', nombre: 'Bryan Yánez',    detalle: 'Mecánica Automotriz · pendiente',   estado: 'pendiente' as const },
  ]

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colores.fondo }}
      contentContainerStyle={{ padding: 16, gap: 12 }}
    >
      {/* Cabecera con botón de cambio de tema */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
      }}>
        <Text style={{ fontSize: 20, fontWeight: '700', color: colores.texto }}>
          Admisión 2026
        </Text>
        <Pressable
          onPress={alternarTema}
          style={{
            backgroundColor: colores.primario,
            paddingVertical: 6,
            paddingHorizontal: 14,
            borderRadius: 999,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 13, fontWeight: '600' }}>
            {temaForzado === null
              ? `Sistema (${esquemaSistema ?? 'desconocido'})`
              : temaForzado === 'claro' ? 'Claro' : 'Oscuro'}
          </Text>
        </Pressable>
      </View>

      {/* Tarjetas de aspirantes con colores del tema */}
      {aspirantes.map((asp) => {
        const colorEstado =
          asp.estado === 'admitido'  ? colores.exito  :
          asp.estado === 'espera'    ? colores.alerta :
          colores.textoSutil

        return (
          <View
            key={asp.id}
            style={{
              backgroundColor: colores.superficie,
              borderRadius: 10,
              padding: 14,
              borderWidth: 1,
              borderColor: colores.borde,
              gap: 4,
            }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 14, fontWeight: '700', color: colores.texto }}>
                {asp.nombre}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: '600', color: colorEstado }}>
                {asp.estado.toUpperCase()}
              </Text>
            </View>
            <Text style={{ fontSize: 12, color: colores.textoSutil }}>{asp.detalle}</Text>
          </View>
        )
      })}

      {/* Mini paleta activa */}
      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
        {(Object.entries(colores) as [string, string][]).map(([clave, valor]) => (
          <View key={clave} style={{ alignItems: 'center', gap: 2 }}>
            <View style={{
              width: 36, height: 36, borderRadius: 18,
              backgroundColor: valor,
              borderWidth: 1, borderColor: colores.borde,
            }} />
            <Text style={{ fontSize: 9, color: colores.textoSutil }}>{clave}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
