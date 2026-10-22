import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoticiasScreen from './noticiasScreen'; 
import DetalhesScreen from './detalhesScreen';

const Stack = createNativeStackNavigator();

export default function NoticiasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NoticiasTabs" component={NoticiasScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Detalhes da Notícia' }}/>
    </Stack.Navigator>
  );
}