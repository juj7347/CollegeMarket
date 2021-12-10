import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title, ContentText } from '../Styles/text';
import { Container } from '../Styles/wrapper';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons"
import { Select, ScrollView, FlatList, IconButton } from 'native-base'
import {
    Radio,
    View,
    Text
} from 'native-base';


const data = ["인기매물", "중고차", "디지털기기", "생활가전", "가구/인테리어", "유아동", "생활/가공식품", "유아도서", "스포츠/레저"];
const icons = ["star", "car", "laptop-outline", "home", "easel-outline", "color-palette-outline", "restaurant", "book", "football"];

const CategorySelect = (props) => {
  const navigation= useNavigation();
    return (
        <Container style={{flexDirection: 'row', flex: 1, flexWrap: 'wrap', alignItems: 'center'}}>
          {data.map(name =>(
            <TouchableOpacity style={{flexBasis: '33%'}} onPress={() => navigation.navigate("Home")}>
                <Icon
                style={{ marginLeft: 50 }}
                  name="star"
                  size={Platform.OS === "ios" ? 22 : 25}
                />
              <ContentText style={{marginLeft: 10, alignItems: "center"}}>{name}</ContentText>
            </TouchableOpacity>
          ))}
        </Container>
      
    )
}

export default CategorySelect;