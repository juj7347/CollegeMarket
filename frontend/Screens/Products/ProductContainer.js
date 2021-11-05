import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Container, Icon, Item, Input, Text } from 'native-base';

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
            <Container>
                <Input
                    placeholder="Search"
                    //onFocus={}
                    //onChangeTetxt={(text)=>}
                />
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
            </Container>
    )
}

export default ProductContainer;