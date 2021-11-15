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
                <Text>시발</Text>
            </ScrollView>
        </Box>
        </>
    );
};

export default ChatContainer;