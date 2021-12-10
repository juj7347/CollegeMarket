import React, { useState, useCallback } from 'react';
import { 
    View, 
    StyleSheet,
    Button,
    ActivityIndicator, 
    FlatList, 
    ScrollView, 
    Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { 
    Container, 
    Text
} from 'native-base';

import { useFocusEffect } from '@react-navigation/native';

//connect
import baseURL from '../../assets/common/baseURL';
import axios from 'axios';

import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import { backgroundColor } from 'styled-system';

var {width, height} = Dimensions.get('window');

const ProductContainer = (props) => {

    const [products, setProducts] = useState([]);
    

    //category
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);

    //search
    const [productsFiltered, setProductsFiltered] = useState([]);

    //loading
    const [loading, setLoading] = useState(true);

    useFocusEffect((
        useCallback(
            () => {
                setActive(-1);
        
                //products
                axios
                    .get(`${baseURL}products`)
                    .then((res) => {
                        setProducts(res.data);
                        setProductsFiltered(res.data);
                        setProductsCtg(res.data);
                        setInitialState(res.data);
                        setLoading(false);
                    })
                    .catch((err)=>{
                        console.log('Api call error');
                    })
        
                //categories
                axios
                    .get(`${baseURL}categories`)
                    .then((res) => {
                        setCategories(res.data)
                    })
                    .catch((err)=>{
                        console.log('Api call error');
                    })
        
                return () => {
                    setProducts([]);
                    setProductsFiltered([]);
        
                    setCategories([]);
                    setActive();
                    setInitialState([]);
                }
            },[]
        )
    )
  )

    //Categories
    const changeCtg = (ctg) => {
        {
            ctg === 'all'
                ? [setProductsCtg(initialState), setActive(true)]
                : [
                    setProductsCtg(
                        products.filter((i) => i.category._id === ctg),
                        setActive(true)
                    ),
                ];
        }
    };

    //Search
    const searchKeyword = (keyword) => {
        {
            keyword === ""
                ? setProductsFiltered(productsCtg)
                : setProductsFiltered(
                    productsCtg.filter((i) => i.name.toLowerCase().includes(keyword.toLowerCase()))
                );
        }
    }

    return (
        <>
        {!loading ? (
        <SafeAreaView>
            <Button
                title='sdf'
                onPress={()=> props.navigation.navigate("ProductForm")}
            />
            <Button
                title='sdff'
                onPress={()=> props.navigation.navigate("CategoryScreen")}
            />
            <SearchBar
                searchFilter={searchKeyword}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
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
                    {productsCtg.length > 0 ? (
                        <View style={styles.listContainer}>
                            {productsCtg.map((item)=>{
                                return(
                                    <ProductList
                                        key={item._id}
                                        item={item}
                                        navigation={props.navigation}
                                    />
                                )
                            })}
                        </View>
                    ) : (
                        <View style={[styles.center, {height: height / 2}]}>
                            <Text>No products</Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
        ) 
        : (
            <Container style={[styles.center, {backgroundColor: "#f2f2f2"}]}>
                <ActivityIndicator size='large' color='red'/>
            </Container>
        )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width
    },
    listContainer: {
        /*
        height: height,
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
        */
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ProductContainer;