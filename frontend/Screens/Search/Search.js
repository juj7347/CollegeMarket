import React, {useState, useEffect} from "react";
import { View, Dimensions } from "react-native";
import { Inputm, Text } from "native-base";
import { Container } from "../Styles/wrapper";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../Products/SearchBar"
import SearchData from "./SearchData.json"
import SearchGoods from "./SearchContainer/SearchGoods";
import SearchNote from "./SearchContainer/SearchNote"
import SearchResult from "./SearchResult";

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
    else {
        content = <SearchResult/>;
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
