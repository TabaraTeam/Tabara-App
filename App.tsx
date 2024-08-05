import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import SplashScreen from 'react-native-splash-screen'; // react-native-splash-screen 패키지
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { RecoilRoot } from "recoil";
import { enableScreens } from 'react-native-screens';
 
import SplashScreenComponent from "./Screens/SplashScreen";
import Home from "./Screens/Home";


enableScreens();

const Stack = createStackNavigator();

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFontLoaded(true);
    }, 1000); 
  }, []);

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hide();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
     return null;
     
  }

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreenComponent} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
