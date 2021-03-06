import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Products from "../Screens/Admin/Products";
import Categories from "../Screens/Admin/Categories";

const Stack = createStackNavigator();

function AdminStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Products"
                component={Products}
                options={{
                    title: "Products"
                }}
            />
            <Stack.Screen
                name="Categories"
                component={Categories}
            />
        </Stack.Navigator>
    )
}

export default function AdminNavigator() {
    return <AdminStack/>;
}