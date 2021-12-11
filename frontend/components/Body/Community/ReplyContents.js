import React from "react"
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  Button,
  NativeBaseProvider,
} from "native-base"

const ReplyContents = ({profile, id, textValue, time}) => {
    return(
        <>
        <HStack space = {2} justifyContent = "space-between" mx = {1}>
            <HStack space = "1">
                <AspectRatio w="20%" ratio={1 / 1} mx = {1}>
                <Image
                    source={{
                    uri: profile,
                    }}
                    alt="image"
                />
                </AspectRatio>
                <Text>{id}</Text>
            </HStack>
            <HStack space = "2">
                <Button size = 'sm' variant = 'ghost' _text = {{color: 'red.400'}}>신고</Button>
            </HStack>
        </HStack>
        <Text ml = {2}>{textValue}</Text>
        </>
    );
};

export default ReplyContents;