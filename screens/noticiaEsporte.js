import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cards from '../components/cards'

const EsportesScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View>
                    <View style={styles.cardsNoticias}>
                        <Cards tipo='Esportes' titulos='Final do campeonato é definida' descricao='Os times X e Y se enfrentarão na grande final...'/>

                        <Cards tipo='Esportes' titulos='Atleta quebra recorde mundial' descricao='Na modalidade de corrida, um novo recorde foi estabelecido...'/>

                        <Cards tipo='Esportes' titulos='Clássico termina empatado' descricao='Em jogo equilibrado, equipes dividem pontos após viradas nos minutos finais.'/>

                        <Cards tipo='Esportes' titulos='Seleção confirma amistosos' descricao='Jogos de preparação visam dar ritmo a jovens promessas antes do torneio continental.'/>

                        <Cards tipo='Esportes' titulos='Maratonista surpreende' descricao='Atleta vence prova de rua e estabelece melhor marca pessoal em percurso desafiador'/>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EsportesScreen;

const styles = StyleSheet.create({
  container: {
  },

  noticias: {
    alignItems: 'center',
  },

  cardsNoticias: {
    alignItems: 'flex-start',
    marginLeft: 10,
    marginEnd: 10,
  },

  tituloPrincipal: {  
    fontWeight: 'bold',
    fontSize: 30,
  },
});