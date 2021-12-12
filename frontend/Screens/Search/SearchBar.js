import React from "react";
import { useState } from "react";
import {
    VStack,
    Input,
    Icon
} from "native-base";
import { Ionicons } from '@expo/vector-icons';

const SearchBar = (props) => {

    const [searched, setSearched] = useState("");
    return (
        <VStack width="100%" space={5}>
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            bg="gray.100"
            borderRadius="10"
            py="1"
            px="2"
            placeholderTextColor="gray.500"
            onChangeText={(text) => setSearched(text)}
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
                onPress={()=>props.searchFilter(searched)}
              />
            }
          />
        </VStack>
    )
}

export default SearchBar