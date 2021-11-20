import * as React from 'react';
import { useState } from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
  ScrollView,
} from 'native-base';

const ChatBox = ({onAddMessage}) =>{

    const [newMessage, setNewMessage] = useState('');

    const ChatInputHandler = (newChat) => {
      setNewMessage(newChat);
    };
    
    const AddChatHandler = () => {
      onAddMessage(newMessage);
      setNewMessage('');
    };
    return(
          <>
          <Box flexDirection = 'row' backgroundColor = 'blue.300' h = "30%" justifyContent = 'flex-end'>
              <Input
                        mt = {4}
                        ml = {2}
                        width="80%"
                        height = "60%"
                        bg="white"
                        borderWidth="0"
                        onChangeText = {ChatInputHandler}
                        value = {newMessage}
                        autoCorrect = {false}
              />
              <Button onPress ={AddChatHandler} backgroundColor = 'blue.300' height = "60%"  mt = {4}>
                SEND
              </Button>
          </Box>
          </>
      );
};

export default ChatBox;