import React, {useState, useCallback, useEffect} from "react";
import { View } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Chat = (props) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "hello world",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: "Jenny",
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
                    }
                }}
                textStyle={{
                    right: {
                        color: '#fff'
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
        />
    )
}

export default Chat;