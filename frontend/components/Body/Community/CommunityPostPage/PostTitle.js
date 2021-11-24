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
  ScrollView,
} from 'native-base';

const PostTitle = () => {
    return(
        <>
            <Box backgroundColor = 'white'>
                <Box mt = {5} mx = {3}>
                    <Text fontSize = '24px'>
                        Title(eg.본인 2달뒤 군대감)
                    </Text>
                </Box>
                <Box>
                    <HStack space = {2}>
                        <HStack>
                            <Text ml = {3}>
                                작성자 이름
                            </Text>
                            <Text>
                                |
                            </Text>
                        </HStack>
                        <HStack>
                            <Text>
                                2021-11-21
                            </Text>
                        </HStack>
                    </HStack>
                    <HStack space = {2} justifyContent = 'space-between'>
                        <HStack>
                            <Text ml = {3}>
                                읽은 인원:
                            </Text>
                            <Text>
                                (예시)3000명
                            </Text>
                        </HStack>
                        <HStack>
                            <Text mr = {2}>게시글 삭제</Text>
                            <Text>|</Text>
                            <Text mr = {3} ml = {2}>게시글 수정</Text>
                        </HStack>
                    </HStack>
                </Box>
            </Box>
        </>
    );
};
export default PostTitle;