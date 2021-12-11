import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,

} from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
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
  Image,
} from 'native-base';
import { borderRadius } from 'styled-system';

var {width} = Dimensions.get("window");

const ProductCard = (props) => {

    const { name, price, image, countInStock} = props;
    var now = new Date();
    return (
        <>
            <Box backgroundColor = 'white' h = {width/1.3 + 30} w = "100%">
                    <Image 
                        w = {width/2 - 40}
                        h = {width/2 - 15}
                        borderRadius = {7}
                        backgroundColor= 'transparent'
                        source={{uri:"https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"}}
                        alignSelf = 'center'
                    />
                    <VStack mx = {5} mt = {3}>
                        {name.length < 19 ?
                        <Text fontWeight = 'bold' fontSize = "20">
                            {name}
                        </Text>:
                        <Text fontWeight = 'bold' fontSize = "20">
                            {name.split(0, 15)}...
                        </Text>
                        }
                        <Text fontSize= "16">
                            {price}원
                        </Text>
                        <Text color = 'gray.400'>
                            {now.toString()}
                        </Text>
                    </VStack>
            </Box>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width/2,
        height: width / 1.7,
        marginLeft: 15,
        backgroundColor: 'white',
        borderTopColor: 'white',
        borderBottomColor: 'gainsboro',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderWidth: 1,
    },
    image: {
        width: width - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {

        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width - 20 - 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: "orange",
        marginTop: 10
    }
})

export default ProductCard;