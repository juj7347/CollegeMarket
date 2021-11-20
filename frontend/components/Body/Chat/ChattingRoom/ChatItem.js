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


const ChatItem = ({id, textValue, IsFromMe}) => {
    return(
        IsFromMe ? 
        <Box alignItems = 'flex-end'>
            <Box backgroundColor = 'blue.300' mb = {4} borderRadius = "5">
                <Text fontSize = "15px" color = 'white' py = {2} px = {2}> 
                    {textValue.toString()}
                </Text>
            </Box>
        </Box>:
        <Box alignItems = 'flex-start'>
            <Box backgroundColor = 'blue.300' mb = {4} borderRadius = "5">
                <Text fontSize = "15px" color = 'white' py = {2} px = {2}> 
                    {textValue.toString()}
                </Text>
            </Box>
        </Box>
    );
};

export default ChatItem