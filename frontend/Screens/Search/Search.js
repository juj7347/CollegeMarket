import React, {useState, useEffect, useLayoutEffect, useContext, useCallback} from "react";
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
import baseURL from '../../assets/common/baseURL';
import axios from 'axios';
import AuthGlobal from '../../Context/store/AuthGlobal';
import { useFocusEffect } from '@react-navigation/native';
const width = Dimensions.get('window').width;
const SearchScreen = (props) => {
    const context = useContext(AuthGlobal);

    const [products, setProducts] = useState([]);

    //category
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);

    //search
    const [productsFiltered, setProductsFiltered] = useState([]);

    //loading
    const [loading, setLoading] = useState(true);

    useFocusEffect((
        useCallback(
            () => {
                setActive(-1);
        
                //products
                axios
                    .get(`${baseURL}products/school/${context.stateUser.userProfile.collegeEmail}`)
                    .then((res) => {
                        setProducts(res.data);
                        setProductsFiltered(res.data);
                        setProductsCtg(res.data);
                        setInitialState(res.data);
                        setLoading(false);
                    })
                    .catch((err)=>{
                        console.log('Api call error');
                        console.log(context.stateUser.userProfile.school)
                    })
        
                //categories
                axios
                    .get(`${baseURL}categories`)
                    .then((res) => {
                        setCategories(res.data)
                    })
                    .catch((err)=>{
                        console.log('Api call error');
                    })
        
                return () => {
                    setProducts([]);
                    setProductsFiltered([]);
        
                    setCategories([]);
                    setActive();
                    setInitialState([]);
                }
            },[]
        )
    )
  )

    //Categories
    const changeCtg = (ctg) => {
        {
            ctg === 'all'
                ? [setProductsCtg(initialState), setActive(true)]
                : [
                    setProductsCtg(
                        products.filter((i) => i.category._id === ctg),
                        setActive(true)
                    ),
                ];
        }
    };

    //Search
    const searchKeyword = (keyword) => {
        {
            keyword === ""
                ? setProductsFiltered(productsCtg)
                : setProductsFiltered(
                    productsCtg.filter((i) => i.name.toLowerCase().includes(keyword.toLowerCase()))
                );
        }
    }

    const navigation = useNavigation();
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <SearchBar onSearch={getText} searchFilter={searchKeyword}/>
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

