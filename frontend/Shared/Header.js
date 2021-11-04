import React from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";

const Header = () => {
    return (
        <SafeAreaView>
            <Image
                source={require('../assets/favicon.png')}
                resizeMode="contain"
                style={{height: 50}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 80 // needs to be deleted later
    }
})

export default Header;