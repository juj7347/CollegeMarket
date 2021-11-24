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

const PostContentPage = () => {
    return(
        <Box backgroundColor = 'white'>
            <ScrollView>
                <Box borderTopWidth = "1" borderColor = 'blue.300' backgroundColor = 'white'>
                    <Text fontSize = '60px'>게시글 내용</Text>
                </Box>
                <Box borderWidth = "1" borderColor = 'blue.300' backgroundColor = 'white'>
                    <HStack justifyContent = 'space-between'>
                        <Box flexDirection = 'row' ml = {3}>
                            <Text fontSize = '15px'>댓글수: </Text>
                            <Text >몇개</Text>
                        </Box>
                        <Box flexDirection = 'row' mr = {3}>
                            <Text>
                                새로고침
                            </Text>
                            <Text px = {1} color = 'gray.300'>
                                |
                            </Text>
                            <Text>
                                목록보기 
                            </Text>
                            <Text px = {1} color = 'gray.300'>
                                |
                            </Text>
                            <Text>
                                댓글쓰기
                            </Text>
                        </Box>
                    </HStack>
                </Box>
                <Box backgroundColor = 'white'>
                    <Box mx = {3} mt = {5} >
                        <HStack space = {2} justifyContent = 'space-between'>
                            <HStack space = "1">
                                <Text pr = {2}>
                                    Image
                                </Text>
                                <Text>
                                    name
                                </Text>
                                <VStack>

                                </VStack>
                            </HStack>
                            <HStack>
                                <Text>신고</Text>
                                <Text> | </Text>
                                <Text>추천</Text>
                            </HStack>
                        </HStack>
                    </Box>
                    <Box mx = {3}>
                        <Text>
                            댓글내용
                        </Text>
                    </Box>
                </Box>
            </ScrollView>
        </Box>
    );
};
export default PostContentPage;