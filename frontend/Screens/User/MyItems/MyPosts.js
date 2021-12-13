import React, {useState, useEffect, useCallback, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  Box,
  VStack,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  ScrollView,
  View,
  FlatList
} from 'native-base';

import Text from '../../../Shared/StyledComponents/Text';

import { 
    SmallCard
} from '../../../Shared/StyledComponents/SmallCard';

import { 
    ButtonContainer,
    FloatingButton
} from '../../../Shared/StyledComponents/FloatingButton';

import { Container } from '../../../Shared/StyledComponents/Card';
import { AntDesign } from "react-native-vector-icons";

import Card from '../../Community/Card';

import baseURL from '../../../assets/common/baseURL';
import axios from 'axios';

import AuthGlobal from '../../../Context/store/AuthGlobal';

/* setContents =[...contents, {title: string, subtitle: string, text: string, image: string, id(작성자): String, time(작성시간): number}]*/
const MyPosts = (props) => {
    
    const context = useContext(AuthGlobal);

    const [choice, setChoice] = useState("일상");
    const selectionHandler = (newChoice) => {
        setChoice(newChoice);
    };

    const [posts, setPosts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [token, setToken] = useState();
    const [tags, setTags] = useState([]);
    const [loading , setLoading] = useState(true);

    const pickTag = (picked) => {
        setFiltered(posts.filter(item => item.tag === picked._id));
    }

    useFocusEffect((
        useCallback(()=>{
            axios 
                .get(`${baseURL}posts/${context.stateUser.user.userId}`, {headers: {Authorization: `Bearer ${context.stateUser.userProfile.token}`}})
                .then((res)=>{
                    setPosts(res.data);
                    setFiltered(res.data);
                    setLoading(false);
                })
                .catch((error)=>console.log(error));

            axios
            .get(`${baseURL}tags`, {headers: {Authorization: `Bearer ${context.stateUser.userProfile.token}`}})
                .then((res)=>{
                    setTags(res.data);
                })
                .catch((error) => console.log(error));

            return () => {
                setPosts([]);
                setFiltered([]);
                setTags([]);
            }
        },[])
    ))

    return(
        
        <>
        {!loading ? (
       <View>
        {filtered.length > 0 ? (
        <ScrollView>
            {filtered.reverse().map((content) => 
                <Card 
                    id={content._id}
                    text={content.description} 
                    image={content.image}
                    name={content.userName}
                    tag={content.tagName}
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

export default MyPosts;