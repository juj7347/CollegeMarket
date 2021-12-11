import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import PostFeed from "../Screens/Feed/PostFeed/PostF";
import Category from "../Screens/Feed/PostFeed/Category";
import Community from "../Screens/Community/Community";

const Stack = createStackNavigator();

function CommunityStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Community"
                component={Community}
            />
            <Stack.Screen
                name="post feed"
                component={PostFeed}
            />
            <Stack.Screen
                name="category select"
                component={Category}
            />
        </Stack.Navigator>
    )
}

export default function CommunityNavigator(){
    return <CommunityStack />;
}