import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import ProductContainer from "../Screens/Products/ProductContainer";
import SingleProduct from "../Screens/Products/SingleProduct";
import CategorySelect from "../Screens/Category/CategorySelect";
import { HeaderStyleInterpolators } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import SearchScreen from "../Screens/Search/Search";
import UserProfile from "../Screens/User/UserProfile";
import WishList from "../Screens/User/WishList/WishList";

const Stack = createStackNavigator();

function UserStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen
                name="Profile"
                component={UserProfile}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SellPosts"
                component={UserProfile}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="CommunityPosts"
                component={UserProfile}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="CommentPosts"
                component={UserProfile}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="LikedPosts"
                component={WishList}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <UserStack />;
}