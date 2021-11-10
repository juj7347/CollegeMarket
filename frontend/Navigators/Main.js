import React, {useContext} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

//Stack
import HomeNavigator from "./HomeNavigator";
import ChatNavigator from "./ChatNavigator";

const Tab = createBottomTabNavigator();

const Main = () => {
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
            <Tab.Screen
                name="Admin"
                component={HomeNavigator}
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
                component={HomeNavigator}
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