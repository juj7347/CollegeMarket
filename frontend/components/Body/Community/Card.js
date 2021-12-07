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
const Card = ({title, subtitle, text, image, id, time}) => {
    console.log(title);
  return (
    <Box my = {2}
      w = '100%'
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
        <HStack>
        <AspectRatio w="5%" ratio={1 / 1} mx = {1}>
          <Image
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            alt="image"
          />
        </AspectRatio>
        <Text>
            {id}
        </Text>
        </HStack>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              작성시간:
            </Text>
            <Text>
                {time}
            </Text>
          </HStack>
        </HStack>
      </Box>
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
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