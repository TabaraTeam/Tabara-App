import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function SplashScreen({navigation}) {
  const [logo, setLogo] = useState(require('../../assets/SplashLogo1.png'));
  const [message, setMessage] = useState('건강과 재미가 한 곳에');
  const logoOpacity = useRef(new Animated.Value(1)).current;
  const textOpacity = useRef(new Animated.Value(1)).current;
  const titleOpacity = useRef(new Animated.Value(1)).current;
  const backgroundColor = useRef(new Animated.Value(0)).current;
  const textColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(textOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(titleOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(backgroundColor, {
          toValue: 1,
          duration: 700,
          useNativeDriver: false,
        }),
        Animated.timing(textColor, {
          toValue: 1,
          duration: 700,
          useNativeDriver: false,
        }),
      ]).start(() => {
        setLogo(require('../../assets/SplashLogo2.png'));

        Animated.parallel([
          Animated.timing(logoOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
          }),
          Animated.timing(textOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
          }),
          Animated.timing(titleOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
          }),
        ]).start();
      });
    }, 700);

    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }, 2500);
  }, [
    navigation,
    logoOpacity,
    textOpacity,
    titleOpacity,
    backgroundColor,
    textColor,
  ]);

  const bgColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#40B59F', '#ffffff'],
  });

  const txtColor = textColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', '#40B59F'],
  });

  return (
    <Animated.View style={[styles.container, {backgroundColor: bgColor}]}>
      <Animated.Image
        source={logo}
        style={[styles.logo, {opacity: logoOpacity}]}
        resizeMode="contain"
      />
      <Animated.Text
        style={[styles.subtitle, {color: txtColor, opacity: textOpacity}]}>
        {message}
      </Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    width: width * 0.6,
    height: height * 0.3,
    top: height / 2 - (height * 0.3) / 1.5,
  },
  subtitle: {
    position: 'absolute',
    top: height / 2 + (height * 0.1) / 3 + 30,
    fontSize: width * 0.04,
    fontFamily: 'paybooc-Bold',
  },
});
