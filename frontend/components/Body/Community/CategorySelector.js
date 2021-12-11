import * as React from 'react';
import { useState } from 'react';
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
  usePropsResolution,
} from 'native-base';
import Card from './Card';
import Dummy from './Dummy.json'
import { alignContent } from 'styled-system';

const CategorySelector = (props) =>{
    const select = () => {
        props.Handler(props.choice);
    }
    return(
        <>
        <Button onPress = {select} variant = 'ghost ' borderColor = 'black' _text = {{color: "black"}}>
            {props.choice}
        </Button>
        </>
    );
};

export default CategorySelector;