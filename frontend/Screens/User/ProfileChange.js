import React, {useState, useEffect, useContext} from "react";


import {
    View,
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

import { 
    Container,
    Main,
    Auth,
    AuthContainer,
    AuthTitle,
    AuthField,
    SignInContainer
} from "./LoginStyles";

import Text from "./TextStyle";

import { AntDesign } from "react-native-vector-icons";
import defaultimg from "../../assets/users/user-1.jpg"

const ProfileChange = () => {
    
    const context = useContext(AuthGlobal);
    const [userProfile, setUserProfile] = useState(context.stateUser.userProfile);
    const [image, setImage] = useState(context.stateUser.userProfile.userImg);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

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

    const handleSubmit = () => {
        
    }

    return (
        <Container>
            <Main>
                <Text title semi center>
                    프로필 변경
                </Text>
            </Main>
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
            <Auth>
                <AuthContainer>
                    <AuthTitle>이름</AuthTitle>
                    <AuthField
                            autoCapitalize="none"
                            autoCorrect={false}
                            autoFocus={true}
                            defaultValue={userProfile.name}
                            onChangeText={(text)=> setName(text)}
                        />
                </AuthContainer>
                <AuthContainer>
                    <AuthTitle>전화번호</AuthTitle>
                    <AuthField
                            autoCapitalize="none"
                            placeholder="- 빼고 입력"
                            autoCorrect={false}
                            autoFocus={true}
                            keyboardType="numeric"
                            defaultValue={userProfile.phone}
                            onChangeText={(text)=> setPhone(text)}
                        />
                </AuthContainer>
            </Auth>
            <SignInContainer
            onPress={() => handleSubmit()} 
          >
            <Text bold center color="#ffffff">프로필 변경</Text>
          </SignInContainer>
        </Container>
    )

}
export default ProfileChange;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    }
})