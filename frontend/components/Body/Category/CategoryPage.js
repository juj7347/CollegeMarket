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

export default function CategoryPage(){
    return(
        <NativeBaseProvider>
            <Box  backgroundColor = 'blue.200' h = '10%'>
                <Text py = {10} alignSelf = 'center' color = 'white' fontSize = '2xl'>Category</Text>
            </Box>
            <Box flexDirection = 'row'>
                
            </Box>
        </NativeBaseProvider>
    );
};