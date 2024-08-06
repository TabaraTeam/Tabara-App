import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default function MapComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <WebView
        source={{uri: 'http://20.30.26.170:8000/kakaomap.html'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        originWhitelist={['*']}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
