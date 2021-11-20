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


const CommunityBox = () =>{
    return(
        <Box backgroundColor = 'blue.100'>
            <VStack space = {4} mt = {3}>
                <VStack>
                    <Box backgroundColor = 'white'>
                        <HStack space = {6} justifyContent = 'space-around'>
                            <Text ml = {3} fontSize = '15px'> 커뮤니티</Text>
                            <Text  fontSize = '15px'> 과외</Text>
                            <Text  fontSize = '15px'> 학교 행사</Text>
                            <Text  fontSize = '15px'> 취미</Text>
                            <Text  fontSize = '15px'> 진로</Text>
                            <Text mr = {3}  fontSize = '15px'> 타임라인</Text>
                        </HStack>
                    </Box>
                </VStack>

                <VStack>
                    <Box backgroundColor = 'white'>
                        <Text fontSize = '15px' fontWeight = 'bold' mx = {3}>※공지: tlqkfsusemfdk</Text>
                    </Box>
                </VStack>
                <VStack>
                    <Box backgroundColor = 'white'>
                        <VStack space = {2}>
                            <Box>
                                <HStack space = {2} justifyContent = 'space-between'>
                                    <HStack>
                                        <Text ml = {3} fontSize = '15px'>게시판 이름</Text>
                                    </HStack>
                                    <HStack>
                                        <Text mr = {3} fontSize = '15px'>글: 3000개</Text>
                                    </HStack>
                                </HStack>
                            </Box>
                            <Box alignItems = 'center'>
                                <Text fontSize = '80px'>    </Text>
                            </Box>
                        </VStack>
                    </Box>
                </VStack>
                <VStack>
                    <ScrollView>
                        <Box backgroundColor = 'white'>
                            <Text fontSize = '15px' fontWeight = 'bold' mx = {3}>인기글</Text>
                        </Box>
                    </ScrollView>
                </VStack>
            </VStack>
        </Box>
    );
};

export default CommunityBox;