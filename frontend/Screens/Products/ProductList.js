import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";

import ProductCard from './ProductCard';

var {width} = Dimensions.get("window"); 

const ProductList = (props) => {

    const {item} = props;

    return (
        <TouchableOpacity
            style={{ width: '100%' }}
            onPress={()=>
                props.navigation.navigate("Product_Detail", {item: item})
            }    
        >
            <View style={{ width: width, backgroundColor: 'white'}}>
                <ProductCard {...item} />
    
            </View>
 
        </TouchableOpacity>
    )
}

export default ProductList;