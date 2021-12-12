import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import PostFeed from "../Screens/Community/PostFeed/PostFeed"
import Category from "../Screens/Community/PostFeed/Category";
import Community from "../Screens/Community/Community";
import SinglePost from "../Screens/Community/SinglePost";

const Stack = createStackNavigator();

function CommunityStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Community"
                component={Community}
            />
            <Stack.Screen
                name="SinglePost"
                component={SinglePost}
            />
            <Stack.Screen
                name="PostFeed"
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