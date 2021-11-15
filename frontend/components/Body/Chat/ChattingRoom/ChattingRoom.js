import * as React from 'react';
import {useState} from 'react';
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
import ChatContainer from './ChatContainer';
import ChatRoomName from './ChatRoomName';
import ChatBox from './ChatBox';
const ChattingRoom = () => {
    const [messages, setMessages] = useState([]);
    const addMessage = text => {
        setMessages([...messages, {id: Math.random().toString(), textValue: text}]);
    };

    return(
        <>
            <Box safeArea Top>
                <ChatRoomName/>
            </Box>
            <Box h = "82%">
                <ChatContainer messages = {messages}/>
            </Box>
            <Box>
                <ChatBox onAddChat = {addMessage}/>
            </Box>
        </>
    );
};

export default ChattingRoom;