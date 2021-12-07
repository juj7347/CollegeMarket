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
/* setContents =[...contents, {title: string, subtitle: string, text: string, image: string, id(작성자): String, time(작성시간): number}]*/
const CommunityMainPage = () => {
    const contents = Dummy.contents;
    return(
        
          /*<ScrollView>
             {Dummy.map(content => (<Card key = {content.id} {...content}/>))}
        </ScrollView>*/
        <ScrollView>
            {contents.map( content => (<Card title = {content.title} subtitle = {content.subtitle} text = {content.text} image = {content.image} id = {content.id} time = {content.title} />))}
        </ScrollView>
    );
};

export default CommunityMainPage;