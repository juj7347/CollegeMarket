import React, { useState, useEffect, useContext, useCallback } from "react";
import { Image, ScrollView, View, StyleSheet, Text, Button } from "react-native";
import { Container, Heading } from "native-base";

import { useFocusEffect } from "@react-navigation/native";

import { connect } from "react-redux";
import { addToChat } from "../../Redux/Actions/chatActions"
import { addToWishList } from "../../Redux/Actions/wishListActions";

import axios from 'axios';
import baseURL from "../../assets/common/baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthGlobal from "../../Context/store/AuthGlobal";

import Toast from "react-native-toast-message";

import EasyButton from "../../Shared/StyledComponents/EasyButton";

const SingleProduct = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState('');
    const [token, setToken] = useState();

    const context = useContext(AuthGlobal);
    const [addedToWishList, setAddedToWishList] = useState(false);

    useFocusEffect(
        useCallback(
            () => {
                AsyncStorage.getItem("jwt")
                    .then((res)=>{
                        setToken(res)
                    })
                    .catch((error)=> console.log(error))
            },
            []
        )
    )

    useEffect(()=>{
        axios
            .put(`${baseURL}users/wish/${context.stateUser.user.userId}`, {
                headers: {Authorization: `Bearer ${token}`},
                add: addedToWishList,
                productId: "2323"
            })
            .then((res)=>{
                if(res.status == 200) {
                    Toast.show({
                        topOffset: 60,
                        type: "success",
                        text1: `[${item.name} 관심목록에 추가]`
                    })
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    },[addedToWishList])

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrolView}>
                <View>
                    <Image
                        source={{uri: item.image ? item.image : "https://m.media-amazon.com/images/I/51USYvNTMhL._SL1024_.jpg"}}
                        resizeMode="contain"
                        style={styles.image}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Heading size='xl' style={styles.contentHeader}>{item.name}</Heading>
                </View>
                {/*Todo description*/}
            </ScrollView>
            <View style={styles.bottomContainer}>
                <Text style={styles.price}>{item.price}원</Text>
            </View>
            <View>
                <EasyButton
                    primary
                    medium
                    onPress={()=>{
                        props.addItemToChat(item),
                        Toast.show({
                            topOffset: 60,
                            type: "success",
                            text1: `[${item.name}] 추가`
                        })
                    }}
                >
                    <Text style={{color: 'white'}}>톡 하기</Text>
                </EasyButton>
                <EasyButton
                    primary
                    medium
                    onPress={()=>{
                        //props.addItemToWishList(item),
                        setAddedToWishList(!addedToWishList)
                    }}
                >
                    <Text>관심품목</Text>
                </EasyButton>
            </View>
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToChat: (product) => {
            dispatch(addToChat({product}))
        },
        addItemToWishList: (product) => {
            dispatch(addToWishList({product}))
        }

    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height:' 100%'
    },
    scrollView: {
        marginBottom: 80,
        padding: 5
    },
    imageContainer: {
        backgroundColor: 'white',
        padding : 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: 250
    },
    contentContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentHeader: {
        fontWeight: 'bold',
        marginBottom: 20
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white'
    },
    price: {
        fontSize: 24,
        margin: 20,
        color: 'red'
    }
})

export default connect(null, mapDispatchToProps)(SingleProduct);