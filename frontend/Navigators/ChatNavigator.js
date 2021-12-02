import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import ChattingList from "../Screens/Chats/ChattingList"
import ChattingRoom from "../Screens/Chats/ChattingRoom";



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