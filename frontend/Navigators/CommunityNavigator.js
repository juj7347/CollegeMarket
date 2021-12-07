import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductContainer from "../Screens/Products/ProductContainer";
import SingleProduct from "../Screens/Products/SingleProduct";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import CommunityMainPage from "../components/Body/Community/CommunityMainPage";
import MakePostPage from "../components/Body/Community/MakePostPage/MakePostPage";
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

function CommunityDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="커뮤니티"
                component={CommunityMainPage}
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
            
            <Drawer.Screen
                name="과외"
                component={CommunityMainPage}
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
            <Drawer.Screen
                name="학교 행사"
                component={CommunityMainPage}
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
                        <Drawer.Screen
                name="취미"
                component={CommunityMainPage}
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
                        <Drawer.Screen
                name="진로"
                component={CommunityMainPage}
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
            <Drawer.Screen
                name="새 게시물"
                component={MakePostPage}
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
                            onPress={() => navigation.navigate("CommunityMainPage")}
                            style={{ marginRight: 15 }}
                          >
                            <Icon
                              name="md-checkbox-outline"
                              size={Platform.OS === "ios" ? 22 : 25}
                            />
                          </BorderlessButton>
                        )
                    }
                }}
            />
            
        </Drawer.Navigator>
    )
}

export default function CommunityNavigator() {
    return <CommunityDrawer />;
}