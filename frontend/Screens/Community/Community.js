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
import Dummy from './Dummy.json';
import Dummy2 from './Dummy2.json';
import { alignContent } from 'styled-system';
import CategorySelector from './CategorySelector';

/* setContents =[...contents, {title: string, subtitle: string, text: string, image: string, id(작성자): String, time(작성시간): number}]*/
const Community = () => {
    const contents = Dummy.contents;
    const category = Dummy2.data;

    const [choice, setChoice] = useState("일상");
    const selectionHandler = (newChoice) => {
        setChoice(newChoice);
    };
    return(
        
          /*<ScrollView>
             {Dummy.map(content => (<Card key = {content.id} {...content}/>))}
        </ScrollView>*/
        <>
        <Box alignItems= 'center'>
        <HStack>
            {category.map( (selection) => (
                <CategorySelector 
                    key = {selection.key} 
                    choice = {selection.category} 
                    Handler = {selectionHandler}
                />))}
        </HStack>
        </Box>
        <ScrollView>
            {contents.map( content => 
                (
                content.category === choice ? 
                <Card 
                    key = {content.time} 
                    title = {content.title} 
                    subtitle = {content.subtitle} 
                    text = {content.text} 
                    image = {content.image} 
                    id = {content.id} 
                    time = {content.title}
                    category = {content.category}
                    />:
                <>
                </>
                ))}
        </ScrollView>
        </>
    );
};

export default Community;