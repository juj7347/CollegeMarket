import * as React from 'react';
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

const TopBar = () => {
    return(
      <>
        <Box borderBottomWidth = '1' borderColor = 'white' backgroundColor = 'blue.300'>
          <HStack space = {3} pb = {5} justifyContent = 'space-between' mx = {3}>
            <HStack space = "1">
              <IconButton icon = {<Icon as = {FontAwesome} name = "arrow-left"/>} _icon = {{color : "white"}}/>
            </HStack>
            <HStack  space = "2">
              <Text fontSize = "20px" color = 'white' mt = {2}>글쓰기</Text>
            </HStack>
            <HStack space = "3">
              <Text fontSize = "20px" color = 'blue.300'> space</Text>
            </HStack>
          </HStack>
        </Box>
    </>
    );
};

export default TopBar;