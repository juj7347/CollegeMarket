import SearchData from "../SearchData.json"
import React, {useState, useEffect} from "react";
import { View, Dimensions, StyleSheet, ScrollView } from "react-native";
import { Heading, Center, Inputm, Container, Text, List, ListItem } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import goodsData from "../SearchData.json"
import { TouchableOpacity } from "react-native-gesture-handler";
import { marginBottom } from "styled-system";
import { useNavigation } from "@react-navigation/native";

const {width} = Dimensions.get('window').width;

export default function SearchGoods(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Heading style={styles.titleText}>추천 검색어</Heading>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} sc>
            {goodsData.map((goods) => {
                return (
                <TouchableOpacity style={styles.button} onPress={ () => props.setSearch(goods.keyword) }>
                    <Text style={styles.contentText}> { goods.keyword }</Text>
                </TouchableOpacity>
            )})}
            </ScrollView>
            
        </View>
    )
}
const styles = StyleSheet.create({
    titleText: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 15
    },
    contentText: {
        fontSize: 14,
    },
    container: {
        padding:20, 
        flex: 1,
        backgroundColor: 'white',
        width: width,
        marginLeft: 5
    },
    button: {
        margin: 5,
        borderWidth: 0.2,
        borderColor: "grey",
        borderRadius: 10,
        padding: 8,
        width: width,
        backgroundColor: "#fff"
    },
    keywordcontainer:{
        marginTop: 20
    }
})