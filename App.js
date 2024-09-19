import Login from './src/screens/Login'
import EsqueciSenha from './src/screens/EsqueciSenha'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="EsqueciSenha" component={EsqueciSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
