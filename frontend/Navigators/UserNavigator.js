import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WishList from "../Screens/User/MyItems/WishList";
import MyProducts from "../Screens/User/MyItems/MyProducts";

import CustomerService from "../Screens/User/CustomerService";
import UserProfile from "../Screens/User/UserProfile";
import ProfileChange from "../Screens/User/ProfileChange";
import SingleProduct from "../Screens/Products/SingleProduct";
import MyPosts from "../Screens/User/MyItems/MyPosts";

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
                component={MyProducts}
                options={{
                }}
            />
            <Stack.Screen
                name="CommunityPosts"
                component={MyPosts}
                options={{
                }}
            />
            <Stack.Screen
                name="CommentPosts"
                component={CustomerService}
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
            <Stack.Screen
                name="Product_Detail"
                component={SingleProduct}
                options={{
                    headerTransparent: true,
                    title: ""
                }}
            />
        </Stack.Navigator>
    )
}

export default function UserNavigator() {
    return <UserStack />;
}