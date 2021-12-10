import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import ProductContainer from "../Screens/Products/ProductContainer";
import SingleProduct from "../Screens/Products/SingleProduct";
import CategorySelect from "../Screens/Category/CategorySelect";
import { HeaderStyleInterpolators } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import SearchScreen from "../Screens/Search/Search";

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
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="AppDrawer"
                component = {CategorySelect}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
            
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <HomeStack />;
}