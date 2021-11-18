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

const ChatItem = ({id, textValue}) => {
    return(
        <>
        <Text fontSize = "15px">
            {textValue.result}
        </Text>
        <Text>
            시발 뭐야 왜 안됨?
        </Text>
        </>
    );
};

export default ChatItem