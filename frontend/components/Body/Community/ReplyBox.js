import * as React from 'react';
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
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
import ReplyContents from './ReplyContents';

const Reply = () => {
    return(
        <Box>
            <Text fontSize = '15px' mb = {10}>
                댓글 내용
            </Text>
            <ReplyContents/>
        </Box>
    );
};
export default Reply;