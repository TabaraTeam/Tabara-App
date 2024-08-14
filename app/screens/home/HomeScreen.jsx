import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapComponent from '../../components/map/Map';
import NoticeComponent from '../../components/notice/Notice';
import ARCameraBtn from '../../components/button/LongBtn';
import CurrentPosition from '../../components/test/test';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <NoticeComponent></NoticeComponent>
      <MapComponent></MapComponent>
      {/* <ARCameraBtn></ARCameraBtn> */}
      <CurrentPosition></CurrentPosition>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
