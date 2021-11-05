import React from "react";
import { View, StyleSheet } from 'react-native';
import { Text, Box, List, Avatar } from "native-base";

const SearchedProducts = (props) => {
    const { productsFiltered } = props;

    return (
        <Box>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item)=>{
                    <List.Item>
                        <Avatar source={{uri: item.image ? item.image : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png"}} />
                        <Box>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
                        </Box>
                    </List.Item>
                })   
            ) : (
                <View style={StyleSheet.center}>
                    <Text style={{ alignSelf: "center"}}>
                        No Products match the filter
                    </Text>
                </View>
            )}

        </Box>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SearchedProducts;