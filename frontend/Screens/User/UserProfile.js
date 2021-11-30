import React, {useCallback, useContext, useState, useEffect} from "react";
import { View, Text, ScrollView, Button, StyleSheet } from "react-native";
import { Container } from 'native-base';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from 'axios';
import baseURL from "../../assets/common/baseURL";

import AuthGlobal from "../../Context/store/AuthGlobal";
import { logoutUser } from "../../Context/actions/Auth.actions";

import WishList from './WishList/WishList'

const UserProfile = (props) => {

    const context = useContext(AuthGlobal);
    const [userProfile, setUserProfile] = useState()

    useEffect(() => {
        if (
            context.stateUser.isAuthenticated === false ||
            context.stateUser.isAuthenticated === null
        ) {
            props.navigation.navigate("Login") 
        }
        /*
        AsyncStorage.getItem("jwt")
            .then((res) => {
                axios
                    .get(`${baseURL}users/${context.stateUser.user.userId}`, {
                        headers: { Authorization: `Bearer ${res}`},
                    })
                    .then((user)=> setUserProfile(user.data))
            })
            .catch((error) => console.log(error))
        */
        setUserProfile(context.stateUser.userProfile);
        return () => {
            setUserProfile();
        }

    }, [context.stateUser.isAuthenticated])

    return (
        <Container style={styles.container}>
            <ScrollView contentContainerStyle={styles.subContainer}>
                <Text
                    style={{ fontSize: 30}}
                >
                    Name: {userProfile ? userProfile.name : ""}
                </Text>

                <View
                    style={{marginTop: 20}}
                >
                    <Text
                        style={{margin: 10}}
                    >
                        Email: {userProfile ? userProfile.email : "no"}
                    </Text>
                    <Text
                        style={{margin: 10}}
                    >
                        Phone: {userProfile ? userProfile.phone : ""}
                    </Text>
                </View>

                <View
                    style={{marginTop : 80}}
                >
                    <Button
                        title={"Sign Out"}
                        onPress={() => {
                            AsyncStorage.removeItem("jwt"),
                            logoutUser(context.dispatch)
                        }}
                    />
                </View>

                <WishList/>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    subContainer: {
        alignItems: 'center',
        marginTop: 60
    }
})

export default UserProfile;