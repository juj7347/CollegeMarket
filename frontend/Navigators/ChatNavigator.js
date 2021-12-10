import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import ChattingList from "../Screens/Chats/ChattingList"
import ChattingRoom from "../Screens/Chats/ChattingRoom";

import { useNavigation } from "@react-navigation/native";

import { Button } from "react-native";

const Stack = createStackNavigator();

function ChatStack() {
    return (
        <Stack.Navigator
            initialRouteName="Message"
        >
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
                        
                    headerBackTitleVisible: false
                })}
            />
            
            
        </Stack.Navigator>
    )
}

export default function ChatNavigator() {
    return <ChatStack />;
}