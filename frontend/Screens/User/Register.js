import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import Error from "../../Shared/Form/Error";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import axios from "axios";
import baseURL from "../../assets/common/baseURL";

import Toast from 'react-native-toast-message';

import EasyButton from "../../Shared/StyledComponents/EasyButton";

import { useNavigation } from "@react-navigation/core";

const Register = (props) => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [userId, setUserId] = useState();
    const navigation = useNavigation();

    const register = () => {
        if (
            email === "" || 
            name === "" ||
            password === ""
            ) {
                setError("모든 정보를 입력해주세요")
            }

        let user = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            isAdmin: false
        }

        axios
            .post(`${baseURL}users/register`, user)
            .then((res)=>{
                if (res.status == 200) {
                    setUserId(res.data._id);
                    Toast.show({
                        topOffset: 60,
                        type: "success",
                        text1: "회원가입 완료!",
                        text2: "로그인을 해주세요!"
                    })
                    setTimeout(() => {
                        navigation.navigate("Login"); 
                    }, 500); //성공시 500ms후 login창으로
                }
            })
            .catch((error)=>{
                Toast.show({
                    topOffset: 60,
                    type: 'error',
                    text1: "회원가입 실패",
                    text2: "회원가입을 다시 해주세요"
                })
            })
        
        axios
            .post(`${baseURL}wishlist`, {userId: userId}, {
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            .then((res)=>{
                if(res.status == 200) {
                    console.log("wishlist added");
                }
            })
            .catch((error)=>{
                console.log(error);
            });
            
    }

    return (
        <KeyboardAwareScrollView
            viewIsInsideTabBar={true}
            extraHeight={200}
            enableOnAndroid={true}
        >
            <FormContainer
                title={"Register"}
            >
                <Input
                    placeholder={"Email"}
                    name={"email"}
                    id={"email"}
                    onChangeText={(text) => setEmail(text.toLowerCase())}
                />
                <Input
                    placeholder={"Name"}
                    name={"name"}
                    id={"name"}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder={"Phone Number"}
                    name={"phone"}
                    id={"phone"}
                    keyboardType={"numeric"}
                    onChangeText={(text) => setPhone(text)}
                />
                <Input
                    placeholder={"Password"}
                    name={"password"}
                    id={"password"}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <View>
                    {error ? <Error message={error}/> : null}
                </View>
                <View>
                    <EasyButton
                        primary
                        large
                        onPress={() => register()}
                    >
                        <Text style={{color: 'white'}}>Register</Text>
                    </EasyButton>
                </View>
                <View>
                    <EasyButton
                        secondary
                        large
                        onPress={()=>{
                            navigation.navigate("Login")
                        }}
                    >
                        <Text style={{color: 'white'}}>Back to Login</Text>
                    </EasyButton>
                </View>
            </FormContainer>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        width: '80%',
        margin: 10,
        alignItems: 'center'
    }
})

export default Register;