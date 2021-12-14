import React from 'react';
import {
    View,
} from 'react-native';

import {
    Container,
    ProductImage,
    ProductInfo
} from "./ProductCardStyles";

import Text from '../../Shared/StyledComponents/Text';

import { getDate } from '../../Shared/Date/getDate';

const ProductCard = (props) => {

    const { name, price, image, dateCreated} = props;

    return (
        <Container>
            <ProductImage
                source={{uri: image ? image : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png"}}
            />
            <ProductInfo>
                <Text color='black' heavy medium>
                    {price}원
                </Text>
                <Text color='gray' small heavy marginTop={"5px"}>
                    {name.length > 15 ? name.substring(0, 15 - 3)
                        + '...' : name
                    }
                </Text>
                <Text small color='lightgray' heavy marginTop={"7px"}>
                    {getDate(dateCreated)}
                </Text>
                
            </ProductInfo>
        </Container>
    )
}


export default ProductCard;