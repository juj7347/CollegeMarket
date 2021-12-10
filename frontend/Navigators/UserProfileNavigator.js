import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import ProductContainer from "../Screens/Products/ProductContainer";
import SingleProduct from "../Screens/Products/SingleProduct";
import CategorySelect from "../Screens/Category/CategorySelect";
import { HeaderStyleInterpolators } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import SearchScreen from "../Screens/Search/Search";
import UserProfile from "../Screens/User/UserProfile";
import WishList from "../Screens/User/WishList/WishList";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();

function UserStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen
                name="Profile"
                component={UserProfile}
                options={{
                    headerLeft: null,
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
            <Stack.Screen
                name="SellPosts"
                component={WishList}
                options={{
                }}
            />
            <Stack.Screen
                name="CommunityPosts"
                component={WishList}
                options={{
                }}
            />
            <Stack.Screen
                name="CommentPosts"
                component={WishList}
                options={{
                }}
            />
            <Stack.Screen
                name="LikedPosts"
                component={WishList}
                options={{
                }}
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <UserStack />;
}