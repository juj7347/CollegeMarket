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

const ChattingRoom = (props) => {

    const context = useContext(AuthGlobal);

    const [messages, setMessages] = useState([]);
    const [localIPAddress, setLocalIPAddress] = useState();

    const socket = useRef(io("http://192.168.35.9:3000", { //ip address needs to be hided
        forceNew: true
    }));

    //socketio
    useEffect(()=>{
        console.log(context.stateUser.user)
        socket.current.emit("addUser", context.stateUser.user.userId)
        socket.current.on("getUsers", users=>console.log(users))
        /*
        setSocket(io("http://192.168.35.9:3000", { //ip address needs to be hided
            forceNew: true
        }));
        */
    },[context.stateUser.user])
    



    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: "Jenny",
                    avatar: "https://placeimg.com/140/140/any"
                }
            },
            {
                _id: 2,
                text: "hello worldhello world",
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: "Eugene",
                    avatar: "https://placeimg.com/140/140/any"
                }
            }
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
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

export default ChattingRoom;