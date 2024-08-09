import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecoilRoot} from 'recoil';
import SplashScreen from './app/screens/splash/SplashScreen';
import HomeScreen from './app/screens/home/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Group>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
