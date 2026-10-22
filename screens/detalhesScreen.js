import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';

export default function DetalhesScreen({ route, navigation }) {
const { titulo, descricao, tipo } = route.params;

useEffect(() => {
    navigation.setOptions({
      title: titulo
    });
  }, [navigation, titulo]);


  return (
    <View style={styles.container}>
      <Text style={styles.tipo}>{tipo}</Text>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.conteudo}>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  tipo: {
    fontSize: 14,
    color: '#888',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  conteudo: {
    fontSize: 16,
    lineHeight: 24,
  },
});