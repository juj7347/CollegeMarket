import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Image } from "native-base";

const ChattingContainer = () => {
    return (
        <View>
            <Image 
                resizeMode="contain"
                source={{uri: "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png"}}    
            />
            <Text>hey</Text>

        </View>
    )
}

export default ChattingContainer;