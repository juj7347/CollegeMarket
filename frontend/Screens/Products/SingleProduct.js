import React, { useState, useContext, useCallback ,useLayoutEffect } from "react";
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
import { setChatOpponent } from "../../Redux/Actions/chatActions";

import axios from 'axios';
import baseURL from "../../assets/common/baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthGlobal from "../../Context/store/AuthGlobal";

import Toast from "react-native-toast-message";

import {getDate} from "../../Shared/Date/getDate"; 

const SingleProduct = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState('');
    const [token, setToken] = useState();
    const [userProfile, setUserprofile] = useState();
    const [liked, setLiked] = useState(false);
    const [hideScroll, setHideScroll] = useState(true);

    const context = useContext(AuthGlobal);

    const getScrollY = (event) => {
        if(event.nativeEvent.contentOffset.y > 208) {
            setHideScroll(false);
        }
        else {
            setHideScroll(true);
        }
    } 

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
                                    
                                    if(!res.data.found) {
                                        props.talkTo(null)
                                    }
                                    
                                    //else 
                                        props.talkTo(res.data);
                                    
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                            })

                        axios
                            .get(`${baseURL}wishlist/product/${context.stateUser.user.userId}`, {headers: { Authorization: `Bearer ${res}`}})
                            .then((res)=>{
                                if(res.data.productList.find(product => product.id === item._id)) {

                                    setLiked(true);
                                }
                            })
                            .catch((error)=>console.log(error));
        

                    })
                    .catch((error)=> console.log(error))

                setUserprofile(context.stateUser.userProfile);


            },
            []
        )
    )

    const addWishList = () => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        }
        axios
            .put(`${baseURL}wishlist/product/like/${context.stateUser.user.userId}`, {like: !liked, itemId: item._id}, config)
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
                console.log(err);
            });
        
    }

    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerShown: hideScroll
        })
    },[props.navigation, hideScroll])

    return (
        <>
        <Container>
            <ScrollView
                scrollEventThrottle={16}
                onScroll={(e) => getScrollY(e)}
            >
                <Photo
                    source={{uri: item.image ? item.image : require("../../assets/users/post1.jpg")}}
                />
                <Header>
                    <Row>
                        <Avatar
                            source={require("../../assets/users/graduation-cap.png")}
                        />
                        <View style={{paddingLeft: 10}}>
                            <User>
                                {item.userName}
                            </User>
                            <Row>
                                <Time>
                                    {getDate(item.dateCreated)}
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
                <Like
                    onPress={()=>{
                        addWishList()
                        setLiked(!liked)
                    }}
                >
                    <AntDesign
                        name={liked ? "heart" : "hearto"}
                        size={30}
                        color={liked ? 'blue' : "#222121"}
                    />
                </Like>
                <BottomInfo>
                    <Price>
                        {item.price}원
                    </Price>
                    <Category>
                        {item.categoryName}
                    </Category>
                </BottomInfo>
                <Chat
                    onPress={()=>{
                        props.navigation.navigate('Chat_from_Product', {userName: item.userName, receiverId: item.userId})
                    }}
                >
                    <ChatText>대화하기</ChatText>
                </Chat>
            </Footer>
        </Container>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
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