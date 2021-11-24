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
import PostBox from './PostBox';
import BottomBar from './BottomBar';
const MakePostPage = () =>{
    return(
      <>
        <Box safeArea h = "15%">
          <TopBar/>
        </Box>
        <Box>
          <PostBox/>
          <BottomBar/>
        </Box>
      </>
    );
};
export default MakePostPage;