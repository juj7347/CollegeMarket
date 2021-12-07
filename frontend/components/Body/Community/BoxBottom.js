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

import ReplyBox from './ReplyBox';

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
                        <IconButton icon = {<Icon as = {FontAwesome} name = 'thumbs-o-up'/>}/>
                        <IconButton icon = {<Icon as = {FontAwesome} name = 'thumbs-o-down'/>} />
                    </HStack>
                    <HStack space = '2'>
                        <IconButton icon = {<Icon as = {FontAwesome} name = 'comments'  onPress = {toggleState}/>}/>
                    </HStack>
                </HStack>
            </Box>
            {visible && <ReplyBox/>}
        </>
    );
};

export default BoxBottom;