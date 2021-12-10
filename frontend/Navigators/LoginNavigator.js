import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Screens/User/Login";
import Register from "../Screens/User/Register";
import CollegeSelect from "../Screens/User/CollegeSelect";

const Stack = createStackNavigator();

function LoginStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="CollegeSelect"
                component={CollegeSelect}
                options={{
                    //headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default function LoginNavigator() {
    return <LoginStack />;
}