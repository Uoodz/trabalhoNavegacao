import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Cards from './components/cards';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.noticias}>
          <Text style={styles.tituloPrincipal}>Notícias</Text>
        </View>

        <Text style={{fontWeight: 'bold', fontSize: 20, padding: 20}}>Tecnologia</Text>

        <View style={styles.cardsNoticias}>
          <Cards titulos='React Native lança nova versão' descricao='Nova versão do React Native é lançada e promete trazer melhorias de perfomace.' />

          <Cards titulos='Nova IA no mercado promete superar as outras' descricao='Uma nova Inteligencia Artificial é lançada no mês de outubro e promete desbancar concorrentes.' />

          <Cards titulos='A linguagem Python acaba de revolucionar o desenvolvimento de software' descricao='A linguagem de programação Python acaba de receber uma atualização que impactará o desenvolvimento de software.' />

          <Cards titulos='Microsoft relata trabalhar em uma nova linguagem de programação' descricao='A empresa Microsoft divulgou recentemente que está trabalhando em uma nova linguagem de programação.' />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
  },

  noticias: {
    alignItems: 'center',
  },

  cardsNoticias: {
    alignItems: 'start',
    marginLeft: 10,
  },

  tituloPrincipal: {  
    fontWeight: 'bold',
    fontSize: 30,
  },
});
