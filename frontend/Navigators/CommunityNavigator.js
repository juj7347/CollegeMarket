import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductContainer from "../Screens/Products/ProductContainer";
import SingleProduct from "../Screens/Products/SingleProduct";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

function CommunityDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={ProductContainer}
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
                name="Product_Detail"
                component={SingleProduct}
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
            
        </Drawer.Navigator>
    )
}

export default function CommunityNavigator() {
    return <CommunityDrawer />;
}