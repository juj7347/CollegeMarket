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
  import baseURL from "../../../assets/common/baseURL";

  import AuthGlobal from "../../../Context/store/AuthGlobal";
  import AsyncStorage from "@react-native-async-storage/async-storage";

const Messages = [
    {
      id: '1',
      userName: 'Jenny Doe',
      userImg: require('../../../assets/users/user-1.jpg'),
      messageTime: '4 mins ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '2',
      userName: 'John Doe',
      userImg: require('../../../assets/users/user-1.jpg'),
      messageTime: '2 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '3',
      userName: 'Ken William',
      userImg: require('../../../assets/users/user-2.jpg'),
      messageTime: '1 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '4',
      userName: 'Selina Paul',
      userImg: require('../../../assets/users/user-2.jpg'),
      messageTime: '1 day ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '5',
      userName: 'Christy Alex',
      userImg: require('../../../assets/users/user-2.jpg'),
      messageTime: '2 days ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '6',
        userName: 'Jenny Doe',
        userImg: require('../../../assets/users/user-1.jpg'),
        messageTime: '4 mins ago',
        messageText:
          'Hey there, this is my test for a post of my social app in React Native.',
      },
      {
        id: '7',
        userName: 'John Doe',
        userImg: require('../../../assets/users/user-1.jpg'),
        messageTime: '2 hours ago',
        messageText:
          'Hey there, this is my test for a post of my social app in React Native.',
      },
      {
        id: '8',
        userName: 'Ken William',
        userImg: require('../../../assets/users/user-2.jpg'),
        messageTime: '1 hours ago',
        messageText:
          'Hey there, this is my test for a post of my social app in React Native.',
      },
      {
        id: '9',
        userName: 'Selina Paul',
        userImg: require('../../../assets/users/user-2.jpg'),
        messageTime: '1 day ago',
        messageText:
          'Hey there, this is my test for a post of my social app in React Native.',
      },
      {
        id: '10',
        userName: 'Christy Alex',
        userImg: require('../../../assets/users/user-2.jpg'),
        messageTime: '2 days ago',
        messageText:
          'Hey there, this is my test for a post of my social app in React Native.',
      },
  ];

const ChattingList = (props) => {

  const context = useContext(AuthGlobal);

  const [token, setToken] = useState();
  const [conversations, setConversations] = useState();
/*
  useFocusEffect((
    useCallback(() => {
      AsyncStorage
      .getItem("jwt")
      .then((res)=>{
        setToken(res)

        axios
          .get(`${baseURL}conversations/${context.stateUser.user.userId}`)
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
*/

  useEffect(()=>{
    AsyncStorage
    .getItem("jwt")
    .then((res)=>{
      setToken(res)

      axios
        .get(`${baseURL}conversations/${context.stateUser.user.userId}`)
        .then((res)=>{
          setConversations(res.data);
        })
        .catch((error)=>console.log(error));
    })
    .catch((error)=>console.log(error));
    return () => {
      setConversations();
    }
  },[])

  return (
      <Container>
          <FlatList
              showsVerticalScrollIndicator={false}
              data={conversations}
              keyExtractor={(item)=>item.id}
              renderItem={({item}) => (
                  <Card
                      onPress={()=> props.navigation.navigate('Chat',{userName: item.userName})}
                  >
                    {/*
                      <UserInfo>
                          <UserImgWrapper>
                              <UserImg source={item.userImg}/>
                          </UserImgWrapper>
                          <TextSection>
                              <UserInfoText>
                                  <UserName>
                                      {item.userName}
                                  </UserName>
                                  <PostTime>
                                      {item.messageTime}
                                  </PostTime>
                              </UserInfoText>
                              <MessageText>
                                      {item.messageText}
                              </MessageText>
                          </TextSection>
                      </UserInfo>
                    */}
                    <Conversation
                      conversation={item}
                      senderId={context.stateUser.user.userId}
                      token={token}
                    />
                  </Card>
              )}
          />
      </Container>
  )
}

export default ChattingList;