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
import EasyButton from "../../Shared/StyledComponents/EasyButton";

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
    
    const deleteProduct = (id) => {
        axios
            .delete(`${baseURL}products/${id}`, {
                headers: {Authorization: `Bearer ${token}`},
            })
            .then((res)=>{
                const products = productFilter.filter((item)=> item.id !== id);
                setProductFilter(products);
            })
            .catch((error)=> console.log(error))
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <EasyButton
                    secondary
                    medium
                    onPress={() => props.navigation.navigate("Categories")}
                >
                    <Icon name="add" size={18} color="white" />
                    <Text style={styles.buttonText}>Categories</Text>
                </EasyButton>
            </View>
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
                            delete={deleteProduct}
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
    },
    container: {
        marginBottom: 160,
        backgroundColor: 'white'
    },
    buttonContainer: {
        margin: 20,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    buttonText: {
        marginLeft: 4,
        color: 'white'
    }
})

export default Products;