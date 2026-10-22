import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TecnologiaScreen from './noticiaTecnologia';
import EsportesScreen from './noticiaEsporte';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


const NoticiasScreen = ({navigation}) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tecnologia" component={TecnologiaScreen} options={{tabBarIcon: () => <Ionicons name="desktop-outline" size={25} />}}/>
            <Tab.Screen name="Esportes" component={EsportesScreen} options={{tabBarIcon: () => <Ionicons name="football-outline" size={25} />}}/>
        </Tab.Navigator>
)}

export default NoticiasScreen;