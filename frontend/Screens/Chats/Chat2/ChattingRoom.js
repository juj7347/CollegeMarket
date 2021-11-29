import React, {useState, useCallback, useEffect, useContext, useRef} from "react";
import { View } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import {useFocusEffect} from "@react-navigation/native";

import AuthGlobal from "../../../Context/store/AuthGlobal";
import AsyncStorage from "@react-native-async-storage/async-storage";

import baseURL from "../../../assets/common/baseURL";
import axios from "axios";

import {io} from 'socket.io-client';
import {NetworkInfo} from "react-native-network-info"; //npm remove

import { connect } from "react-redux";
import chatItems from "../../../Redux/Reducers/chatItems";

const ChattingRoom = (props) => {

    const context = useContext(AuthGlobal);

    const [messages, setMessages] = useState([]);
    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(true);


    //socketio
    useEffect(()=>{
        AsyncStorage
            .getItem("jwt")
            .then((res)=>{
                setToken(res);
                axios
                    .get(`${baseURL}messages/${props.chatItems.conversation._id}`, {
                        headers: { Authorization: `Bearer ${res}` }
                    })
                    .then((res)=>{
                        setMessages(res.data);
                    })
                    .catch((error)=>console.log(error));
                setLoading(false);
            })
            .catch((error)=>console.log(error));
        

        context.socket.on("messageToClient", (message) => {
            setMessages(previousMessages => GiftedChat.append(previousMessages ,[message]));
        });
        
       return () => {
            setMessages();
       }
    },[]);
    /*
    useEffect(()=>{
        socket.current.emit("join", {userId: context.stateUser.user.userId, username: "John Doe"});

    },[context.stateUser.user])
    */


    const onSend = (messages = []) => {
        context.socket.emit("messageToServer", {
            text: messages[0].text,
            receiverId: props.chatItems.conversation.members.find(id => id !== context.stateUser.user.userId),
            senderId: context.stateUser.user.userId
        });
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))

       const config = {
           headers: {
               Authorization: `Bearer ${token}`,
               "Content-Type": "application/json"
           }
       }
       
       const message = {
        conversationId: props.chatItems.conversation._id,
        sender: context.stateUser.user.userId,
        receiver: props.chatItems.conversation.members.find(id => id !== context.stateUser.user.userId),
        text: messages[0].text,
        createdAt: Date.now(),
        senderName: "test"
        }

        axios
            .post(`${baseURL}messages/`, message, config)
            .then(res=>{
                console.log("sent")
            })
            .catch((error)=>console.log(error))
    }

    const renderBubble = (options) => {
        return (
            <Bubble
                {...options}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#64B5F6'
                    },
                    left: {
                        backgroundColor: 'gainsboro'
                    }
                }}
                textStyle={{
                    right: {
                        color: '#fff'
                    },
                    left: {
                        color: "#000"
                    }
                }}
            />
        );
    }

    const renderSend = (options) => {
        return (
            <Send
                {...options}
                containerStyle={{justifyContent: 'center'}}
            >
                <View>
                    <MaterialCommunityIcons
                        name="send-circle"
                        size={32}
                        color={options.text === "" ? "gainsboro" : "#64B5F6"}
                        style={{marginRight: 5}}
                    />
                </View>
            </Send>
        );
    }

    const scrollToBottomComponent = () => {
        return (
            <FontAwesome
                name="angle-double-down"
                size={22}
                color="#333"
            />
        )
    }

    return !loading ? (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: context.stateUser.user.userId
            }}
            renderBubble={renderBubble}
            renderSend={renderSend}
            alwaysShowSend={true}
            scrollToBottom={true}
            scrollToBottomComponent={scrollToBottomComponent}
            messagesContainerStyle={{backgroundColor: "#fff"}}

        />
    ) : null
}

const mapStateToProps = (state) => {
    const { chatItems } = state;
    return {
        chatItems: chatItems
    }
}

export default connect(mapStateToProps, null)(ChattingRoom);