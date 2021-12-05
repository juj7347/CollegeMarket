import React, {useEffect, useState, useContext, useCallback} from "react";
import {
    View,
    FlatList,
    Text,
    Button,
    StyleSheet,
} from "react-native";
import { useFocusEffect } from "@react-navigation/core";
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
  } from "./styles/messageStyles";

import Conversation from "./Conversation";

import axios from "axios";
import baseURL from "../../assets/common/baseURL";

import AuthGlobal from "../../Context/store/AuthGlobal";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChattingList = (props) => {

  const context = useContext(AuthGlobal);

  const [token, setToken] = useState();
  const [conversations, setConversations] = useState();

  useFocusEffect((
    useCallback(() => {
      AsyncStorage
      .getItem("jwt")
      .then((res)=>{
        setToken(res)

        axios
          .get(`${baseURL}conversations/${context.stateUser.user.userId}`, {
            headers: {Authorization: `Bearer ${res}`}
          })
          .then((res)=>{
            setConversations(res.data);
          })
          .catch((error)=>console.log(error));
      })
      .catch((error)=>console.log(error));
      return () => {
        setConversations();
      }
    },[] 
    )
  ))


  return (
      <Container>
          <FlatList
              showsVerticalScrollIndicator={false}
              data={conversations}
              keyExtractor={(item)=>item._id}
              renderItem={({item}) => (
                <Conversation
                  conversation={item}
                  senderId={context.stateUser.user.userId}
                  token={token}
                  navigation={props.navigation}
                />
              )}
          />
      </Container>
  )
}

export default ChattingList;