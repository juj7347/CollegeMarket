import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";

import ProductCard from './ProductCard';
import { useNavigation } from "@react-navigation/native";

var {width} = Dimensions.get("window"); 

const ProductList = (props) => {
    const navigation = useNavigation();
    const {item} = props;

    return (
        <TouchableOpacity
            style={{ width: '50%' }}
            onPress={()=>
                navigation.navigate("Product_Detail", {item: item})
            }    
        >
            <View style={{ width: width, backgroundColor: 'white'}}>
                <ProductCard {...item} />
    
            </View>
 
        </TouchableOpacity>
    )
}

export default ProductList;