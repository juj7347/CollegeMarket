import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons"
import { StyleSheet } from 'react-native';
import { View } from 'react-native'
import { Select, ScrollView, FlatList, IconButton, Container } from 'native-base'
import {
    Radio,
    Text
} from 'native-base';
import { Dimensions } from 'react-native';
import { marginBottom } from 'styled-system';

const width = Dimensions.get("window").width;
const data = ["인기매물", "중고차", "디지털기기", "생활가전", "가구/인테리어", "유아동", "생활/가공식품", "유아도서", "스포츠/레저"];
const icons = ["star", "car", "laptop-outline", "home", "easel-outline", "color-palette-outline", "restaurant", "book", "football"];

const CategorySelect = (props) => {
  const navigation= useNavigation();
    return (
      <ScrollView style={{width: width, backgroundColor: 'white'}}>
        <View style={styles.container}>
          {data.map(name =>(
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Home")}>
                <Icon
                  name="star"
                  size={25}
                />
              <Text>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        </ScrollView>
      
    )
}

const styles = StyleSheet.create({
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
    height: 132,
    width: width/3, 
    backgroundColor: 'white'
  }
})
export default CategorySelect;