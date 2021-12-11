import * as React from 'react';
import { useState } from 'react';
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
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
  ScrollView,
} from 'native-base';


const BoxBottom = () => {
    const [visible, setVisible] = React.useState(false)
    const toggleState = () => {
        setVisible(!visible);
    };

    return(
        <>
            <Box>
                <HStack space = {2} justifyContent = 'space-between'>
                    <HStack space = '1'>
                    </HStack>
                    <HStack space = '2'>
                        <Text mt = {3}>댓글</Text>
                        <IconButton icon = {<Icon as = {FontAwesome} name = 'comments'  onPress = {toggleState}/>}/>
                    </HStack>
                </HStack>
            </Box>
        </>
    );
};

export default BoxBottom;