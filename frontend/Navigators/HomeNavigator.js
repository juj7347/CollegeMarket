import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import ProductContainer from "../Screens/Products/ProductContainer";
import SingleProduct from "../Screens/Products/SingleProduct";
import ChattingRoom from "../Screens/Chats/ChattingRoom";

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={ProductContainer}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Product_Detail"
                component={SingleProduct}
                options={{
                    //headerShown: false
                    headerTransparent: true,
                    title: ""
                }}
            />
            <Stack.Screen
                name="Chat_from_Product"
                component={ChattingRoom}
                options={({route})=>({
                    //headerShown: false
                    title: route.params.userName,
                })}
            />
            
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <HomeStack />;
}