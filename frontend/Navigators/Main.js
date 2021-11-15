import React, {useContext} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { BorderlessButton } from "react-native-gesture-handler/";

//Stack
import HomeNavigator from "./HomeNavigator";
import ChatNavigator from "./ChatNavigator";
import CommunityNavigator from "./CommunityNavigator"

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
                    headerRight: (props) => {
                        const navigation = useNavigation();
                        return (
                          <BorderlessButton
                            onPress={() => navigation.navigate("SearchScreen")}
                            style={{ marginRight: 15 }}
                          >
                            <Icon
                              name="md-search"
                              size={Platform.OS === "ios" ? 22 : 25}
                            />
                          </BorderlessButton>
                        )
                    }
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
                    headerRight: (props) => {
                        const navigation = useNavigation();
                        return (
                          <BorderlessButton
                            onPress={() => navigation.navigate("SearchScreen")}
                            style={{ marginRight: 15 }}
                          >
                            <Icon
                              name="md-search"
                              size={Platform.OS === "ios" ? 22 : 25}
                            />
                          </BorderlessButton>
                        )
                    }
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
                    headerRight: (props) => {
                        const navigation = useNavigation();
                        return (
                          <BorderlessButton
                            onPress={() => navigation.navigate("SearchScreen")}
                            style={{ marginRight: 15 }}
                          >
                            <Icon
                              name="md-search"
                              size={Platform.OS === "ios" ? 22 : 25}
                            />
                          </BorderlessButton>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Community"
                component={CommunityNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name="school"
                            style={{position: "relative"}}
                            color={color}
                            size={30}
                        />
                    ),
                    /*headerRight: (props) => {
                        const navigation = useNavigation();
                        return (
                          <BorderlessButton
                            onPress={() => navigation.navigate("SearchScreen")}
                            style={{ marginRight: 15 }}
                          >
                            <Icon
                              name="md-search"
                              size={Platform.OS === "ios" ? 22 : 25}
                            />
                          </BorderlessButton>
                        )
                    }*/
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
                    headerRight: (props) => {
                        const navigation = useNavigation();
                        return (
                          <BorderlessButton
                            onPress={() => navigation.navigate("SearchScreen")}
                            style={{ marginRight: 15 }}
                          >
                            <Icon
                              name="md-search"
                              size={Platform.OS === "ios" ? 22 : 25}
                            />
                          </BorderlessButton>
                        )
                    }
                }}
            />
            
        </Tab.Navigator>
    )
}

export default Main;