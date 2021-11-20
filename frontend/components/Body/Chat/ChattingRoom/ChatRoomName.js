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

const ChatRoomName = () => {
    return(
        <>
            <HStack mx = {3} space = {3} mb = {3}>
            <HStack space = "1">
                <Text fontSize = "20px"> Image </Text>
            </HStack>
            <HStack space = "2">
                <Text fontSize = "20px"> Name </Text>
            </HStack>
            <HStack space = "3">
                <Button fontSize = "20px" backgroundColor = 'blue.300'> Back </Button>
            </HStack>
            </HStack>
        </>
    );
};

export default ChatRoomName;