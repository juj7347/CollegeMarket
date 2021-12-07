import SearchData from "../SearchData.json"
import React, {useState, useEffect} from "react";
import { View, Dimensions } from "react-native";
import { Heading, Center, Inputm, List, ListItem } from "native-base";
import { Container } from "../../Styles/wrapper";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "styled-system";
import goodsData from "../SearchData.json"
import { Title, ContentText } from "../../Styles/text";

export default function SearchGoods() {
    return (
        <Container>
            <Title>인기강의자료</Title>
            {goodsData.map((goods) => {
                return <ContentText> { goods.keyword }</ContentText>
            })}
        </Container>
    )
}