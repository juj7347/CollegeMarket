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

//context API
import Auth from "./Context/store/Auth";

//toast
import Toast from 'react-native-toast-message';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
          <NavigationContainer>
            <NativeBaseProvider>
              <Main/>
              <Toast ref={(ref)=> Toast.setRef(ref)}/>
            </NativeBaseProvider>
          </NavigationContainer>
      </Provider>
    </Auth>
  );
}
