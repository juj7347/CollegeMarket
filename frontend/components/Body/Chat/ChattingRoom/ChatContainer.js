import * as React from 'react';
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
import ChatItem from './ChatItem';

const ChatContainer = ({messages}) => {
    return(
        <>
        <Box h = "100%" backgroundColor = 'gray.200'>
            <ScrollView ml = {3} mt = {5}>
                {messages.map( (message) => (
                    <ChatItem key = {message.id} {...message}/>
                ))}
            </ScrollView>
        </Box>
        </>
    );
};

export default ChatContainer;