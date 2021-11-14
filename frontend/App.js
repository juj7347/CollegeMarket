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
import { LogBox } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

//Navigators
import Main from "./Navigators/Main";

//Screens
import ProductContainer from "./Screens/Products/ProductContainer";
import Header from "./Shared/Header";

//redux
import { Provider } from 'react-redux';
import store from "./Redux/store";

//toast
import Toast from 'react-native-toast-message';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

//for test
import ChatRoom from "./Screens/Chats/ChatRoom";
import LoginPage from "./components/Body/Login/LoginPage";
import MainPage from "./components/Body/MainPage/MainPage";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Main/>
          <Toast ref={(ref)=> Toast.setRef(ref)}/>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
