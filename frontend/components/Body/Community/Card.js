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
  NativeBaseProvider,
} from "native-base"
import BoxBottom from "./BoxBottom"
/*
    content = {title: string, subtitle: string, text: string, image: string, id: String, time: number}로 할 예정
*/
const Card = ({title, subtitle, text, image, id, time, category}) => {
  return (
    <Box my = {2} alignSelf= 'center' 
      w = '92%'
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Box>
        <HStack mt = {3}>
        <AspectRatio w="10%" ratio={1 / 1} ml = {4} mr = {2}>
          <Image
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            alt="image"
          />
        </AspectRatio>
        <Box>
          <Text fontSize = "11">
              {id}(김정환)
          </Text>
          <Text
                fontSize = "11"
                color = 'gray.400'
                fontWeight="400"
              >
                작성시간(1시간전)
            </Text>
        </Box>
        </HStack>
      </Box>
      <Box mt = {2}>
        <AspectRatio w="92%" ratio={16 / 9} alignSelf = 'center'>
          <Image
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {title}
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: "violet.500",
            }}
            _dark={{
              color: "violet.400",
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            {subtitle}
          </Text>
        </Stack>
        <Text fontWeight="400">
            {text}
        </Text>
      </Stack>
      <BoxBottom/>
    </Box>
  )
};

export default Card;