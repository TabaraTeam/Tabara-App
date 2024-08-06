// In App.js in a new project

import * as React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/native-stack';
import {Button, TouchableOpacity} from 'react-native';
import SplashScreens from './Screens/Splash';
import MapComponent from './Components/map';
import NoticeComponent from './Components/notice';
import SearchBarComponent from './Components/searchbar';
import {useState, useEffect} from 'react';
import {enableScreens} from 'react-native-screens';
import {RecoilRoot} from 'recoil';
import SplashScreen from 'react-native-splash-screen';
import SideBarComponent from './Components/sidebar';
import {createDrawerNavigator} from '@react-navigation/drawer';

enableScreens();

/**
 * navigate 예시
 */
{
  /* <Button onPress={() => navigation.navigate('Modal')} title="open" /> */
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Group>
            <Stack.Screen name="Splash" component={SplashScreens} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="open-sidebar" component={DrawerComponent} />
          </Stack.Group>
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <MapComponent style={styles.kakaoMap} /> */}

      <NoticeComponent />
      <SearchBarComponent />
      {/* <ARCameraBtn
         onPress={() => navigation.navigate('Modal')}
         title="AR launch"
       /> */}
      <TouchableOpacity
        style={styles.ARCameraButton}
        onPress={() => navigation.navigate('Modal')}>
        <Text style={styles.buttonText}>AR 촬영</Text>
      </TouchableOpacity>
    </View>
  );
}

function ModalScreen() {
  return (
    <View>
      <Text>Modal</Text>
    </View>
  );
}

function DrawerComponent() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerType: 'front',
        drawerPosition: 'right',
        headerShown: false,
      }}>
      <Drawer.Screen name="sidebar" component={SideBarComponent} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kakaoMap: {
    ...StyleSheet.absoluteFillObject,
  },

  // overlay: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   pointerEvents: 'none',
  // },

  ARCameraButton: {
    position: 'absolute',
    bottom: 48,
    width: '90%',
    height: '8%',
    backgroundColor: '#35A48F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
