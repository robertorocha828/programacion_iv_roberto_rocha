import { useMemo, useState } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';


interface Rubro {
  nombre: string;
  precio: number;   // en dólares (USD)
  cantidad: number;
}


export function Paso6_mp() {
  const [rubros, setRubros] = useState<Rubro[]>([
    { nombre: 'Certificado de notas', precio: 5, cantidad: 2 },
    { nombre: 'Copia certificada del título', precio: 2, cantidad: 3 },
    { nombre: 'Derecho de inscripción', precio: 25, cantidad: 1 },
  ]);


  const [contador, setContador] = useState<number>(0);



  const total = useMemo(() => {
    console.log('Calculando total...');


    return rubros.reduce(
      (acumulado, rubro) =>
        acumulado + rubro.precio * rubro.cantidad,
      0
    );
  }, [rubros]);


  function agregarNivelacion() {
    setRubros((actuales) => [
      ...actuales,
      { nombre: 'Curso de nivelación', precio: 30, cantidad: 1 },
    ]);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Costos de inscripción
      </Text>


      <Text>Rubros: {rubros.length}</Text>


      <Text style={styles.total}>
        Total: ${total.toFixed(2)}
      </Text>


      <Button
        title="Incrementar contador"
        onPress={() => setContador((c) => c + 1)}
      />


      <Text>Consultas realizadas: {contador}</Text>


      <Button
        title="Agregar curso de nivelación"
        onPress={agregarNivelacion}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
