import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import {
  AspiranteProvider,
  useAspirante,
  useCarrera,
} from '../context/AspiranteContext';



function Perfil() {
  const { aspirante, setAspirante } = useAspirante();
  const { carrera, setCarrera } = useCarrera();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Hola, {aspirante}
      </Text>

      <Button
        title="Cambiar aspirante"
        onPress={() =>
          setAspirante('Joselyn Quishpe')
        }
      />

      <Text style={styles.texto}>
        Carrera: {carrera || 'sin elegir'}
      </Text>

      <Button
        title="Elegir carrera"
        onPress={() =>
          setCarrera('Enfermería')
        }
      />
    </View>
  );
}


export function Paso5_mp() {
  return (
    <AspiranteProvider>
      <Perfil />
    </AspiranteProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});
