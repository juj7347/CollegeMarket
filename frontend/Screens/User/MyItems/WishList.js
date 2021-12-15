import React, { useContext, useEffect, useState ,useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
    View,
    Dimensions,
    StyleSheet,
    Button,
    ScrollView
} from "react-native";
import {
    Text,
    List,
    Heading,
    Box,
    Avatar
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

import {
    Container,
    ListContainer
} from "../../Products/ProductCardStyles";

import ProductList from "../../Products/ProductList";

import Icon from 'react-native-vector-icons/Ionicons';


import baseURL from "../../../assets/common/baseURL";
import axios from 'axios';
import AuthGlobal from "../../../Context/store/AuthGlobal";

var {height, width} = Dimensions.get('window');

const WishList = (props) => {
    
    const context = useContext(AuthGlobal);

    const [wishlist, setWishlist] = useState([]);

    useFocusEffect((
        useCallback(()=>{
            axios
                .get(`${baseURL}wishlist/product/${context.stateUser.user.userId}`)
                .then((res) => {
                    setWishlist(res.data.productList);
                })
                .catch((error)=>{
                    console.log("wishlist get failed");
                })
            return () => {
                setWishlist([])
            }
        },[])
    ))

    return (
        <>
        <ScrollView style={{backgroundColor: 'white'}}>
            {wishlist.length ?  (
                <ListContainer>
                    {wishlist.map((item)=>{
                        return (
                            <ProductList
                                key={item._id}
                                item={item}
                                navigation={props.navigation}
                            />
                        );
                    })}
                </ListContainer>
            ) : (
                <Container style={styles.emptyContainer}>
                    <Text>관심목록이 비어있습니다</Text>
                    <Text>관심품목을 추가해주세요</Text>
                </Container>
            )}
        </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    emptyContainer: {
        height: height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listItem: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    body: {
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export default WishList;
