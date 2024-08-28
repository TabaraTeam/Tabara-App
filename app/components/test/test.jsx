import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const CurrentPosition = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <>
          <Text style={styles.label}>Latitude: {location.latitude}</Text>
          <Text style={styles.label}>Longitude: {location.longitude}</Text>
        </>
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

export default CurrentPosition;
