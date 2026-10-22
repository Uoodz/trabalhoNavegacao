import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NoticiasScreen from './screens/noticiasScreen';
import SobreScreen from './screens/sobreScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Drawer.Screen name='Noticias' component={NoticiasScreen}/>
        <Drawer.Screen name='Sobre' component={SobreScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}