import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Button} from 'react-native';

/**
 * AR 카메라 기능 구현 예정
 */
export default function ARCameraBtn({navigation}) {
  return (
    // <TouchableOpacity style={styles.ARCameraButton}>
      // <Text style={styles.buttonText}>AR 촬영</Text>
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
