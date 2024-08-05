import React, { useState} from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import Sidebar from '../sidebar/sidebar';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Image
                    source={require('../../assets/elementals/SearchIcon.png')}
                    style={[styles.searchiconstyle]}
                />
                <TextInput
                    style={[styles.input, { paddingLeft: 30 }]}
                    placeholder="여기로 함 가바라!"
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />
                <TouchableOpacity style={styles.menuContainer} onPress={toggleSidebar}>
                    <Image
                        source={require('../../assets/elementals/MenuIcon.png')}
                        style={[styles.menuiconstyle]}
                    />
                </TouchableOpacity>
            </View>
            {sidebarOpen && <Sidebar />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 88,
        width: '100%',
    },
    searchContainer: {
        position: 'relative', 
        width: '90%',
        height: 40, 
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        overflow: 'hidden',
    },
    input: {
        flex: 1,
        width: '100%',
        padding: 10,
        borderWidth: 0, 
        outline: 'none', 
        zIndex: 2,
        left: 16, 
        pointerEvents: 'none',
    },
    searchiconstyle: {
        position: 'absolute',
        width: 24,
        height: 24,
        left: 16,
        zIndex: 1, 
        top: 8,
    },
    menuContainer: {
        position: 'absolute',
        right: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuiconstyle: {
        position: 'absolute',
        width: 24,
        height: 24,
        zIndex: 1, 
        top: 8,
        right: 8,
    }
});

export default Search;
