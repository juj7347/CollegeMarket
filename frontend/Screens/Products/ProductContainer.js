import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Container, Icon, Item, Input, Text } from 'native-base';

import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';

const data = require('../../assets/data/products.json');
const productCategories = require('../../assets/data/products.json');

const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);

    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);

        setCategories(productCategories);
        setActive(-1);
        setInitialState(data);

        return () => {
            setProducts([]);
            setProductsFiltered([]);

            setCategories([]);
            setActive();
            setInitialState([]);
        }
    }, [])

    //Categories
    const changeCtg = (ctg) => {
        {
            ctg === 'all'
                ? [setProductsCtg(initialState), setActive(true)]
                : [setProductsCtg(
                    products.filter((i) => i.category._id === ctg),
                    setActive(true)
                ),
                ]
        }
    }

    return (
            //<Container>
                <View>
                    <View>
                        <CategoryFilter
                            categories={categories}
                            categoryFilter={changeCtg}
                            productsCtg={productsCtg}
                            active={active}
                            setActive={setActive}
                        />
                    </View>
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