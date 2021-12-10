import SearchData from "../SearchData.json"
import React, {useState, useEffect} from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Heading, Center, Inputm, List, ListItem } from "native-base";
import { Container } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import goodsData from "../SearchData.json"
import { Title, ContentText } from "../../Styles/text";
import { TouchableOpacity } from "react-native-gesture-handler";
import { style } from "styled-system";

var {width} = Dimensions.get('window');

export default function SearchGoods() {
    return (
        <Container style={styles.container}>
            <Title>추천 검색어</Title>
            {goodsData.map((goods) => {
                return (
                    <TouchableOpacity style={styles.button}>
                        <ContentText> { goods.keyword }</ContentText>
                    </TouchableOpacity>
            )})}
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: width,
    },
    button: {
        width: width,
        backgroundColor: "#fff"
    }
})