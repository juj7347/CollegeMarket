import React, {useCallback, useContext, useState, useEffect} from "react";
import { View, Title, Text, Button, StyleSheet, Dimensions, Touchable, caption } from "react-native";
import { ScrollView, Avatar } from "native-base";
import { Container } from "../Styles/wrapper";
import { useFocusEffect } from '@react-navigation/native';
import { RoundedButton } from "../Styles/buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import baseURL from "../../assets/common/baseURL";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import AuthGlobal from "../../Context/store/AuthGlobal";
import { logoutUser } from "../../Context/actions/Auth.actions";

import WishList from './WishList/WishList'
import { TouchableOpacity } from "react-native-gesture-handler";
import { alignContent, alignItems } from "styled-system";
var {width} = Dimensions.get("window");
const UserProfile = (props) => {
    const navigation = useNavigation();
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
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.subContainer}>
                <View style={{flexDirection:'row', marginTop:0, paddingLeft: 40}}>
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
            <View style={{marginLeft: 20}}>
                <Text style={[styles.title, {
                    marginTop: 15,
                    marginBottom: 5,
                }]}>{userProfile ? userProfile.name : ""}</Text>
            </View>
            </View>
            <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="mail" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{userProfile ? userProfile.email : "no"}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone-portrait-sharp" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{userProfile ? userProfile.phone : ""}</Text>
        </View>
      </View>
            <View style={styles.menuWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate("SellPosts")}>
                <View style={styles.menuItem}>
                    <Icon name="logo-usd" size={25}/>
                    <Text style={styles.menuItemText}>
                        판매 게시글
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("CommunityPosts")}>
                <View style={styles.menuItem}>
                <Icon name="md-library" size={25}/>
                <Text style={styles.menuItemText}>
                        커뮤니티 게시글
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("CommentPosts")}>
                <View style={styles.menuItem}>
                <Icon name="md-journal-sharp" size={25}/>
                <Text style={styles.menuItemText}>
                        덧글 목록
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("LikedPosts")}>
                <View style={styles.menuItem}>
                <Icon name="md-heart-sharp" size={25}/>
                <Text style={styles.menuItemText}>
                        관심목록
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                            AsyncStorage.removeItem("jwt"),
                            logoutUser(context.dispatch)
                        }}>
                <View style={styles.menuItem}>
                <Icon name="cloud-offline-sharp" size={25}/>
                <Text style={styles.menuItemText}>
                        로그아웃
                    </Text>
                </View>
            </TouchableOpacity>
            </View>
            </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      userInfoSection: {
        marginLeft: 20,
        marginTop: 30,
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 30,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
    subContainer: {
        width: 300,
        maxWidth: 450,
        marginTop: 60
    }
})

export default UserProfile;