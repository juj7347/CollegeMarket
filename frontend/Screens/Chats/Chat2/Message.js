import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
    View,
    FlatList,
    Text,
    Button,
    StyleSheet
} from "react-native";

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

const Message = (props) => {
    return (
        <Container>
            <FlatList
                data={Messages}
                keyExtractor={(item)=>item.id}
                renderItem={({item}) => (
                    <Card
                        onPress={()=> props.navigation.navigate('Chat',{userName: item.userName})}
                    >
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
                    </Card>
                )}
            />
        </Container>
    )
}

export default Message;