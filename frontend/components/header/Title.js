import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const Title = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.appTitle}>
                College Market
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    appTitle: {
        color: 'black',
        fontSize: 36,
        marginTop: 70,
        marginBottom: 30,
        fontWeight: '900',
        textAlign: 'center',
        
    },
});

export default Title;