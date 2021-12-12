import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";

import { Card } from "./ProductCardStyles";
import ProductCard from './ProductCard';

var {width} = Dimensions.get("window"); 

const ProductList = (props) => {

    const {item} = props;

    return (
        <Card
            onPress={()=>
                props.navigation.navigate("Product_Detail", {item: item})
            }    
        >
            <ProductCard {...item} />
        </Card>
    )
}

export default ProductList;