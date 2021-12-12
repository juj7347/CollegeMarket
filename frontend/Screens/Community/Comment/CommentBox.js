import React,{useState, useRef, useContext} from 'react';
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
  ScrollView,
} from 'native-base';
import { 
    CommentConatiner,
    Input,
    Send
} from '../../../Shared/StyledComponents/CommentInput';

import {
    Row
} from '../../../Shared/StyledComponents/Card';

import {AntDesign} from "react-native-vector-icons";

import baseURL from '../../../assets/common/baseURL';
import axios from 'axios';

import AuthGlobal from '../../../Context/store/AuthGlobal';

const CommentBox = (props) => {
    
    const context = useContext(AuthGlobal);

    const [text, setText] = useState("");
    const textHandler = (newText) => {
      setText(newText);
    };

    const addComment = () => {
        if(text === "") {
            return;
        }

        const config = {
            headers: {Authorization: `Bearer ${context.stateUser.userProfile.token}`}
        };

        let comment =  {
            userId: context.stateUser.user.userId,
            postId: props.postId,
            userProfile: {
                _id: context.stateUser.userProfile._id,
                name: context.stateUser.userProfile.name,
                school: context.stateUser.userProfile.school,
                userImg: context.stateUser.userProfile.userImg
            },
            description: text
        };
        
        axios
            .post(`${baseURL}comments`, comment, config)
            .then((res)=>{
                props.setComments(prev => [...prev, comment]);
            })
            .catch((error)=> console.log(error));
        
    }


    return(
        <CommentConatiner>
            <Row>
                <Input
                    placeholder = '댓글을 입력해주세요.'
                    multiline = {true}
                    onChangeText = {textHandler}
                    value = {text}
                    ref={props.textFocus}
                >
                </Input>
                <Send
                    onPress={()=>{
                        addComment();
                        setText("");
                    }}
                >
                    <AntDesign
                        name="arrowleft"
                        color={text==="" ? 'black' : 'blue'}
                    />
                </Send>
            </Row>
            
        </CommentConatiner>
    );
};
export default CommentBox;