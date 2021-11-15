import React from "react";
//native-base
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
import NativeBaseIcon from "./components/NativeBaseIcon";
import { NavigationContainer } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";

//Navigators
import Main from "./Navigators/Main";

//Screens
import ProductContainer from "./Screens/Products/ProductContainer";
import Header from "./Shared/Header";

//redux
import { Provider } from 'react-redux';
import store from "./Redux/store";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

//for test
import ChattingRoom from "./components/Body/Chat/ChattingRoom/ChattingRoom";
import LoginPage from "./components/Body/Login/LoginPage";
import MainPage from "./components/Body/MainPage/MainPage";
export default function App() {
  return (
    <NativeBaseProvider>
      <ChattingRoom/>
    </NativeBaseProvider>
  );
}
