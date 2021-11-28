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
  } from "./styles/messageStyles";

import axios from "axios";
import baseURL from "../../../assets/common/baseURL";

import AuthGlobal from "../../../Context/store/AuthGlobal";

const Conversation = (props) => {
    
    const context = useContext(AuthGlobal);
    const [user, setUser] = useState();

    useEffect(()=>{
        console.log("conversation", props.conversation)
        /*
        const receiverId = props.conversation.find(id => id !== props.senderId);

        axios
            .get(`${baseURL}users/${receiverId}`, {
                headers: { Authorization: `Bearer ${props.token}` }
            })
            .then((res)=>{
                setUser(res.data);
            })
            .catch((error)=>console.log(error));
            */
    },[user, props.senderId])

    return (
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
    )
}

export default Conversation;