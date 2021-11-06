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
import NativeBaseIcon from "./components/NativeBaseIcon";
import LoginPage from "./components/Body/Login/LoginPage";
import AppBar from "./components/Header/AppBar";
import BottomBar from "./components/Footer/BottomBar";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppBar/>
      <LoginPage/>
      <BottomBar/>
    </NativeBaseProvider>
  );
}

