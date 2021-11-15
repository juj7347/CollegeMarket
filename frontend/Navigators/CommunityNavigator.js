import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from "@react-navigation/native";
import ProductContainer from "../Screens/Products/ProductContainer";
import SingleProduct from "../Screens/Products/SingleProduct";
import { BorderlessButton } from "react-native-gesture-handler/";
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

function MyStack() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Community"
                component={ProductContainer}
                options={{
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
                name="community A"
                component={SingleProduct}
                options={{
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
                name="community B"
                component={SingleProduct}
                options={{
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
                name="community C"
                component={SingleProduct}
                options={{
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

export default function HomeNavigator() {
    return <MyStack />;
}