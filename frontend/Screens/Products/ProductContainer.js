import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, Text } from 'react-native';

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
    )
}

export default ProductContainer;