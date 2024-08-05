import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ARCameraBtn from '../components/buttons/ARCameraBtn';
import Notice from '../components/notice/notice';
import Kakaomap from '../components/kakaoMap/KakaoMap';
import Search from '../components/search/search';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Kakaomap style={styles.kakaoMap} /> 
        <View style={styles.overlay}>
            <Notice />
            <ARCameraBtn navigation={navigation} />
            <Search />
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
  overlayContainer: {
    ...StyleSheet.absoluteFillObject, // 전체 화면을 덮는 오버레이 컨테이너
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    // pointerEvents: 'none',
  },
});
export default Home;