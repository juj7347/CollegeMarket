import React, {useState, useEffect} from 'react';
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

import { connect } from "react-redux";
import { setCategory } from '../../Redux/Actions/filterActions';

import baseURL from '../../assets/common/baseURL';
import axios from 'axios';

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

const CategorySelect = (props) => {
  
  const navigation= useNavigation();

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    axios
      .get(`${baseURL}categories`)
      .then((res)=>{
        setCategories(res.data);
      })
      .catch((error) => {
        console.log("category get failed");
      })
  },[])

  return (
    <ScrollView style={{width: width, backgroundColor: 'white'}}>
      <Heading style={styles.titleText}>카테고리</Heading>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            props.setCategory({_id: "all", name: "all"});
            navigation.navigate("Home");
          }}
        >
            <Icon
              name="star"
              size={25}
            />
          <Text>모든 카테고리</Text>
        </TouchableOpacity>
        {categories.map(item =>(
          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              if (item ==="all") {
                props.setActive(-1)
              }
              props.setCategory(item);
              navigation.navigate("Home");
            }}
          >
              <Icon
                name={item.icon}
                size={25}
              />
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
    height: 132,
    width: width/3, 
    backgroundColor: 'white'
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    setCategory: (category) => {
      dispatch(setCategory({category}))
    }
  }
}

export default connect(null, mapDispatchToProps)(CategorySelect);