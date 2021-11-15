import React from "react";
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  VStack,
  IconButton,
  ScrollView,
  Button,
} from 'native-base';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { BaseButton } from "react-native-gesture-handler";
import { left, textAlign } from "styled-system";


export default function ChattingList(){
    const names = ["정환", "주영", "상현", "윤재"];
    const messages = ["tlqkf", "rpdla", "whwrkxdl", "gksp"];
    const images = ['a', 'b', 'c', 'd'];
    const names_messages = [];
    for(let i = 0; i < names.length; i++){
        names_messages[i] = [names[i], messages[i], images[i]];
    }
    return(
        <>
            <Box safeArea Top borderBottomWidth={2} borderColor = "gray.200">
                <HStack bg='white' px="1" py="3" justifyContent='space-between' alignItems='center' w = "100%" px = {5}>
                    <HStack space="4" alignItems='center'>
                        <Text color="black" fontSize="20" fontWeight='bold'>채팅</Text>
                    </HStack>
                    <HStack space="1" alignItems='center'>
                        <IconButton size = "sm" variant = 'ghost' _icon={{as: <Ionicons name="ios-search"/> ,color: 'black'}}></IconButton>
                    </HStack>
                </HStack>
                <HStack space = "2"></HStack>
            </Box>
            <Box>
                <ScrollView>
                    {names_messages.map((name_message) => (
                        <Box>
                                <HStack space = {2}>
                                    <HStack space = "1" marginTop = {2} px ={3}>
                                        <Text key = {name_message[2].toString()} color = 'black' fontSize = '30px'>{name_message[2]}</Text>
                                    </HStack>
                                    <HStack space = "2" marginTop = {2}>
                                        <Box flexDirection = 'column'>
                                            <Text key = {name_message[0].toString()} fontSize = '20px' fontWeight = 'bold'>
                                                {name_message[0]}
                                            </Text>
                                            <Text key = {name_message[1].toString()} fontSize = '10px'>
                                                {name_message[1]}
                                            </Text>
                                        </Box>
                                    </HStack>
                                </HStack>
                        </Box>
                    ))}
                </ScrollView>
            </Box>
        </>
    );
};