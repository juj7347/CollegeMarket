import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonCommu = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.iconCommunity}>
                <Icon name = 'group' color = 'black' size = {50}/>
            </View>            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
    },
    iconCommunity: {
        marginLeft: 20,
        marginRight: 10,
        marginVertical: 30,
    },
});

export default ButtonCommu;