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
} from "native-base"
export const JoinEmail = () => {
  return (
    <ScrollView>
        <Text mt = {20} ml = {5} fontSize = '3xl' fontWeight = 'bold'>학교 이메일을 입력해주세요</Text>
        <Text ml = {5} fontWeight = 'light'>로그인 및 학교인증에 사용됩니다</Text>
        <Box mt = {5}>
            <Input size = "2xl" placeholder = "E-mail">
            </Input>
        </Box>
        <Button mt="2" colorScheme="green" _text={{ color: 'white' }}>
            다음
        </Button>
    </ScrollView>
  );
}

export default () => {
  return (
        <JoinEmail />
  )
}
