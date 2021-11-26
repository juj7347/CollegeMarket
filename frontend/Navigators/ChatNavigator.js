import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

//import Chat from "../Screens/Chats/Chat";//todelete?
//newchat
import Messenger from "../Screens/Chats/NewChat/Messenger";
//chat2
import Message from "../Screens/Chats/Chat2/Message"
import Chat from "../Screens/Chats/Chat2/Chat";



const Stack = createStackNavigator();

function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Message"
                component={Message}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Chat"
                component={Chat}
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