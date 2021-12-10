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
import Selection from './Selection';

import { connect } from 'react-redux';
import postTagItems from '../../../Redux/Reducers/postTagItems';

/*complete에 추가해야할것:
   1. text_id 생성
   2. {image, text, text_id, id(작성자), time(작성시간), category} db에 보내기
*/
const PostFeed = (props) =>{
    const [text, setText] = React.useState('');
    const textHandler = (newText) => {
      setText(newText);
    };
    const complete = () => {
      console.log(text);
      console.log(choice);
      setText('');
      setChoice('');
    };
    const [choice, setChoice] = React.useState('');
    const getChoice = (newChoice) => {
      setChoice(newChoice);
    };

    return(
      <>
        <Box h = "94%">
          <HStack backgroundColor = 'white'>
            <Selection value = {text} getChoice = {getChoice}/>
            <Button w = "20%" variant = 'outline' _text = {{color : 'black'}} borderWidth = {1} mt = {1} backgroundColor = 'white'>+Image</Button>
          </HStack>
          <Input 
            variant = 'unstyled' 
            placeholder = '내용 입력'
            onChangeText = {textHandler}
            />
        </Box>
        <Button onPress = {complete}>완료</Button> 
      </>
    );
};

const mapStateToProps = () => {
}

export default PostFeed;