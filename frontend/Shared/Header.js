import React from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import {
    VStack,
    Input,
    Button,
    IconButton,
    Icon,
    Text,
    NativeBaseProvider,
    Center,
    Box,
    Divider,
    Heading,
} from 'native-base';
import {MaterialIcons} from '@expo/vector-icons';

const Header = () => {
    return (
        <SafeAreaView style={styles.header}>
            {/*
            <Image
                source={require('../assets/favicon.png')}
                resizeMode="contain"
                style={{height: 50}}
            />
            */}
            <SearchBar/>
        </SafeAreaView>
    )
}

const SearchBar = () => {
    return (
      <VStack
        space={5}
        width="100%"
        divider={
          <Box px="2">
            <Divider />
          </Box>
        }>
  
        <VStack width="100%" space={5} alignItems="center">
          <Input
            placeholder="Search"
            bg="#fff"
            width="90%"
            height="8"
            borderRadius="4"
            py="3"
            px="1"
            fontSize="10"
            _web={{
              _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
            }}
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="4"
                color="gray.400"
                as={<MaterialIcons name="search" />}
              />
            }
          />
        </VStack>
      </VStack>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 20
    }
})

export default Header;