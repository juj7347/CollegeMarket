import SearchData from "../SearchData.json"
import React, {useState, useEffect} from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Heading, Center, Inputm, Container, Text, List, ListItem } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import goodsData from "../SearchData.json"
import { TouchableOpacity } from "react-native-gesture-handler";

const {width} = Dimensions.get('window').width;

export default function SearchGoods() {
    return (
        <View style={styles.container}>
            <Heading style={styles.titleText}>추천 검색어</Heading>
            {goodsData.map((goods) => {
                return (
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.contentText}> { goods.keyword }</Text>
                </TouchableOpacity>
            )})}
        </View>
    )
}
const styles = StyleSheet.create({
    titleText: {
        fontSize: 26,
        fontWeight: "bold"
    },
    contentText: {
        fontSize: 18,
    },
    container: {
        padding:20, 
        flex: 1,
        backgroundColor: 'white',
        width: width,
        marginLeft: 5
    },
    button: {
        padding: 8,
        width: width,
        backgroundColor: "#fff"
    }
})