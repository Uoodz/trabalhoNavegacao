import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SobreScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.titulo}>Sobre</Text>
                        <Image style={styles.imagem} source={require('../assets/news.jpg')}/>
                        <Text style={styles.linha}></Text>
                        <Text style={styles.texto1}>Esse é um app de notícias.</Text>
                        <Text style={styles.texto2}>Nesse app eu pratiquei diferentes tipos de navegação com react native:</Text>
                        <Text style={styles.listas}> • Drawer (Raiz)</Text>
                        <Text style={styles.listas}> • Tabs (Tecnologia/Esportes)</Text>
                        <Text style={styles.listas}> • Stacks (Lista → Detalhes)</Text>
                    </View>
                    <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('Noticias')}>
                        <Text style={styles.textoBotao}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SobreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    titulo: {
        marginTop: 50,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imagem: {
        height: 250,
        width: 200,
        alignSelf: 'center',
        justifyContent: 'center',
    },

    linha: {
        width: '95%',
        height: 1,
        backgroundColor: 'gray',
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        justifyContent: 'center',
    },

    texto1: {
        marginStart: 10,
    },

    texto2: {
        marginStart: 10,
    },
    
    listas: {
        marginStart: 20,
    },

    botaoVoltar: {
        width: '95%',
        height: '6%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        backgroundColor: 'blue',
        marginTop: 150,
    },

    textoBotao: {
        color: 'white',
        fontSize: 20,
    }
})