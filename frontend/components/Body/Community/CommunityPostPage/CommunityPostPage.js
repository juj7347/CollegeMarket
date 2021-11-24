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
import TopBar from './TopBar';
import PostTitle from './PostTitle';
import PostContentPage from './PostContentPage';
const CommunityPostPage = () => {
    return(
        <Box h = "100%" mt = {10}>
            <TopBar/>
            <PostTitle/>
            <PostContentPage/>
        </Box>
    );
};
export default CommunityPostPage;