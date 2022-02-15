import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import DetailScreen from './screens/DetailScreen';
import LandingScreen from './screens/LandingScreen';
import TabNavigator from './navigation/Tabs';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'SF-Regular': require('./assets/fonts/SF-Regular.ttf'),
    'SF-Bold': require('./assets/fonts/SF-Bold.ttf'),
    'SF-Medium': require('./assets/fonts/SF-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
