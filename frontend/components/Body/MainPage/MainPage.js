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

import PopularItemList from './PopularItemList';
import PopularStudyList from './PopularStudyList';
export default function MainPage(){
    return(
        <NativeBaseProvider>
                <Box safeArea flex={0.9} p="2" w="90%" h = "70%" mx="auto" py="8" backgroundColor = 'gray.200'>
                    <Button size = "lg" variant = "ghost" onPress={() => console.log("hello world")} 
                        _text={{
                            color: "muted.700",
                            fontSize: "4xl",
                            fontWeight: "bold",
                            alignSelf: 'center',
                        }}>College Market
                    </Button>
                    <Input mt = {5}
                    placeholder="Search"
                    variant="filled"
                    width="100%"
                    bg="gray.100"
                    borderRadius="10"
                    py="1"
                    px="2"
                    placeholderTextColor="gray.500"
                    _hover={{ bg: 'gray.200', borderWidth: 0 }}
                    borderWidth="0"
                    _web={{
                        _focus: { style: { boxShadow: 'none' } },
                    }}
                    InputLeftElement={
                        <Icon
                        ml="2"
                        size="5"
                        color="gray.500"
                        as={<Ionicons name="ios-search" />}
                        />
                    }
                    />
                </Box>
                <Box flex = {1} backgroundColor = 'blue.300'>
                    <Heading  alignSelf = 'center'>
                        인기 중고 매물
                    </Heading>
                    <PopularItemList/>
                </Box>
                <Box flex = {2} mb = {10} backgroundColor = 'red.300'>
                    <Heading alignSelf = 'center'>
                        인기 강의 자료
                    </Heading>
                    <PopularStudyList/>
                </Box>
      </NativeBaseProvider>
    );
};