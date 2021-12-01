import React, {useState, useEffect, useContext} from "react";
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
} from "../styles/messageStyles";

import axios from "axios";
import baseURL from "../../assets/common/baseURL";

import AuthGlobal from "../../Context/store/AuthGlobal";

import { connect } from "react-redux";
import { setConversation } from "../../Redux/Actions/chatActions";

const Conversation = (props) => {
    
    const context = useContext(AuthGlobal);
    const [user, setUser] = useState();

    useEffect(()=>{
        const receiverId = props.conversation.members.find(id => id !== props.senderId);

        axios
            .get(`${baseURL}users/${receiverId}`, {
                headers: { Authorization: `Bearer ${props.token}` }
            })
            .then((res)=>{
                setUser(res.data);
            })
            .catch((error)=>console.log(error));
        
    },[])

    return (
        <Card
            onPress={()=> {
                props.talkTo(props.conversation);
                props.navigation.navigate('Chat',{userName: user.name});
            }}
        >
            <UserInfo>
                <UserImgWrapper>
                    <UserImg/>
                </UserImgWrapper>
                <TextSection>
                    <UserInfoText>
                        <UserName>
                            {"John"}
                        </UserName>
                        <PostTime>
                            {"just now"}
                        </PostTime>
                    </UserInfoText>
                    <MessageText>
                            {"text"}
                    </MessageText>
                </TextSection>
            </UserInfo>
        </Card>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        talkTo: (conversation) => {
            dispatch(setConversation({conversation}));
        }
    }
}

export default connect(null, mapDispatchToProps)(Conversation);