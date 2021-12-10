import React, {useState, useEffect} from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Inputm, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../Products/SearchBar"
import SearchData from "./SearchData.json"
import SearchGoods from "./SearchContainer/SearchGoods";
import SearchResult from "./SearchResult";
import { ScrollView } from "react-native-gesture-handler";
import CategorySelect from "../Category/CategorySelect";

const width = Dimensions.get('window').width;
const SearchScreen = (props) => {
    const [text, setText] = useState("");
    const getText = (text) => {
        setText(text);
    }
    let content = null;
    if (text === ""){
        content = <SearchGoods/>;
    }
    else {
        content = <SearchResult/>;
    }
    return (
        <ScrollView>
        <View style={style.container}>
            <SearchBar onSearch={getText}/>
            </View>
            <View style={style.container}>
            {content}
            </View>
            <CategorySelect/>
        </ScrollView>
    )
}

export default SearchScreen

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: "#fff"
    }
})

