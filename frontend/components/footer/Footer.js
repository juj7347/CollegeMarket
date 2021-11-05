import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import ButtonCommu from './ButtonCommu';
import ButtonHome from './ButtonHome';
import ButtonInfo from './ButtonInfo';
import ButtonChat from './ButtonChat';


const Footer = () => {
    return(
        <View style = {styles.container}>
            <ButtonCommu/>
            <ButtonHome/>
            <ButtonInfo/>
            <ButtonChat/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgb(160, 160, 160)',
        justifyContent: 'space-between',
    },
});

export default Footer;