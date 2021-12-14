import React, {useState, useEffect, useLayoutEffect} from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Inputm, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import SuggestedSearch from "./SearchContainer/SuggestedSearch"
import SearchData from "./SearchData.json"
import SearchGoods from "./SearchContainer/SearchGoods";
import SearchResult from "./SearchResult";
import { ScrollView } from "react-native-gesture-handler";
import CategorySelect from "../Category/CategorySelect";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { AntDesign } from "react-native-vector-icons"
import {
    BackButton,
    InputContainer,
    InputBox,
    Input
} from "../../Shared/StyledComponents/Input";

import { connect } from "react-redux";
import { setSearch } from "../../Redux/Actions/filterActions";

const width = Dimensions.get('window').width;
const SearchScreen = (props) => {
    const navigation = useNavigation();

    const [search, setSearch] = useState("");
    const trigger = (search) => {
        setSearch(search);
        navigation.navigate("Home");
    }



    return (
        
        <ScrollView>
            <InputContainer>
                    <BackButton onPress={()=> navigation.navigate("Home")}>
                        <AntDesign name="arrowleft" size={30}/>
                    </BackButton>
                    <InputBox>
                        <Input
                        defaultValue={search}
                            placeholder="검색어를 입력하세요"
                            onChangeText={text=>setSearch(text)}
                            onSubmitEditing={()=>{
                                    trigger(search);
                            }}
                        />
                    </InputBox>
                </InputContainer>
        <View style={style.container}>
            </View>
            <View style={style.container}>
                <SearchGoods setSearch={trigger}/>
                <SuggestedSearch setSearch={trigger}/>
            </View>
        </ScrollView>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSearch: (search) => {
            dispatch(setSearch({search}))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchScreen);

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: "#fff"
    }
})