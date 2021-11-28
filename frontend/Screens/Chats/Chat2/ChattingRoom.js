import React, {useState, useCallback, useEffect, useContext, useRef} from "react";
import { View } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import AuthGlobal from "../../../Context/store/AuthGlobal";

import baseURL from "../../../assets/common/baseURL";
import axios from "axios";

import {io} from 'socket.io-client';
import {NetworkInfo} from "react-native-network-info"; //npm remove

import { connect } from "react-redux";
import chatItems from "../../../Redux/Reducers/chatItems";

const ChattingRoom = (props) => {

    const context = useContext(AuthGlobal);

    const [messages, setMessages] = useState([]);

    const socket = useRef();

    //socketio
    useEffect(()=>{
        socket.current = io("http://192.168.35.9:3000") //ip address needs to be hided
        /*
        socket.current.on("getMessage", (data)=>{
            setMessagesRecv({
                sender: data.senderId,
                text: data.text
            })
        });
        */
       
    },[]);

    useEffect(()=>{
        socket.current.emit("addUser", context.stateUser.user.userId)
        socket.current.on("getUsers", users=>console.log(users))
        /*
        setSocket(io("http://192.168.35.9:3000", { //ip address needs to be hided
            forceNew: true
        }));
        */
    },[context.stateUser.user])



    const onSend = useCallback((messagesSent = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messagesSent))
        //채팅대상에 대한 id구해야함
        const receiverId = props.chatItems.userId;
        
        socket.current.emit("sendMessage", {
            senderId: context.stateUser.user.userId,
            receiverId: receiverId,
            text: messagesSent[0].text
        });
    }, [])

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

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1
            }}
            renderBubble={renderBubble}
            renderSend={renderSend}
            alwaysShowSend={true}
            scrollToBottom={true}
            scrollToBottomComponent={scrollToBottomComponent}
            messagesContainerStyle={{backgroundColor: "#fff"}}
        />
    )
}

const mapStateToProps = (state) => {
    const { chatItems } = state;
    return {
        chatItems: chatItems
    }
}

export default connect(mapStateToProps, null)(ChattingRoom);