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
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import NativeBaseIcon from "./components/NativeBaseIcon";
import LoginPage from "./components/Body/Login/LoginPage";
import AppBar from "./components/Header/AppBar";
import BottomBar from "./components/Footer/BottomBar";
import Home from "./components/Body/Home";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="MyPage" component={LoginPage}/>
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <MyDrawer/>
      <Tab.Navigator
        screenOptions={({ route }) => ({
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
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="MyPage" component={LoginPage}/>
          <Tab.Screen name="Product" component={Home}/>
          <Tab.Screen name="Chat" component={LoginPage}/>
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

