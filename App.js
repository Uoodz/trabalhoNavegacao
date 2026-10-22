import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NoticiasStack from './screens/stackScreen';
import SobreScreen from './screens/sobreScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Drawer.Screen name='Noticias' component={NoticiasStack} options={{drawerIcon: () => <Ionicons name="newspaper-outline" size={25} />}}/>
        <Drawer.Screen name='Sobre' component={SobreScreen} options={{drawerIcon: () => <Ionicons name="help-circle-outline" size={25} />}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}