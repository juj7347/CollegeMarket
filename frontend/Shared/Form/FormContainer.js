import React from "react";
import { ScrollView, Dimensions, StyleSheet, Text } from "react-native";
import { Container } from "../../Screens/Styles/wrapper";
import { Title } from "../../Screens/Styles/text";

var {width} = Dimensions.get('window');

const FormContainer = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Container>
            <Title>{props.title}</Title>
            {props.children}
            </Container>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 400,
        width: width,
        justifyContent:'center',
        alignContent: 'center'
    },
    title: {
        fontSize: 30,
    }
})

export default FormContainer;