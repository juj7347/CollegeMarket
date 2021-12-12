import React, {useState, useEffect, useCallback, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
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
  View
} from 'native-base';

import { 
    ButtonContainer,
    FloatingButton
} from '../../Shared/StyledComponents/FloatingButton';

import { Container } from '../../Shared/StyledComponents/Card';
import { AntDesign } from "react-native-vector-icons";

import Card from './Card';
import { alignContent } from 'styled-system';
import CategorySelector from './CategorySelector';


import baseURL from '../../assets/common/baseURL';
import axios from 'axios';

import AuthGlobal from '../../Context/store/AuthGlobal';

/* setContents =[...contents, {title: string, subtitle: string, text: string, image: string, id(작성자): String, time(작성시간): number}]*/
const Community = (props) => {
    
    const context = useContext(AuthGlobal);

    const [choice, setChoice] = useState("일상");
    const selectionHandler = (newChoice) => {
        setChoice(newChoice);
    };

    const [posts, setPosts] = useState([]);
    const [filteted, setFiltered] = useState([]);
    const [token, setToken] = useState();
    const [loading , setLoading] = useState(true);

    useFocusEffect((
        useCallback(()=>{
            axios 
            .get(`${baseURL}posts`, {headers: {Authorization: `Bearer ${context.stateUser.userProfile.token}`}})
            .then((res)=>{
                setPosts(res.data);
                setLoading(false);
            })

            .catch((error)=>console.log(error));
            return () => {
                setPosts([]);
                setFiltered([]);
            }
        },[])
    ))

    return(
        
        <>
        {!loading ? (
            /*
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
        */
       <View>
        {posts.length > 0 ? (
        <ScrollView>
            {posts.map((content) => 
                <Card 
                    id={content._id}
                    text={content.description} 
                    image={content.image}
                    {...props}
                />
                )}
        </ScrollView>
        ) : 
        <View>
            <Text> no posts</Text>
        </View>}
        </View>
        ) : (
            <View>
                <Text>
                    loading
                </Text>
            </View>
        )}
        <ButtonContainer>
            <FloatingButton
                onPress={()=>props.navigation.navigate("PostFeed")}                
            >
                <AntDesign
                    name="pluscircle"
                    size={40}
                    color="blue"
                />
            </FloatingButton>
        </ButtonContainer>
        </>
    );
};

export default Community;