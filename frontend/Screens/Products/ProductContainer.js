import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, Text } from 'react-native';
//import { Container, Header, Icon, Item, Input, Text} from 'native-base'

import ProductList from './ProductList';

const data = require('../../assets/data/products.json');

const ProductContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);

        return () => {
            setProducts([]);
        }
    }, [])

    return (
        /*
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search"/>
                    <Input
                        placeholder="Search"
                        //onFocus={}
                        //onChangeText={{text}=>}
                    />
                </Item>
            </Header>
            */
            <View>
                <Text>Product Container</Text>
                <FlatList
                    data={products}
                    renderItem={({item}) => <ProductList
                        key={item.id}
                        item={item}
                    />}
                    numColumns = {2}
                />
            </View>
        //</Container>
    )
}

export default ProductContainer;