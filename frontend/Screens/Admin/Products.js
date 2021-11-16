import React, {useState, useCallback} from "react";
import { 
    View, 
    Text, 
    FlatList, 
    ActivityIndicator,
    StyleSheet,
    Dimensions,
    Button
} from "react-native";
import { Input } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";

import axios from "axios";
import baseURL from "../../assets/common/baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";

var { height, width } = Dimensions.get('window');

const Products = (props) => {

    const [productList, setProductList] = useState();
    const [productFilter, setProductFilter] = useState();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState();

    useFocusEffect(
        useCallback(
            () => {
                //get token
                AsyncStorage.getItem("jwt")
                    .then((res)=>{
                        setToken(res)
                    })
                    .catch((error)=> console.log(error))

                axios
                    .get(`${baseURL}products`)
                    .then((res)=>{
                        setProductList(res.data);
                        setProductFilter(res.data);
                        setLoading(false);
                    })

                return ()=>{
                    setProductList();
                    setProductFilter();
                    setLoading(true);
                }
            },
            []
        )
    )        

    return (
        <View>
            <View>
                <Text>searchbar</Text>

            </View>

            {loading ? (
                <View>
                    <ActivityIndicator size="large" color="red"/>
                </View>
            ) : (
                <FlatList
                    data={productFilter}
                    renderItem={({item,index})=>(
                        <Text>
                            {item.name}
                        </Text>
                    )}
                    keyExtractor={(item)=>item.id}
                />
            )}
        </View>
    )
}

export default Products;