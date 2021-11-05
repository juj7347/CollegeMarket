import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonHome = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.iconHome}>
                <Icon name = 'home' color = 'black' size = {50}/>
            </View>            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
    },
    iconHome: {
        marginLeft: 20,
        marginRight: 10,
        marginVertical: 30,
    },
});

export default ButtonHome;