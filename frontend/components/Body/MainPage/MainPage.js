import * as React from 'react';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import SearchBar from './SearchBar';
import Title from './Title';

export default function MainPage(){
    return(
        <NativeBaseProvider>
            <Title/>
            <SearchBar/>
        </NativeBaseProvider>
    );
};