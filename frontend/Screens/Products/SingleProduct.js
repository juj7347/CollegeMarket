import React, { useState, useContext, useCallback } from "react";
import { Image, ScrollView, View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import {
    Header,
    Post,
    Row,
    Time,
    User,
    Photo,
    PostContent,
    Title,
    Footer,
    Like,
    Chat,
    Seperator,
    BottomDivider,
    Price,
    ChatText,
    BottomInfo,
    Category,
    Container,
    GoBack
} from "./styles";
import Avatar from "../../Shared/Avatar";

import {Entypo, AntDesign} from "react-native-vector-icons";

import { useFocusEffect } from "@react-navigation/native";

import { connect } from "react-redux";
import { addToChat } from "../../Redux/Actions/chatActions"
import { addToWishList } from "../../Redux/Actions/wishListActions";
import { setChatOpponent } from "../../Redux/Actions/chatActions";

import axios from 'axios';
import baseURL from "../../assets/common/baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthGlobal from "../../Context/store/AuthGlobal";

import Toast from "react-native-toast-message";

import EasyButton from "../../Shared/StyledComponents/EasyButton";
import { fontStyle } from "styled-system";

const SingleProduct = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState('');
    const [token, setToken] = useState();
    const [userProfile, setUserprofile] = useState();

    const context = useContext(AuthGlobal);

    useFocusEffect(
        useCallback(
            () => {
                AsyncStorage.getItem("jwt")
                    .then((res)=>{
                        setToken(res)
                        axios
                            .get(`${baseURL}conversations/find/${context.stateUser.user.userId}/${item.userId}`, {
                                headers: { Authorization: `Bearer ${res}`}
                            })
                            .then((res) => {
                                if((res.status == 200 || res.status == 201) && !res.data.sameUser) {
                                    console.log(res.data)
                                    props.talkTo(res.data);
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                            })

                    })
                    .catch((error)=> console.log(error))

                setUserprofile(context.stateUser.userProfile);

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
                }
            })
            .catch((err)=>{
                console.log(err)
            });
    }

    return (
        <Container>
            <ScrollView style={styles.scrolView}>
                <Photo
                    source={{uri: item.image ? item.image : require("../../assets/users/post1.jpg")}}
                />
                <Header>
                    <Row>
                        <Avatar
                            source={require("../../assets/users/user3.jpg")}
                        />
                        <View style={{paddingLeft: 10}}>
                            <User>
                                {userProfile ? userProfile.name : ""}
                            </User>
                            <Row>
                                <Time>
                                    {/*item.createdAt*/}
                                    18일전
                                </Time>
                                <Entypo
                                    name="dot-single"
                                    size={12}
                                    color="#747476"
                                />
                                <Entypo
                                    name="globe"
                                    size={10}
                                    color="#747476"
                                />
                            </Row>
                        </View>
                    </Row>
                    <TouchableOpacity>
                        <Entypo
                            name="dots-three-horizontal"
                            size={15}
                            color="#222121"
                        />
                    </TouchableOpacity>
                </Header>
                <BottomDivider/>
                <Post>
                    <Title>
                        {item.name}
                    </Title>
                    <PostContent>
                        {item.description}
                    </PostContent>
                </Post>
            </ScrollView>
            <BottomDivider/>
            <Footer>
                <Like>
                    <AntDesign
                        name="hearto" //heart if liked
                        size={30}
                        color="#222121" // blue if liked
                    />
                </Like>
                <BottomInfo>
                    <Price>
                        {item.price}원
                    </Price>
                    <Category>
                        의류
                    </Category>
                </BottomInfo>
                <Chat
                    onPress={()=>{
                        props.navigation.navigate('Chat', {userName: item.userId})
                    }}
                >
                    <ChatText>대화하기</ChatText>
                </Chat>
            </Footer>
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
        },
        talkTo: (conversation) => {
            dispatch(setChatOpponent({conversation}))
        }

    }
}

const styles = StyleSheet.create({
    scrollView: {
        marginBottom: 80,
        padding: 5
    }
})

export default connect(null, mapDispatchToProps)(SingleProduct);