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
import { Input, List } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";

import axios from "axios";
import baseURL from "../../assets/common/baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ListItem from "./ListItem";

var { height, width } = Dimensions.get('window');

const ListHeader = () => {
    return (
        <View
            elevation={1}
            style={styles.listHeader}
        >
            <View style={styles.headerItem}>

            </View>
            <View style={styles.headerItem}>
                <Text style={{fontWeight: '600'}}>Name</Text>
            </View>
            <View style={styles.headerItem}>
                <Text style={{fontWeight: '600'}}>Category</Text>
            </View>
            <View style={styles.headerItem}>
                <Text style={{fontWeight: '600'}}>Price</Text>
            </View>
        </View>
    )
}

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
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" color="red"/>
                </View>
            ) : (
                <FlatList
                    data={productFilter} 
                    ListHeaderComponent={ListHeader}
                    renderItem={({item,index})=>(
                        <ListItem
                            {...item}
                            navigation={props.navigation}
                            index={index}
                        />
                    )}
                    keyExtractor={(item)=>item.id}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    listHeader: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'gainsboro'
    },
    headerItem: {
        margin: 3,
        width: width / 6
    },
    spinner: {
        height: height / 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Products;