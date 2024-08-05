import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function MapScreen({}) {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Map</Text>
      <Button title="lets go" onPress={() => navigation.navigate('Next')} />
    </View>
  );
}
