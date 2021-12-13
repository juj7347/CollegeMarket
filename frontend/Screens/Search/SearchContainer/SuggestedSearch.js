import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons"
import { StyleSheet } from 'react-native';
import { View } from 'react-native'
import { Select, ScrollView, FlatList, IconButton, Container } from 'native-base'
import {
    Radio,
    Text,
    Heading
} from 'native-base';
import { Dimensions } from 'react-native';
import { marginBottom } from 'styled-system';

const width = Dimensions.get("window").width;
const data = [
  {name: "인기매물", icon: "star" }, 
  {name: "중고차", icon: "car"}, 
  {name: "디지털기기", icon: "laptop-outline"}, 
  {name: "생활가전", icon: "home"}, 
  {name: "가구/인테리어", icon: "easel-outline"}, 
  {name: "유아동", icon: "laptop-outline"}, 
  {name: "생활/가공식품", icon: "restaurant"}, 
  {name: "유아도서", icon: "book"}, 
  {name: "스포츠/레저", icon: "football"}
];
const icons = ["star", "car", "laptop-outline", "home", "easel-outline", "color-palette-outline", "restaurant", "book", "football"];

const CategorySelect = (props) => {
    return (
      <ScrollView style={{marginTop: 20, width: width, backgroundColor: 'white'}}>
        <Heading style={styles.titleText}>최근 검색어</Heading>
        <View style={styles.container}>
          {data.map(item =>(
            <TouchableOpacity style={styles.Button} onPress={ () => props.setSearch(item.name) }>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        </ScrollView>
      
    )
}

const styles = StyleSheet.create({
  titleText: {
    paddingLeft: 20,
    fontSize: 26,
    fontWeight: "bold"
},
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'flex-start',
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    alignContent: 'stretch'
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: width/2, 
    backgroundColor: 'white'
  }
})
export default CategorySelect;