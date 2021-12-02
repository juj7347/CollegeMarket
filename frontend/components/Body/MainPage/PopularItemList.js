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

export default function PopularItemList(){
    return(
        <NativeBaseProvider>
            <Text>
                여기에 아이템 놓음(로그인 후)
            </Text>
        </NativeBaseProvider>
    );
};