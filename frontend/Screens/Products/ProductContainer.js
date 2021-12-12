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
import { AntDesign } from "react-native-vector-icons"

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

    //category
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);

    //search
    const [productsFiltered, setProductsFiltered] = useState([]);

    //loading
    const [loading, setLoading] = useState(true);

    //Categories
    const changeCtg = (ctg) => {
        {
            ctg === 'all'
                ? setProductsCtg(initialState)
                : setProductsCtg(products.filter((i) => i.category._id === ctg));
        }
    };

  useEffect(() => {

      if(props.filterItems.category.category) {
          changeCtg(props.filterItems.category.category._id);
      }

      return () => {
          
      }
  }, [props.filterItems.category])

  useEffect(()=>{
    axios
        .get(`${baseURL}products/school/${context.stateUser.userProfile.collegeEmail}`)
        .then((res) => {
            setProducts(res.data);
            setProductsFiltered(res.data);
            setProductsCtg(res.data);
            setInitialState(res.data);
            setLoading(false);
        })
        .catch((err)=>{
            console.log('Api call error');
            console.log(context.stateUser.userProfile.school)
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
  },[])

    return (
        <>
        {!loading ? (
        <Container>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View>
                    {/*
                    <View>
                        <CategoryFilter
                            categories={categories}
                            categoryFilter={changeCtg}
                            productsCtg={productsCtg}
                            active={active}
                            setActive={setActive}
                        />
                    </View>
                    */}
                    {productsCtg.length > 0 ? (
                        <ListContainer>
                            {productsCtg.map((item)=>{
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
        <ButtonContainer>
            <FloatingButton
                onPress={()=> props.navigation.navigate("ProductForm")}
            >
                <AntDesign
                    name="pluscircle"
                    size={40}
                    color="blue"
                />
            </FloatingButton>
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