import React, {useState, useContext, useEffect} from "react";
import { View, StyleSheet, Button } from "react-native";

import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import Error from "../../Shared/Form/Error";

//context
import AuthGlobal from "../../Context/store/AuthGlobal";
import { loginUser } from "../../Context/actions/Auth.actions";

import { useNavigation } from "@react-navigation/core";

//
import {
    NativeBaseProvider,
    Box,
    Heading,
    VStack,
    FormControl,
    Link,
    Icon,
    IconButton,
    HStack,
    Divider,
  } from 'native-base';

import {
  Container,
  Main,
  Auth,
  AuthContainer,
  AuthTitle,
  AuthField,
  ErrorMessage,
  SignInContainer,
  SignUp
} from "./LoginStyles"

import Text from "./TextStyle"; 

import EasyButton from "../../Shared/StyledComponents/EasyButton";

const Login = (props) => {
    const context = useContext(AuthGlobal);
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const handleSubmit = () => {
      const user = {
        email,
        password
      }

      if(email === "" || password === "") {
        setError("이메일 또는 비밀번호를 입력해주세요");
      }
      else {
        loginUser(user, context.dispatch)
        context.socket.emit("join", {userId: context.stateUser.user.userId, username: "John Doe"});
      }
    }

    return (
        <Container>
          <Main>
            <Text title semi center>
              환영합니다
            </Text>
          </Main>
          <Auth>
            <AuthContainer>
              <AuthTitle>Email Address</AuthTitle>
              <AuthField
                autoCapitalize="none"
                autoCompleteType="email"
                autoCorrect={false}
                autoFocus={true}
                keyboardType="email-address"
                onChangeText={(text)=> setEmail((text.toLowerCase()))}
                value={email}
              />
            </AuthContainer>
            <AuthContainer>
              <AuthTitle>Password</AuthTitle>
              <AuthField
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                autoFocus={true}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </AuthContainer>
          </Auth>
          <SignInContainer
            onPress={() => handleSubmit()} 
          >
            <Text bold center color="#ffffff">Sign In</Text>
          </SignInContainer>
          <ErrorMessage>
          {error ? <Error message={error}/> : null}
          </ErrorMessage>
          <SignUp
            onPress={()=>{
              navigation.navigate("Register")
            }}
          >
            <Text small center>
              처음이신가요? <Text bold color="blue">회원가입</Text>
            </Text>
          </SignUp>
        </Container>
    )
}


export default Login;