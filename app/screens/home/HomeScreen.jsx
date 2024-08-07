import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapComponent from '../../components/map/Map';
import NoticeComponent from '../../components/notice/Notice';
import SearchBarComponent from '../../components/searchbar/SearchBar';
import ARCameraBtn from '../../components/button/LongBtn';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <NoticeComponent></NoticeComponent>
      <SearchBarComponent></SearchBarComponent>
      <MapComponent></MapComponent>
      <ARCameraBtn></ARCameraBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
