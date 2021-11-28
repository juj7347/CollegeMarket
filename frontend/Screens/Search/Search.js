import React, {useState, useEffect} from "react";
import { View, Dimensions } from "react-native";
import { Inputm, Container, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../Products/SearchBar"
import SearchData from "./SearchData.json"
import SearchGoods from "./SearchContainer/SearchGoods";
import SearchNote from "./SearchContainer/SearchNote"

const SearchScreen = (props) => {
    const [text, setText] = useState("");
    const getText = (text) => {
        setText(text);
    }
    let content = null;
    let content2 = null;
    if (text === ""){
        content = <SearchGoods/>;
        content2 = <SearchNote/>;
    }
    return (
        <Container>
            <Text> 검색값 : {text} </Text>
            <SearchBar onSearch={getText}/>
            {content}
            {content2}
        </Container>
    )
}

export default SearchScreen
