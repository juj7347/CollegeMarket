import React, { useState, useContext, useCallback } from "react";
import { Image, ScrollView, View, StyleSheet } from "react-native";
import { Container, Heading, Box, HStack, Button , Text} from "native-base";

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

    const [visible, setVisible] = React.useState(false)
    const toggleVisible = () => {
        setVisible(!visible);
    };

    const context = useContext(AuthGlobal);

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

    const addWishList = () => {

        const body = {
            "productId": item._id
        }

        const config = {
            headers: {
                //"Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        }

        axios
            .put(`${baseURL}users/wish/${context.stateUser.user.userId}`, body, config)
            .then((res)=>{
                if(res.status == 200 || res.status == 201) {
                    Toast.show({
                        topOffset: 60,
                        type: "success",
                        text1: `[${item.name} 관심목록에 추가]`
                    })
                    console.log("data",res.data);
                    console.log("config", res.config)
                }
            })
            .catch((err)=>{
                console.log(err)
            });
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrolView}>
                <View>
                    <Image
                        source={{uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"}}
                        resizeMode="contain"
                        style={styles.image}
                    />
                </View>
                <Box mx = {3} my = {3}>
                    <Heading size='xl'fontWeight = 'bold'>{item.price}원</Heading>
                    <Text fontSize = "20px">{item.name}</Text>
                    <Text color = 'gray.400'>update time</Text>
                </Box>
                <Box borderTopWidth = {1} borderTopColor = "gray.300">
                    <Box mx = {3} my = {10}>
                        <Text>상세 설명(판매자 기입)</Text>
                    </Box>
                </Box>
                <Box>
                    <HStack my = {2}>
                        <Box w = "65%">
                            <Button w = "100%" variant = 'outline' borderColor = 'gray.300' _text = {{color: 'black'}} onPress = {toggleVisible}>리뷰</Button>
                        </Box>
                        <Box w = "35%">
                            <Button w = "100%" variant = 'outline' borderColor = 'gray.300' _text = {{color: 'black'}}>신고하기</Button>
                        </Box>
                    </HStack>
                </Box>
                {/*Todo description*/}
            </ScrollView>
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
                    onPress={
                        //props.addItemToWishList(item),
                        addWishList
                    }
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