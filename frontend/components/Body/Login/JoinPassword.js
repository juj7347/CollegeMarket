import React from "react"
import {
  ScrollView,
  VStack,
  Center,
  useTheme,
  Heading,
  NativeBaseProvider,
  Box,
  Text,
  Input,
  Button,
  Checkbox,
} from "native-base"
export const JoinPassword = () => {
  return (
    <ScrollView>
        <Text mt = {20} ml = {5} fontSize = '3xl' fontWeight = 'bold'>비밀번호를 입력해주세요</Text>
        <Text ml = {5} fontWeight = 'light'>1번만 입력하니 정확히 입력해주세요</Text>
        <Box mt = {5}>
            <Input size = "2xl" placeholder = "PASSWORD">
            </Input>
        </Box>
        <Checkbox my = {2}>비밀번호 보기</Checkbox>
        <Button mt="2" colorScheme="green" _text={{ color: 'white' }}>
            다음
        </Button>
    </ScrollView>
  );
}

export default () => {
  return (
        <JoinPassword />
  )
}
