import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {KAKAO_JS_KEY} from '@env';

const html = `
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            #map {
                width: 100%;
                height: 100%;
            }
            body, html {
                margin: 0;
                padding: 0;
                height: 100%;
                overflow: hidden;
            }
        </style>
        <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_JS_KEY}&libraries=services,clusterer,drawing"></script> 
    </head>
    <body >
        <div id="map"></div>
        <script type="text/javascript">
            window.onload = function() {
                const container = document.getElementById('map');
                const options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3
                };
                const map = new kakao.maps.Map(container, options);
                
                const geocoder = new kakao.maps.services.Geocoder();
            }
        </script>       
    </body>
</html>    
`;

export default function MapComponent() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView style={styles.webview} source={{html}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: -99,
  },
});
