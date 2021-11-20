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
import PostContent from './PostContent';
const CommunityPostPage = () => {
    return(
        <>
            <TopBar/>
            <PostTitle/>
            <PostContent/>
        </>
    );
};
export default CommunityPostPage;