import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MenuButton from '../button/MenuBtn.jsx';

export default function NoticeComponent() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.noticeButton}>
        <Text style={styles.noticeButtonText}>공지 - </Text>
      </TouchableOpacity>
      <MenuButton style={styles.menuButton} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  noticeButtonText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  menuButton: {
    marginLeft: 10, // 공지 버튼과의 간격 조절
  },
});
