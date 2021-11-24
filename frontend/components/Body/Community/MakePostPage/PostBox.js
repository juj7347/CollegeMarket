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

const PostBox = () => {
    return(
      <>
        <Box mt = {3} borderWidth = '2' borderColor = 'white' h = '77%'>
          <Input variant = 'unstyled' placeholder = "내용 입력" multiline = {true} style = {{flexShrink: 1}}/>
        </Box>
      </>
    );
};

export default PostBox;