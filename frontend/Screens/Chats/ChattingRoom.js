import React, {useState, useCallback, useEffect, useContext, useRef} from "react";
import { View, Text, Button, FlatList } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import {useFocusEffect} from "@react-navigation/native";

import AuthGlobal from "../../Context/store/AuthGlobal";
import AsyncStorage from "@react-native-async-storage/async-storage";

import baseURL from "../../assets/common/baseURL";
import axios from "axios";

import {io} from 'socket.io-client';

import { connect } from "react-redux";
import chatItems from "../../Redux/Reducers/chatItems";


const ChattingRoom = (props) => {

    const context = useContext(AuthGlobal);
    const [conversation, setConversation] = useState();
    const [receiverId, setReceiverId] = useState();
    const [messages, setMessages] = useState([]);
    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(true);

/*
    useFocusEffect((
        useCallback(()=>{
            
            AsyncStorage
            .getItem("jwt")
            .then((res)=>{
                setToken(res);
                if(props.chatItems.conversation.found !== false) {
                    axios
                        .get(`${baseURL}messages/${conversation._id}`, {
                            headers: { Authorization: `Bearer ${res}` }
                        })
                        .then((res)=>{
                            setMessages(res.data);
                        })
                        .catch((error)=>console.log(error));
                }
                else {
                    axios
                        .post(`${baseURL}conversations`, {senderId: context.stateUser.user.userId, receiverId: props.route.params.receiverId})
                        .then((res)=>{
                            setConversation(res.data);
                            setReceiverId(props.route.params.receiverId);
                        })
                        .catch((error)=>console.log(error));
                    
                }
                setLoading(false);
            })
            .catch((error)=>console.log(error));
            
           
            if(props.chatItems.conversation.found !== false) {
                axios
                    .get(`${baseURL}messages/${conversation._id}`, {
                        headers: { Authorization: `Bearer ${res}` }
                    })
                    .then((res)=>{
                        setMessages(res.data);
                    })
                    .catch((error)=>console.log(error));
            }
            else {
                axios
                    .post(`${baseURL}conversations`, {senderId: context.stateUser.user.userId, receiverId: props.route.params.receiverId})
                    .then((res)=>{
                        setConversation(res.data);
                        setReceiverId(props.route.params.receiverId);
                    })
                    .catch((error)=>console.log(error));
                
            }
            setLoading(false);
            return () => {
                setMessages();
                setLoading();
            }
        },[])
    ))
*/
    useEffect(()=>{
        if(props.chatItems.conversation.found !== false) {
            axios
                .get(`${baseURL}messages/${props.chatItems.conversation._id}`)
                .then((res)=>{
                    setMessages(res.data);
                    setConversation(props.chatItems.conversation);
                    setReceiverId(props.chatItems.conversation.members.find(id => id !== context.stateUser.user.userId));
                })
                .catch((error)=>console.log(error));
        }
        else {
            axios
                .post(`${baseURL}conversations`, {senderId: context.stateUser.user.userId, receiverId: props.route.params.receiverId})
                .then((res)=>{
                    setConversation(res.data);
                    setReceiverId(props.route.params.receiverId);
                })
                .catch((error)=>console.log(error));
            
        }
        setLoading(false);
        return () => {
            setMessages();
            setLoading();
        }
    },[])

    //socketio
    
    useEffect(()=>{
        
        context.socket.on("messageToClient", (message) => {
            setMessages(previousMessages => GiftedChat.append(previousMessages ,[message]));
        });
        
       return () => {
            setMessages();
       }
    },[]);
    

    const onSend = (messageSent = []) => {
        

        context.socket.emit("messageToServer", {
            text: messageSent[0].text,
            receiverId: receiverId,
            senderId: context.stateUser.user.userId
        });
        

        setMessages(previousMessages => GiftedChat.append(previousMessages, messageSent))

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
       
        const message = {
            conversationId: conversation._id,
            sender: context.stateUser.user.userId,
            receiver: receiverId,
            text: messageSent[0].text,
            createdAt: Date.now(),
            senderName: "test"
        }

        const lastMessage = messageSent[0].text ? messageSent[0].text : "";

        axios
            .post(`${baseURL}messages/`, message, config)
            .then(res=>{})
            .catch((error)=>console.log(error))

        axios
            .put(`${baseURL}conversations/${conversation._id}`, {
                lastMessage: lastMessage,
                lastSent: Date.now()
            }, config)
            .then((res)=>{console.log(res.data)})
            .catch((err) => console.log(err));

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
            onSend={messageSent => onSend(messageSent)}
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

    
    ) : <View><Text>loading</Text></View>
}

const mapStateToProps = (state) => {
    const { chatItems } = state;
    return {
        chatItems: chatItems
    }
}

export default connect(mapStateToProps, null)(ChattingRoom);