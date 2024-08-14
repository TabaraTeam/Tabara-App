import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Geolocation from 'react-native-geolocation-service';

import * as permissions from 'react-native-permissions';
import { request, requestMultiple, PERMISSIONS } from 'react-native-permissions';
import {RecoilRoot} from 'recoil';
import SplashScreen from './app/screens/splash/SplashScreen';
import HomeScreen from './app/screens/home/HomeScreen';
import { Platform } from 'react-native';

// permissions.requestMultiple(Platform.OS === 'ios' ?
//   [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE])
//   .then((result) => {
//     console.log(result)
//   });

async function requestPermissions() {
  try {
    const result = await requestMultiple([
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    ]);
    console.log(result);
  } catch (error) {
    console.error('Error requesting permissions:', error);
  }
}
requestPermissions();

Geolocation.getCurrentPosition((position) => {
  console.log(position)
},
  (error) => {
    console.log(error.code, error.message);
},
{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
);

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