import SearchData from "../SearchData.json"
import React, {useState, useEffect} from "react";
import { View, Dimensions } from "react-native";
import { Heading, Center, Inputm, Container, Text, List, ListItem } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "styled-system";
import goodsData from "../SearchData.json"

export default function SearchGoods() {
    return (
        <Container>
            <Heading>인기강의자료</Heading>
            {goodsData.map((goods) => {
                return <Text> { goods.keyword }</Text>
            })}
        </Container>
    )
}