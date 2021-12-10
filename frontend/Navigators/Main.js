import React, {useContext} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Menu, Pressable, Text } from "native-base"

//Stack
import HomeNavigator from "./HomeNavigator";
import ChatNavigator from "./ChatNavigator";
import UserNavigator from "./UserNavigator";
import AdminNavigator from "./AdminNavigator";
import CommunityNavigator from "./CommunityNavigator";
import SearchScreen from "../Screens/Search/Search"
import AuthGlobal from "../Context/store/AuthGlobal";

//new
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import CommunityMainPage from "../components/Body/Community/CommunityMainPage";
import CategorySelect from "../Screens/Category/CategorySelect";
import { LogoImage } from "./Logo";
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
                    title: "대학시장",
                    headerLeft: (props) => <LogoImage {...props} />,
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
                          <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity
                            onPress={() => navigation.navigate("AppDrawer")}
                            style={{ marginRight: 15 }}
                          >
                           <Icon
                                    style={{ marginRight: 10}}
                                      name="md-menu"
                                      size={Platform.OS === "ios" ? 22 : 25}
                                    />
                                    </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => navigation.navigate("SearchScreen")}
                            style={{ marginRight: 15 }}
                          >
                            <Icon
                              name="md-search"
                              size={Platform.OS === "ios" ? 22 : 25}
                            />
                          </TouchableOpacity>
                          </View>
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
                          <TouchableOpacity
                            onPress={() => navigation.navigate("SearchScreen")}
                            style={{ marginRight: 15 }}
                          >
                            <Icon
                              name="md-search"
                              size={Platform.OS === "ios" ? 22 : 25}
                            />
                          </TouchableOpacity>
                        )
                    }
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
                    headerRight: (props) => {
                        const navigation = useNavigation();
                        return (
                          <TouchableOpacity
                            onPress={() => navigation.navigate("SearchScreen")}
                            style={{ marginRight: 15 }}
                          >
                            <Icon
                              name="md-search"
                              size={Platform.OS === "ios" ? 22 : 25}
                            />
                          </TouchableOpacity>
                        )
                    }
                }}
                />
            ) : null}
            
            <Tab.Screen
                name="Community"
                component={CommunityNavigator}
                options={{
                    headerShown: false, 
                    tabBarIcon: ({color}) => (
                        <Icon
                            name="school"
                            style={{position: "relative"}}
                            color={color}
                            size={30}
                        />
                    ),
                    headerRight: (props) => {
                        const navigation = useNavigation();
                        return (
                          <TouchableOpacity
                            onPress={() => navigation.navigate("SearchScreen")}
                            style={{ marginRight: 15 }}
                          >
                            <Icon
                              name="md-search"
                              size={Platform.OS === "ios" ? 22 : 25}
                            />
                          </TouchableOpacity>
                        )
                    }
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
                    headerRight: (props) => {
                        const navigation = useNavigation();
                        return (
                          <TouchableOpacity
                            onPress={() => navigation.navigate("SearchScreen")}
                            style={{ marginRight: 15 }}
                          >
                            <Icon
                              name="md-search"
                              size={Platform.OS === "ios" ? 22 : 25}
                            />
                          </TouchableOpacity>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="CommunityMainPage"
                component={CommunityMainPage}
                options={{
                  tabBarButton: () => null,
                  tabBarVisible: false
                }}
            />
            <Tab.Screen
                name="CategorySelect"
                component={CategorySelect}
                options={{
                  tabBarButton: () => null,
                  tabBarVisible: false
                }}
            />
        </Tab.Navigator>
    )
}

export default Main;