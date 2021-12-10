import React, {useState, useEffect} from "react";
import { View, StyleSheet} from "react-native";

import {
    Container,
    Main,
    Auth,
    AuthContainer,
    AuthTitle,
    AuthField,
    ErrorMessage,
    Button,
    Row,
    SignInContainer,
    SignUp,
    EmailRegisterField,
    CollegeEmail
} from "./LoginStyles"
import {AntDesign} from "react-native-vector-icons"
import Text from "./TextStyle";

import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import Error from "../../Shared/Form/Error";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import axios from "axios";
import baseURL from "../../assets/common/baseURL";

import Toast from 'react-native-toast-message';

import EasyButton from "../../Shared/StyledComponents/EasyButton";

import { useNavigation } from "@react-navigation/core";

import { connect } from "react-redux";
import collegeItems from "../../Redux/Reducers/collegeItems";

const Register = (props) => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [college, setCollege] = useState("");
    const [error, setError] = useState("");
    const [emailCode, setEmailcode] = useState("");
    const [authCode, setAuthCode] = useState("@#$dfs@$#%gv2324VFGE234");
    const [emailAuth, setEmailAuth] = useState(false);
    const navigation = useNavigation();

    const sendEmailAuthRequest = () => {
        if (email === "") {
            setError("이메일 정보를 입력해주세요");
            return;
        }

        axios
        .post(`${baseURL}users/check`, {email: `${email}@${college}`})
        .then((res)=>{
            if(res.data.exists) {
                Toast.show({
                    topOffset: 60,
                    type: 'error',
                    text1: "이미 가입된 이메일 입니다"
                    
                })
            }
            else {
                axios
                .post(`${baseURL}mail`, {email: `${email}@${college}`})
                .then((res)=>{
                    setAuthCode(res.data.code);
                    Toast.show({
                        topOffset: 60,
                        type: 'success',
                        text1: "인증번호 전송",
                        text2: "이메일을 확인하세요"
                        
                    })
                })
                .catch((error) => console.log(error));
            }
        })


    }

    const codeVerification = () => {
        setEmailAuth(emailCode == authCode)

        if(emailCode != authCode) {
            Toast.show({
                topOffset: 60,
                type: 'error',
                text1: "인증실패",
                text2: "인증번호를 다시 확인하세요"
                
            })
        }
    }

    const register = () => {
        if (
            email === "" || 
            name === "" ||
            password === ""
            ) {
                setError("모든 정보를 입력해주세요");
                return;
        }

        if(!emailAuth) {
            setError("이메일 인증 실패");
            return;
        }

        let user = {
            name: name,
            email: `${email}@${college}`,
            password: password,
            school: props.collegeItems.collegeItem.name,
            collegeEmail: college.split(".").join(""),
            isAdmin: false
        }

        axios
            .post(`${baseURL}users/register`, user)
            .then((res)=>{
                if (res.status == 200) {
                    axios
                    .post(`${baseURL}wishlist`, {userId: res.data._id})
                    .then((res)=>{
                        if(res.status == 200) {
                            console.log("wishlist added");
                        }
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
                    
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
            });

        
    }
    
    useEffect(()=>{
        setCollege(props.collegeItems.collegeItem.address);
    },[props.collegeItems.collegeItem.address])

    return (
        <KeyboardAwareScrollView
            viewIsInsideTabBar={true}
            extraHeight={200}
            enableOnAndroid={true}
        >   
            <Container>
                <Main>
                    <Text title semi center>
                        회원가입
                    </Text>
                </Main>
                <Auth>
                    <AuthContainer>
                        <AuthTitle>이름</AuthTitle>
                        <AuthField
                            autoCapitalize="none"
                            autoCorrect={false}
                            autoFocus={true}
                            onChangeText={(text)=> setName((text))}
                            value={name}
                        />
                    </AuthContainer>
                    <AuthContainer>
                        <AuthTitle>학교 이메일</AuthTitle>
                        <Row>
                            <EmailRegisterField
                                autoCapitalize="none"
                                autoCompleteType="email"
                                autoCorrect={false}
                                autoFocus={true}
                                keyboardType="email-address"
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                            />
                            <Text semi color="#8e93a1">@</Text>
                            <CollegeEmail>
                                <Text semi color="#8e93a1">{college ? college : "대학 찾기"}</Text>
                                <Button
                                    onPress={() => {
                                        navigation.navigate("CollegeSelect")
                                    }}
                                >
                                    <AntDesign
                                        name="doubleright"
                                        size={14}
                                        color="#8e93a1"
                                    />
                                </Button>
                            </CollegeEmail>
                        </Row>
                    </AuthContainer>
                    { !emailAuth ?
                    <Button
                        onPress={() => sendEmailAuthRequest()}
                    >
                        <Text>인증번호 발송</Text>
                    </Button> : null}
                    <AuthContainer>
                        <AuthTitle>이메일 인증번호</AuthTitle>
                        <Row>
                            <EmailRegisterField
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoFocus={true}
                                secureTextEntry={true}
                                onChangeText={(text)=>setEmailcode(text)}
                                value={emailCode}
                                editable={!emailAuth}
                            />
                            { !emailAuth ?
                            <Button
                                onPress={()=> codeVerification()}
                            >
                                <Text>확인</Text>
                            </Button> : <Text>인증 완료! <AntDesign name="check" size={14} color="green"/></Text>}
                        </Row>
                    </AuthContainer>
                    <AuthContainer>
                        <AuthTitle>Password</AuthTitle>
                        <AuthField
                            autoCapitalize="none"
                            autoCompleteType="password"
                            autoCorrect={false}
                            autoFocus={true}
                            secureTextEntry={true}
                            onChangeText={(text)=> setPassword((text))}
                            value={password}
                        />
                    </AuthContainer>
                </Auth>
                <SignInContainer
                    onPress={() => register()} 
                >
                    <Text bold center color="#ffffff">Sign Up</Text>
                </SignInContainer>
                <ErrorMessage>
                    {error ? <Error message={error}/> : null}
                </ErrorMessage>
                <SignUp
                    onPress={()=>{
                    navigation.navigate("Login")
                    }}
                >
                    <Text small center>
                    이미 계정이 있으신가요? <Text bold color="blue">로그인</Text>
                    </Text>
                </SignUp>
            </Container>
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

const mapStateToProps = (state) => {
    const {collegeItems} = state;
    return {
        collegeItems: collegeItems
    }
}

export default connect(mapStateToProps,null)(Register);