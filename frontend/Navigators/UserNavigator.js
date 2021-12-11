import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WishList from "../Screens/User/WishList/WishList";

import CustomerService from "../Screens/User/CustomerService";
import UserProfile from "../Screens/User/UserProfile";
import ProfileChange from "../Screens/User/ProfileChange";

const Stack = createStackNavigator();

function UserStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="UserProfile"
                component={UserProfile}
                options={{
                    headerLeft: null,
                }}
            />
            <Stack.Screen
                name="ProfileChange"
                component={ProfileChange}
                options={{
                }}
            />
            <Stack.Screen
                name="SellPosts"
                component={WishList}
                options={{
                }}
            />
            <Stack.Screen
                name="CommunityPosts"
                component={WishList}
                options={{
                }}
            />
            <Stack.Screen
                name="CommentPosts"
                component={WishList}
                options={{
                }}
            />
            <Stack.Screen
                name="LikedPosts"
                component={WishList}
                options={{
                }}
            />
            <Stack.Screen
                name="CustomerService"
                component={CustomerService}
                options={{
                }}
            />
        </Stack.Navigator>
    )
}

export default function UserNavigator() {
    return <UserStack />;
}