import React, { useState, useCallback, useContext, useEffect } from 'react';
import { 
    View, 
    StyleSheet,
    Button,
    ActivityIndicator, 
    FlatList, 
    ScrollView, 
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { 
    ButtonContainer,
    FloatingButton
} from '../../Shared/StyledComponents/FloatingButton';
import { FontAwesome5 } from "react-native-vector-icons"

import { 
    Container,
    ListContainer
} from './ProductCardStyles';

import Text from '../../Shared/StyledComponents/Text';

import { useFocusEffect } from '@react-navigation/native';

import { connect } from 'react-redux';
import filterItems from '../../Redux/Reducers/filterItems';

//connect
import baseURL from '../../assets/common/baseURL';
import axios from 'axios';

import ProductList from './ProductList';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';

import AuthGlobal from '../../Context/store/AuthGlobal';

var {width, height} = Dimensions.get('window');

const ProductContainer = (props) => {

    const context = useContext(AuthGlobal);

    const [products, setProducts] = useState([]);
    //search
    const [productsFiltered, setProductsFiltered] = useState([]);

    //loading
    const [loading, setLoading] = useState(true);

    useFocusEffect((
        useCallback(()=>{
            axios
            .get(`${baseURL}products/school/${context.stateUser.userProfile.collegeEmail}/${props.filterItems.category.category._id}`)
            .then((res) => {
                setProducts(res.data);
                if(props.route.params) {
                    setProductsFiltered(res.data.filter(item => item.name.includes(props.route.params.search)));
                }
                else {
                    setProductsFiltered(res.data);
                }
                setLoading(false);
            })
            .catch((err)=>{
                console.log('Api call error');
                console.log(context.stateUser.userProfile.school)
            })



        return () => {
            setProducts([]);
            setProductsFiltered([]);
        }
        },[props.filterItems.category, props.route.params])
    ))
    
    return (
        <>
        {!loading ? (
        <Container>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View>
                    {productsFiltered.length > 0 ? (
                        <ListContainer>
                            {productsFiltered.reverse().map((item)=>{
                                return(
                                    <ProductList
                                        key={item._id}
                                        item={item}
                                        navigation={props.navigation}
                                    />
                                )
                            })}
                        </ListContainer>
                    ) : (
                        <View style={[styles.center, {height: height / 2}]}>
                            <Text>No products</Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </Container>
                    
        ) 
        : (
            <Container style={[styles.center, {backgroundColor: "#f2f2f2"}]}>
                <ActivityIndicator size='large' color='red'/>
            </Container>
        )}
        <ButtonContainer
            onPress={()=> props.navigation.navigate("ProductForm")}
        >
            <FontAwesome5
                name="pen"
                size={20}
                color="white"
            />
        </ButtonContainer>
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

const mapStateToProps = (state) => {
    const { filterItems } = state;
    return {
        filterItems: filterItems
    }
}

export default connect(mapStateToProps, null)(ProductContainer);