import * as React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
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
import SearchBar from './SearchBar';

const TopBar = () => {
    return(
        <Box  h = '10%' backgroundColor = 'blue.300' mt = {10}>
            <VStack space = {2}>
                <VStack space = '1'>
                    <HStack space = {3} justifyContent = 'space-around'>
                        <HStack space = "0">
                            <Text>Icon1</Text>
                        </HStack>
                        <HStack space = "1">
                            <Text fontSize = "20px" color = 'white' fontWeight = 'bold'>대학 시장</Text>
                        </HStack>
                        <HStack space = "2">
                            <Text>Icon2</Text>
                        </HStack>
                    </HStack>
                </VStack>
                <VStack alignItems = 'center'>
                    <SearchBar/>
                </VStack>    
            </VStack>

        </Box>
    );
};
export default TopBar;