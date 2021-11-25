import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Chat from "../Screens/Chats/Chat";//todelete?
import Messenger from "../Screens/Chats/NewChat/Messenger";

const Stack = createStackNavigator();

function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Chat"
                component={Messenger}
                options={{
                    headerShown: false
                }}
            />
            
            
        </Stack.Navigator>
    )
}

export default function ChatNavigator() {
    return <ChatStack />;
}