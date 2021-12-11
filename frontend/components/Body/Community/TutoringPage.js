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
} from 'native-base';
import Card from './Card';
import Dummy from './Dummy.json'
import { alignContent } from 'styled-system';
import CommunityMainPage from './CommunityMainPage';
const TutoringPage = () => {
    return(
        <>
            <CommunityMainPage category = "tutoring"/>
        </>
    );
};
export default TutoringPage;