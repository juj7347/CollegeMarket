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

const PostContent = () => {
    return(
        <Box backgroundColor = 'blue.100'>
            <ScrollView>
                <Box>
                    <Text fontSize = '60px'>게시글 내용</Text>
                </Box>
                <Box>
                    <Text fontSize = '60px'>댓글</Text>
                </Box>
            </ScrollView>
        </Box>
    );
};
export default PostContent;