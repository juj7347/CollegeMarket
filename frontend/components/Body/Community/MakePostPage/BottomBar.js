import * as React from 'react';
import { MaterialCommunityIcons, Ionicons, FontAwesome} from '@expo/vector-icons';
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

const BottomBar = () => {
  return(
    <Box h = "16%" backgroundColor = 'blue.300'>
    <HStack justifyContent = 'space-between' mx = {3}>
      <IconButton icon = {<Icon as = {FontAwesome} name = 'upload' color = 'white'/>}/>
      <IconButton icon = {<Icon as =  {FontAwesome} name = 'save' color = 'white'/>}/>
      <IconButton icon = {<Icon as =  {FontAwesome} name = 'edit' color = 'white'/>}/>
      <IconButton icon = {<Icon as =  {FontAwesome} name = 'check-square-o' color = 'white'/>}/>
    </HStack>
    </Box>
  );
};

export default BottomBar;