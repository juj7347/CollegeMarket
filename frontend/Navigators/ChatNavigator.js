import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

//import Chat from "../Screens/Chats/Chat";//todelete?
//newchat
import Messenger from "../Screens/Chats/NewChat/Messenger";
//chat2
import ChattingList from "../Screens/Chats/Chat2/ChattingList"
import ChattingRoom from "../Screens/Chats/Chat2/ChattingRoom";



const Stack = createStackNavigator();

function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Message"
                component={ChattingList}
                options={{
                    //headerShown: false
                }}
            />
            <Stack.Screen
                name="Chat"
                component={ChattingRoom}
                options={({route}) => ({
                    title: route.params.userName,
                    headerBackTitleVisible: false
                })}
            />
            
            
        </Stack.Navigator>
    )
}

export default function ChatNavigator() {
    return <ChatStack />;
}