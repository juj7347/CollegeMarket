import React, { useState, useEffect } from "react";
import { Image, ScrollView, View, StyleSheet, Text, Button } from "react-native";
import { Container } from "native-base";

const SingleProduct = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState('');

    return (
        <Container style={styles.container}>
            <ScrollView style={styles.scrolView}>
                <View>
                    <Image
                        source={{uri: item.image ? item.image : "https://m.media-amazon.com/images/I/51USYvNTMhL._SL1024_.jpg"}}
                        resizeMode="contain"
                        style={styles.image}
                    />
                    <Text>afdf</Text>
                </View>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height:' 100%'
    },
    scrollView: {
        marginBottom: 80,
        padding: 5
    },
    imageContainer: {
        backgroundColor: 'white',
        padding : 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: 250
    }
})

export default SingleProduct;