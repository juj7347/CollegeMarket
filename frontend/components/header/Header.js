import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Title from './Title';

const Header = () => {
    return(
        <View style = {styles.container}>
            <Title/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default Header;