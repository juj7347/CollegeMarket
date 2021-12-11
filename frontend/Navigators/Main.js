import React, {useContext, useEffect, useState} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

//Stack
import HomeNavigator from "./HomeNavigator";
import ChatNavigator from "./ChatNavigator";
import UserNavigator from "./UserNavigator";
import AdminNavigator from "./AdminNavigator";

import CommunityDrawer from "./CommunityDrawer";
import CommunityNavigator from "./CommunityNavigatorr";

import SearchScreen from "../Screens/Search/Search"
import LoginNavigator from "./LoginNavigator"

import AuthGlobal from "../Context/store/AuthGlobal";
import { TouchableOpacity } from "react-native-gesture-handler";

//new
import { BorderlessButton } from "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => {

  const context = useContext(AuthGlobal);
  const [loggedIn, setLoggedin] = useState(false);

  useEffect(()=>{
    setLoggedin(context.stateUser.isAuthenticated);

    return () => setLoggedin();
  },[context.stateUser.isAuthenticated])

  return (
    <Stack.Navigator>
      {loggedIn ? (
          <Stack.Screen
            name="Main"
            component={Market}
            options={{
              headerShown: false
            }}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={LoginNavigator}
            options={{
              headerShown: false
            }}
          />
        )
      }
    </Stack.Navigator>
  )
}

const Market = () => {

    const context = useContext(AuthGlobal);
    const [loggedIn, setLoggedin] = useState(false);


    const getTabBarVisibility = (navigation) => {
      /*
      const routeName = navigation.getState().routes[navigation.getState().index].state
      ? navigation.getState().routes[navigation.getState().index].state.routes[navigation.getState().routes[navigation.getState().index].state.index].name
      : ""
      if(
        routeName == "Chatroom" ||
        routeName == "Home" ||
        routeName == "Products" ||
        routeName == "Community" ||
        routeName == "UserProfile"
      ) {
        console.log("yp",routeName)
        return null;
      }
      console.log(routeName)
      return null;
      */

     /*
      const index = navigation.getState().index;
      if(navigation.getState().routes[index].state) {
        const routeIndex = navigation.getState().routes[index].state.index;
        const routeName = navigation.getState().routes[index].state.routes[routeIndex].name;
        console.log(routeName)
      }
      */

      
      const index = navigation.getState().routes[navigation.getState().index].state
        ? navigation.getState().routes[navigation.getState().index].state.index
        : 0
      if (index === 0) {
        return null
      }
      return 'none';
      
     
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
                  headerShown: getTabBarVisibility(navigation) !== 'none',
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
                        <View style={{flexDirection:'row'}}>
                          <TouchableOpacity
                          onPress={() => navigation.navigate("Category")}
                          style={{ marginRight: 15 }}
                        >
                          <Icon
                            name="menu"
                            size={Platform.OS === "ios" ? 22 : 27}
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
                  
                })}
            />
            <Tab.Screen
                name="Chatroom"
                component={ChatNavigator}
                options={({route,navigation})=>({
                  tabBarStyle: {display: getTabBarVisibility(navigation)},
                  tabBarIcon: ({color}) => (
                      <Icon
                          name="chatbox"
                          style={{position: "relative"}}
                          color={color}
                          size={30}
                      />
                  ),
                  headerShown: false,
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
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default Main;