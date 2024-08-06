import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function NoticeComponent() {
  return (
    <TouchableOpacity style={styles.noticeButton}>
      <Text style={styles.noticeButtonText}>공지 - </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  /**
   * 간격 , 수정 필요
   *
   */
  noticeButton: {
    position: 'absolute',
    top: 48,
    width: '90%',
    height: '5%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'first-start',
    borderRadius: 12,
    paddingHorizontal: 48,
  },
  noticeButtonText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
