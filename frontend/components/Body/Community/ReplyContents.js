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

const ReplyContents = () => {
    return(
        <>
        <HStack space = {2} justifyContent = "space-between" mx = {1}>
            <HStack space = "1">
                <AspectRatio w="20%" ratio={1 / 1} mx = {1}>
                <Image
                    source={{
                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                    }}
                    alt="image"
                />
                </AspectRatio>
                <Text>작성자 ID</Text>
            </HStack>
            <HStack space = "2">
                <Button size = 'sm'>신고</Button>
            </HStack>
        </HStack>
        <Text>댓글(ㅅㅄㅄㅄㅄㅄㅂ)</Text>
        </>
    );
};

export default ReplyContents;