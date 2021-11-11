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
    <Box safeArea flex={1} p="2" w="90%" mx="auto" py="8">
        <Heading size="lg" color="coolGray.800" fontWeight="600">
          학교 이메일 인증
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          로그인 및 인증에 사용됩니다.
        </Heading>
        <Box mt = {5}>
            <Input size = "2xl" placeholder = "E-mail">
            </Input>
        </Box>
        <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
            다음
          </Button>
    </Box>
  );
}

export default () => {
  return (
        <JoinEmail/>
  )
}
