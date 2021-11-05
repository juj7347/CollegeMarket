import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import SearchBox from './mainp/SearchBox';
import IdBox from './loginp/IdBox';

const Body = () => {
    return(
        <View style = {styles.container}>
            <SearchBox/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 3,
        backgroundColor: 'rgb(200, 200, 200)',    
    },
});

export default Body;