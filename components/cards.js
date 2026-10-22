import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Cards(props) {
    return (
        <TouchableOpacity style={styles.viewCards} onPress={props.onPress}>
            <Text style={styles.tituloSecundario}>{props.tipo}</Text>
            <Text style={{marginLeft: 10, fontWeight: 'bold', fontSize: 17, padding: 5}}>{props.titulos}</Text>
            <Text style={styles.conteudo}>{props.descricao}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    viewCards: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        marginTop: 20,
        borderRadius: 10,
        width: '99%',
  },

    tituloSecundario: {
        opacity: 0.3,
        fontSize: 15,
        marginLeft: 10,
        padding: 5,
},

    conteudo: {
        marginLeft: 10,
        marginBottom: 5,
        padding: 5,
    }
});