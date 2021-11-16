import React, {useContext} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

//Stack
import HomeNavigator from "./HomeNavigator";
import ChatNavigator from "./ChatNavigator";
import UserNavigator from "./UserNavigator";
import AdminNavigator from "./AdminNavigator";

import AuthGlobal from "../Context/store/AuthGlobal";

const Tab = createBottomTabNavigator();

const Main = () => {

    const context = useContext(AuthGlobal);

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="home"
                            style={{position: "relative"}}
                            color={color}
                            size={30}
                        />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name="chatbox"
                            style={{position: "relative"}}
                            color={color}
                            size={30}
                        />
                    ),
                    headerShown: false
                }}
            />
            {context.stateUser.user.isAdmin === true ? (
                <Tab.Screen
                name="Admin"
                component={AdminNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name="cog"
                            style={{position: "relative"}}
                            color={color}
                            size={30}
                        />
                    ),
                    headerShown: false
                }}
                />
            ) : null}
            
            <Tab.Screen
                name="Community"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name="school"
                            style={{position: "relative"}}
                            color={color}
                            size={30}
                        />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="User"
                component={UserNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name="md-person"
                            style={{position: "relative"}}
                            color={color}
                            size={30}
                        />
                    ),
                    headerShown: false
                }}
            />
            
        </Tab.Navigator>
    )
}

export default Main;