import {
    memo,
    useCallback,
    useState,
} from 'react';


import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';


interface Aspirante {
  id: number;
  nombre: string;
  carrera: string;
  nota: number;   // sobre 10
}


interface AspiranteItemProps {
  aspirante: Aspirante;
  onEliminar: (id: number) => void;
}


const NUEVOS_ASPIRANTES: Omit<Aspirante, 'id'>[] = [
  { nombre: 'Daniela Loor', carrera: 'Gastronomía', nota: 7.4 },
  { nombre: 'Valeria Morocho', carrera: 'Diseño Gráfico', nota: 8.9 },
  { nombre: 'Josué Naranjo', carrera: 'Desarrollo de Software', nota: 9.5 },
];


const AspiranteItem = memo(
  ({ aspirante, onEliminar }: AspiranteItemProps) => {
    console.log('Renderizando:', aspirante.nombre);


    return (
      <View style={styles.aspirante}>
        <Text>
          {aspirante.nombre} - {aspirante.carrera}
        </Text>
        <Text>Nota: {aspirante.nota.toFixed(1)} / 10</Text>


        <Button
          title="Eliminar"
          onPress={() => onEliminar(aspirante.id)}
        />
      </View>
    );
  }
);


export function Paso7_mp() {
  const [aspirantes, setAspirantes] = useState<Aspirante[]>([
    { id: 1, nombre: 'Camila Andrade', carrera: 'Desarrollo de Software', nota: 9.2 },
    { id: 2, nombre: 'Joselyn Quishpe', carrera: 'Enfermería', nota: 8.7 },
  ]);


  const [contador, setContador] = useState(0);


  const eliminarAspirante = useCallback((id: number) => {
    setAspirantes((actuales) =>
      actuales.filter((aspirante) => aspirante.id !== id)
    );
  }, []);


  const agregarAspirante = useCallback(() => {
    setAspirantes((actuales) => {
      const siguiente = NUEVOS_ASPIRANTES[actuales.length % NUEVOS_ASPIRANTES.length]
        ?? { nombre: 'Daniela Loor', carrera: 'Gastronomía', nota: 7.4 };

      return [...actuales, { id: Date.now(), ...siguiente }];
    });
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Aspirantes inscritos
      </Text>


      <Text>Contador: {contador}</Text>


      <Button
        title="Incrementar contador"
        onPress={() => setContador((c) => c + 1)}
      />


      <Button
        title="Agregar aspirante"
        onPress={agregarAspirante}
      />


      <FlatList
        data={aspirantes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <AspiranteItem
            aspirante={item}
            onEliminar={eliminarAspirante}
          />
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    gap: 12,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  aspirante: {
    padding: 12,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    gap: 8,
  },
});
