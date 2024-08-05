import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function NextScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>다음페이지입니다.</Text>
    </View>
  );
}
