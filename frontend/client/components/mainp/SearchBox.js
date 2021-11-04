import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBox = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.box}>
                <View style = {styles.iconSearch}>
                    <Icon name = "search" color = 'gray' size = {30}/>
                </View>
                <TextInput style = {styles.textInput} placeholder = "검색" placeholderTextColor = {'gray'} autoCorrect = {false}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flex: 1,
    },
    box:{
        height: 45,
        width: 350,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 2,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    textInput:{
        color: 'black',
        fontSize: 20,
        paddingVertical: 5,
    },
    textBase:{
        color: 'gray',
        fontSize: 20,
        paddingVertical: 5,
    },
    iconSearch:{
        marginLeft: 10,
        marginRight: 10,
        paddingVertical:5, 
        
    },
}); 

export default SearchBox;