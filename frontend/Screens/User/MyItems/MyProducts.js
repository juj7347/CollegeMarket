import React, {useState, useEffect, useContext} from "react";
import { ScrollView } from "react-native";
import {
    Container,
    ListContainer
} from "../../Products/ProductCardStyles";

import Text from "../../../Shared/StyledComponents/Text";

import ProductList from "../../Products/ProductList";

import baseURL from "../../../assets/common/baseURL";
import axios from "axios";
import AuthGlobal from "../../../Context/store/AuthGlobal";

const MyProducts = (props) => {

    const context = useContext(AuthGlobal);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${baseURL}products/myProducts/${context.stateUser.user.userId}`)
            .then((res) => {
                setProducts(res.data);
                console.log(res.data)
            })
            .catch((error)=>{
                console.log("products get failed");
            })
    },[])

    return (
        <>
            <ScrollView>
                {products.length ?  (
                    <ListContainer>
                        {products.map((item)=>{
                            return (
                                <ProductList
                                    key={item._id}
                                    item={item}
                                    navigation={props.navigation}
                                />
                            );
                        })}
                    </ListContainer>
                ) : (
                    <Container>
                        <Text>판매목록이 비어있습니다</Text>
                        <Text>관심품목을 추가해주세요</Text>
                    </Container>
                )}
            </ScrollView>
        </>
    )
}

export default MyProducts;