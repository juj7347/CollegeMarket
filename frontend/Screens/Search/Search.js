import React, {useState, useEffect, useLayoutEffect} from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Inputm, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../Products/SearchBar"
import SuggestedSearch from "./SearchContainer/SuggestedSearch"
import SearchData from "./SearchData.json"
import SearchGoods from "./SearchContainer/SearchGoods";
import SearchResult from "./SearchResult";
import { ScrollView } from "react-native-gesture-handler";
import CategorySelect from "../Category/CategorySelect";
import { NavigationContainer, useNavigation } from "@react-navigation/native";


const width = Dimensions.get('window').width;
const SearchScreen = (props) => {
    const navigation = useNavigation();
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <SearchBar onSearch={getText}/>
            )
        });
    })
    const [text, setText] = useState("");
    const getText = (text) => {
        setText(text);
    }
    let content = null;
    let content1 = null;
    if (text === ""){
        content = <SearchGoods/>;
        content1 = <SuggestedSearch/>;
    }
    else {
        content = <SearchResult/>;
    }
    return (
        <ScrollView>
        <View style={style.container}>
            </View>
            <View style={style.container}>
            {content}
            {content1}
            </View>
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

