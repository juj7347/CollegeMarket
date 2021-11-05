import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

const IdBox = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.idBox}>
                <TextInput style = {styles.textInput} placeholder = 'ID'/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    idBox: {
        height: 45,
        width: 350,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 2,
        alignSelf: 'center'
    },
    textInput:{
        color: 'black',
        fontSize: 20,
        paddingVertical: 5,
    },
});

export default IdBox;