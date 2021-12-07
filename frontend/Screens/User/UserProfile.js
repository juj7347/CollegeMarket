import React, {useCallback, useContext, useState, useEffect} from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ScrollView, Avatar } from "native-base";
import { Container } from "../Styles/wrapper";
import { useFocusEffect } from '@react-navigation/native';
import { RoundedButton } from "../Styles/buttons";
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

        AsyncStorage.getItem("jwt")
            .then((res) => {
                axios
                    .get(`${baseURL}users/${context.stateUser.user.userId}`, {
                        headers: { Authorization: `Bearer ${res}`},
                    })
                    .then((user)=> setUserProfile(user.data))
            })
            .catch((error) => console.log(error))
        
        return () => {
            setUserProfile();
        }

    }, [context.stateUser.isAuthenticated])

    return (
        <Container>
            <ScrollView contentContainerStyle={styles.subContainer}>
            <View style={{flexDirection: 'row'}}>
            <Avatar
                bg="green.500"
                mr="1"
                size="lg"
                source={{
                uri: "https://bit.ly/broken-link",
                }}
            >
                123
            </Avatar>
                <Text
                    style={{ fontSize: 45}}
                >
                    {userProfile ? userProfile.name : ""}
                </Text>
                </View>
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
                    <RoundedButton
                        title={"로그아웃"}
                        onPress={() => {
                            AsyncStorage.removeItem("jwt"),
                            logoutUser(context.dispatch)
                        }}
                    />
                    <RoundedButton
                        title={"관심목록"}
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