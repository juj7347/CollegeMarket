import React, { useState, useEffect } from 'react';
import { 
    View, 
    StyleSheet, 
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

//connect
import baseURL from '../../assets/common/baseURL';
import axios from 'axios';

import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';


const productCategories = require('../../assets/data/categories.json');

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

    useEffect(() => {
        

        setActive(-1);
        
        //products
        axios
            .get(`${baseURL}products`)
            .then((res) => {
                setProducts(res.data);
                setProductsFiltered(res.data);
                setProductsCtg(res.data);
                setInitialState(res.data);
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
    }, [])

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
            keyword === ''
                ? setProductsFiltered(productsCtg)
                : setProductsFiltered(
                    productsCtg.filter((i) => i.name.toLowerCase().includes(keyword))
                );
        }
    }

    return (
            <SafeAreaView>
                <SearchBar
                    searchFilter={searchKeyword}
                />
                <ScrollView>
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
                        {productsFiltered.length > 0 ? (
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