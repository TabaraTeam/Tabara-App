import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import {Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function MenuBtn({navigation}) {
    return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Icon name="menu" size={24} color="blue" />
        </TouchableOpacity>
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    noticeButton: {
      position: 'absolute',
      top: 48,
      width: '90%',
      height: '25%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: '#D3D3D3',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderRadius: 12,
      paddingHorizontal: 48,
      zIndex: 99,
    },
},
)