import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ARCameraBtn from '../components/buttons/ARCameraBtn';
import Notice from '../components/notice/notice';
import Kakaomap from '../components/kakaoMap/KakaoMap';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Kakaomap style={styles.kakaoMap} /> 
      <View style={styles.overlay}>
        <Notice />
        <ARCameraBtn navigation={navigation} />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kakaoMap: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
});
export default Home;