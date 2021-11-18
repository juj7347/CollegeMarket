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
          <Box flexDirection = 'row' backgroundColor = 'white'>
              <Input
                        width="85%"
                        bg="white"
                        borderWidth="0"
                        onChange = {ChatInputHandler}
                        value = {newMessage}
                        autoCorrect = {false}
              />
              <Button onPress ={AddChatHandler}>
                Enter
              </Button>
          </Box>
          </>
      );
};

export default ChatBox;