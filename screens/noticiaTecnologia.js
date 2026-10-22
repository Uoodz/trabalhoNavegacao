import { View, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cards from '../components/cards'

const TecnologiaScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View>
                    <View style={styles.cardsNoticias}>
                        <Cards tipo='Tecnologia' titulos='React Native lança nova versão' descricao='Nova versão do React Native é lançada e promete trazer melhorias de perfomace.' 
                        onPress={() => navigation.navigate('Detalhes', {tipo: 'Tecnologia', titulo: 'React Native lança nova versão', descricao: 'Nova versão do React Native é lançada e promete trazer melhorias de perfomace.'})}/>

                        <Cards tipo='Tecnologia' titulos='Nova IA no mercado promete superar as outras' descricao='Uma nova Inteligencia Artificial é lançada no mês de outubro e promete desbancar concorrentes.'
                        onPress={() => navigation.navigate('Detalhes', {tipo: 'Tecnologia', titulo: 'Nova IA no mercado promete superar as outras', descricao: 'Uma nova Inteligencia Artificial é lançada no mês de outubro e promete desbancar concorrentes.'})} />

                        <Cards tipo='Tecnologia' titulos='A linguagem Python acaba de revolucionar o desenvolvimento de software' descricao='A linguagem de programação Python acaba de receber uma atualização que impactará o desenvolvimento de software.' 
                        onPress={() => navigation.navigate('Detalhes', {tipo: 'Tecnologia', titulo: 'A linguagem Python acaba de revolucionar o desenvolvimento de software', descricao: 'A linguagem de programação Python acaba de receber uma atualização que impactará o desenvolvimento de software.'})}/>

                        <Cards tipo='Tecnologia' titulos='Microsoft relata trabalhar em uma nova linguagem de programação' descricao='A empresa Microsoft divulgou recentemente que está trabalhando em uma nova linguagem de programação.' 
                        onPress={() => navigation.navigate('Detalhes', {tipo: 'Tecnologia', titulo: 'Microsoft relata trabalhar em uma nova linguagem de programação', descricao: 'A empresa Microsoft divulgou recentemente que está trabalhando em uma nova linguagem de programação.'})}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TecnologiaScreen;

const styles = StyleSheet.create({
  container: {
  },

  noticias: {
    alignItems: 'center',
  },

  cardsNoticias: {
    alignItems: 'center',
    marginLeft: 10,
    marginEnd: 10,
  },

  tituloPrincipal: {  
    fontWeight: 'bold',
    fontSize: 30,
  },
});