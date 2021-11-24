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



const SearchBar = () => {
    return(
        <>
            <Input
                placeholder="Search"
                variant="filled"
                width="90%"
                bg="gray.100"
                borderRadius="1"
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
        </>
    );
};

export default SearchBar;