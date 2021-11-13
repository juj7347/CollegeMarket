import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Chat from "../Screens/Chats/Chat";

const Stack = createStackNavigator();

function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Chat"
                component={Chat}
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