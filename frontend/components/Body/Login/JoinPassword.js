import * as React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p="2" w="90%" mx="auto" py="8">
        <Heading size="lg" color="coolGray.800" fontWeight="600">
          비밀번호 설정
        </Heading>
        <VStack space={2} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              비밀번호
            </FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              비밀번호 재입력
            </FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
            완료
          </Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
