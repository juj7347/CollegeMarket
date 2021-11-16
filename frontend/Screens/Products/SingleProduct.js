import React, { useState, useEffect, useContext } from "react";
import { Image, ScrollView, View, StyleSheet, Text, Button } from "react-native";
import { Container, Heading } from "native-base";

import { connect } from "react-redux";
import { addToChat } from "../../Redux/Actions/chatActions"
import { addToWishList } from "../../Redux/Actions/wishListActions";

import axios from 'axios';
import baseURL from "../../assets/common/baseURL";

import AuthGlobal from "../../Context/store/AuthGlobal";

import Toast from "react-native-toast-message";

const SingleProduct = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState('');

    const context = useContext(AuthGlobal);
    const [addedToWishList, setAddedToWishList] = useState(false);

    useEffect(()=>{
        console.log(context.stateUser.user.userId)
        axios
            .put(`${baseURL}users/wish/${context.stateUser.user.userId}`, {
                add: addedToWishList,
                productId: "2323"
            })
    },[addedToWishList])

    return (
        <Container style={styles.container}>
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
                <Button
                    title={"톡 하기"}
                    color={'orange'}
                    onPress={()=>{
                        props.addItemToChat(item),
                        Toast.show({
                            topOffset: 60,
                            type: "success",
                            text1: `[${item.name}] 추가`
                        })
                    }}
                />
                <Button
                    title={"관심품목"}
                    color={'red'}
                    onPress={()=>{
                        //props.addItemToWishList(item),
                        setAddedToWishList(!addedToWishList)
                        Toast.show({
                            topOffset: 60,
                            type: "success",
                            text1: `[${item.name}] 추가`
                        })
                    }}
                />
            </View>
        </Container>
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