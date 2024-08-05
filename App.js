// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapScreen from './pages/map/MapScreen';
import NextScreen from './pages/next/NextScreen';
import {Button} from 'react-native';

function HomeScreen() {
  const Navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="lets go Map" onPress={() => Navigation.navigate('Map')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Next" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
