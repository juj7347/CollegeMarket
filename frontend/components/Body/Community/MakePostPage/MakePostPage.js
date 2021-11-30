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
import Selection from './Selection';

const MakePostPage = () =>{
    return(
      <>
        <HStack backgroundColor = 'white'>
          <Selection/>
          <Button w = "20%" variant = 'outline' _text = {{color : 'black'}} borderWidth = {1} mt = {1} backgroundColor = 'white'>+Image</Button>
        </HStack>
        <Input variant = 'unstyled' placeholder = '내용 입력'/>
      </>
    );
};
export default MakePostPage;