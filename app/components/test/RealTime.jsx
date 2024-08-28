import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const WatchPosition = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude,
        });
      },
      error => {
        console.log(error.code, error.message);
        setError(error.message);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0.1, // 위치 변경을 알리는 최소 거리
        timeout: 1000,   // 위치 업데이트 간격 (밀리초)
        maximumAge: 5000, // 가장 빠른 위치 업데이트 간격 (밀리초)
      }
    );

    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <>
          <Text style={styles.label}>Latitude: {location.latitude}</Text>
          <Text style={styles.label}>Longitude: {location.longitude}</Text>
        </>
      ) : error ? (
        <Text style={styles.label}>Error: {error}</Text>
      ) : (
        <Text style={styles.label}>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'flex-end', 
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
  },
});

export default WatchPosition;
