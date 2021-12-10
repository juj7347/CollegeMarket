import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { Title, ContentText } from './text';
import { Container, Item } from './wrapper';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons"
import { Select, ScrollView, IconButton } from 'native-base'
import {
    Radio,
    View,
    Text
} from 'native-base';


const data = ["인기매물", "중고차", "디지털기기", "생활가전", "가구/인테리어", "유아동", "생활/가공식품", "유아도서", "스포츠/레저"];
const icons = ["star", "car", "laptop-outline", "home", "easel-outline", "color-palette-outline", "restaurant", "book", "football"];

const CategorySelect = (props) => {
    return (
        <Container>
            {data.map(name => (
                <Item
                    onPress={() => props.navigation.navigate("Home")}
                >
                        <Icon
                            name="star"
                            size={Platform.OS === "ios" ? 22 : 25}
                            />
                        <ContentText>{name}</ContentText>
                </Item>
            ))}
        </Container>
      
    )
}

export default CategorySelect;