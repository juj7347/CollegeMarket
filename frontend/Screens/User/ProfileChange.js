import React, {useState, useEffect, useContext} from "react";


import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import axios from 'axios';
import AuthGlobal from "../../Context/store/AuthGlobal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/Ionicons'
import baseURL from "../../assets/common/baseURL";
import * as ImagePicker from "expo-image-picker"
import {
    Image,
    ImageContainerProfile,
    ImageButton,
    Close
} from "../../Shared/StyledComponents/Image";
import { AntDesign } from "react-native-vector-icons";
import defaultimg from "../../assets/users/user-1.jpg"
import { alignSelf } from "styled-system";
const defaultimguri = Image.resolveAssetSource(defaultimg).uri
const ProfileChange = () => {
    const [image, setImage] = useState(defaultimguri);
    const [userProfile, setUserProfile] = useState();
    const context = useContext(AuthGlobal);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if(!result.cancelled) {
            setImage(result.uri);
        }
    }
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
        <View>
            <ImageContainerProfile>
                {image ? (
                <Close
                    onPress={()=>setImage()}
                >
                    <AntDesign
                        name="closecircle"
                        size={12}
                    />
                </Close>) : null}
                <ImageButton
                    onPress={pickImage}
                >
                    {!image ? (
                        <AntDesign
                            name="camera"
                            size={40}
                            color="#8e93a1"
                        />
                    ) : (
                        <Image
                            source={{uri: image}}
                        />
                    )}
                </ImageButton>
            </ImageContainerProfile>
            <View style={styles.container}>
            <Text>
                이름
            </Text>
                <TextInput
                    placeholder="이름"
                    placeholderTextColor="#666666"
                    value={userProfile ? userProfile.name : ""}/>
            </View>
            <View style={styles.container}>
            <Text>
                이메일
            </Text>
                <TextInput
                    placeholder="이메일"
                    placeholderTextColor="#666666"
                    value={userProfile ? userProfile.email : ""}/>
            </View>
            <View style={styles.container}>
            <Text>
                학교
            </Text>
                <TextInput
                    placeholder="이메일"
                    placeholderTextColor="#666666"
                    value={userProfile ? userProfile.school : ""}/>
            </View>
        </View>
    )

}
export default ProfileChange;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    }
})