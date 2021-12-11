import React from "react";

import { Heading } from "native-base";
import { Text, View,Image, StyleSheet } from "react-native";


const CustomerService = () => {
    return (
        <View style={styles.container}>
            <Heading style={styles.header}>고객센터</Heading>
            <Image
                source={require('../../assets/users/graduation-cap.png')}
                style = {styles.image}
                />
            <Heading style={styles.text}> 광고 문의 </Heading>
            <Text style={styles.text1}> tkdgus96@gmail.com </Text>
        </View>
    )
}

export default CustomerService;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    },
    text: {
        marginTop: 0,
        alignSelf: "center"
    },
    header: {
        marginTop: 40,
        alignSelf: "center"
    },
    text1: {
        marginTop: 10,
        alignSelf: "center",
        fontSize: 16
    },
    image: {
        alignSelf: "center",
        width: 300,
        height: 300
    }
})