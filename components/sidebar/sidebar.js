import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sidebar = () => {
    return (
        <View style={styles.sidebar}>
            <Text>사이드바 내용</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    sidebar: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#fff',
        width: '60%', 
        height: '100%',
    },
});

export default Sidebar;
