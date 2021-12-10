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

import Reply from './Reply';
import ReplyContents from './ReplyContents';
const ReplyBox = () => {
    const [text, setText] = React.useState('');
    const textHandler = (newText) => {
      setText(newText);
    };
    const complete = () => {
        listHandler(text);
        setText('');
      };

    const [textList, setList] = React.useState([]);
    const listHandler = (text) => {
        setList([...textList, {
            profile: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            id: "김정환", 
            textValue: text, 
            time: Math.random()}])
    }
    return(
        <Box>
            <HStack>
                <Input w = "100%"
                variant = 'unstyled' 
                placeholder = '내용 입력'
                multiline = {true}
                borderWidth = {1}
                borderColor = 'gray.300'
                onChangeText = {textHandler}
                value = {text}
                />
            </HStack>
            <Box alignItems = "flex-end">
                <Button size = "sm" variant = 'ghost' mr = {1} _text = {{color: 'black'}} onPress = {complete}>
                        완료
                </Button>
            </Box>
            {textList.map((Reple) => (
                <ReplyContents {...Reple} key = {Reple.time}/>
            ))}
        </Box>
    );
};
export default ReplyBox;