import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Button} from 'react-native';

/**
 * AR 카메라 기능 구현 예정
 */
export default function ARCameraBtn({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.ARCameraButton}>
        <Text style={styles.buttonText}>AR 촬영</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                   // 전체 화면을 차지하도록 설정
    justifyContent: 'flex-end', // 자식 요소를 하단에 배치
    alignItems: 'center',      // 자식 요소를 수평 중앙에 배치
  },
  ARCameraButton: {
    position: 'absolute',
    bottom: 48,
    width: '90%',
    height: '20%',
    backgroundColor: '#35A48F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    zIndex: 99,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
