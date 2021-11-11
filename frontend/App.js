import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import { 
  NavigationContainer,
  useNavigation 
} from "@react-navigation/native";
import { RectButton, BorderlessButton } from "react-native-gesture-handler";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import NativeBaseIcon from "./components/NativeBaseIcon";
import LoginPage from "./components/Body/Login/LoginPage";
import AppBar from "./components/Header/AppBar";
import BottomBar from "./components/Footer/BottomBar";
import Home from "./components/Body/Home";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} 
      options={{
        headerRight: (props) => {
          const navigation = useNavigation();
          return (
            <BorderlessButton
              onPress={() => navigation.navigate("SearchScreen")}
              style={{ marginRight: 15 }}
            >
              <Ionicons
                name="md-search"
                size={Platform.OS === "ios" ? 22 : 25}
              />
            </BorderlessButton>
          )
         }
         }}/>
      <Drawer.Screen name="Chat" component={LoginPage}
      options={{
        headerRight: (props) => {
          const navigation = useNavigation();
          return (
            <BorderlessButton
              onPress={() => navigation.navigate("SearchScreen")}
              style={{ marginRight: 15 }}
            >
              <Ionicons
                name="md-search"
                size={Platform.OS === "ios" ? 22 : 25}
              />
            </BorderlessButton>
          )
         }
         }}/>
    </Drawer.Navigator>
  )
}
function SearchScreen() {
  return (
    <Text> Search Screen </Text>
  )
}
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarButton: [
            "SearchScreen",
          ].includes(route.name)
            ? () => {
                return null;
              }
            : undefined,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'MyPage') {
              iconName = focused ? 'magnify' : 'magnify';
            }
            else if (route.name === 'Product') {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            else if (route.name === 'Chat') {
              iconName = focused ? 'forum' : 'forum-outline';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
          <Tab.Screen name="Home" component={Home}
          options={{
            headerRight: (props) => {
              const navigation = useNavigation();
              return (
                <BorderlessButton
                  onPress={() => navigation.navigate("SearchScreen")}
                  style={{ marginRight: 15 }}
                >
                  <Ionicons
                    name="md-search"
                    size={Platform.OS === "ios" ? 22 : 25}
                  />
                </BorderlessButton>
              )
             }
             }} />
          <Tab.Screen name="MyPage" component={LoginPage}
          options={{
            headerRight: (props) => {
              const navigation = useNavigation();
              return (
                <BorderlessButton
                  onPress={() => navigation.navigate("SearchScreen")}
                  style={{ marginRight: 15 }}
                >
                  <Ionicons
                    name="md-search"
                    size={Platform.OS === "ios" ? 22 : 25}
                  />
                </BorderlessButton>
              )
             }
             }}
          />
          <Tab.Screen name="Product" component={Home}
          options={{
            headerRight: (props) => {
              const navigation = useNavigation();
              return (
                <BorderlessButton
                  onPress={() => navigation.navigate("SearchScreen")}
                  style={{ marginRight: 15 }}
                >
                  <Ionicons
                    name="md-search"
                    size={Platform.OS === "ios" ? 22 : 25}
                  />
                </BorderlessButton>
              )
             }
             }}/>
          <Tab.Screen 
            name="Chat" 
            component={MyDrawer}
            options={{ headerShown: false }}/>
          <Tab.Screen
            name="SearchScreen"
            component={SearchScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

