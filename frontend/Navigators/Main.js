import React, {useContext} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

//Stack
import HomeNavigator from "./HomeNavigator";
import ChatNavigator from "./ChatNavigator";
import UserNavigator from "./UserNavigator";
import AdminNavigator from "./AdminNavigator";
//import CommunityNavigator from "./CommunityNavigator";

import AuthGlobal from "../Context/store/AuthGlobal";

//new
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Main = () => {

    const context = useContext(AuthGlobal);

    const getTabBarVisibility = (navigation) => {
      /*
      const routeName = navigation.getState().routes[navigation.getState().index].state
      ? navigation.getState().routes[navigation.getState().index].state.routes[navigation.getState().routes[navigation.getState().index].state.index].name
      : ""
      if(
        routeName == "Chat" ||
        routeName == "Product_Detail"
      ) {
        return 'none';
      }

      return 'flex';
      */
      const index = navigation.getState().routes[navigation.getState().index].state
        ? navigation.getState().routes[navigation.getState().index].state.index
        : 0
      if ( index !== 0)
        return 'none';
      return null
    };

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
                options={({navigation})=>({
                  tabBarStyle: {display: getTabBarVisibility(navigation)},
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
                  
                })}
            />
            <Tab.Screen
                name="Chatroom"
                component={ChatNavigator}
                options={({navigation})=>({
                  tabBarStyle: {display: getTabBarVisibility(navigation)},
                  tabBarIcon: ({color}) => (
                      <Icon
                          name="chatbox"
                          style={{position: "relative"}}
                          color={color}
                          size={30}
                      />
                  ),
                  headerShown: false
                  /*
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
                  */
                 
                })}
            />
            {context.stateUser.user.isAdmin === true ? (
                <Tab.Screen
                name="Admin"
                component={AdminNavigator}
                options={({navigation})=>({
                    tabBarStyle: {display: getTabBarVisibility(navigation)},
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
                })}
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