import React, {useState, useContext, useEffect} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import Error from "../../Shared/Form/Error";

//context
import AuthGlobal from "../../Context/store/AuthGlobal";
import { loginUser } from "../../Context/actions/Auth.actions";

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

const Login = (props) => {
    const context = useContext(AuthGlobal); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
  
    useEffect(() => {
        if (context.stateUser.isAuthenticated === true) {
            props.navigation.navigate("UserProfile");
        }
    }, [context.stateUser.isAuthenticated])

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
      }
    }

    return (
        <FormContainer
            title={"Login"}
        >
            <Text>Email</Text>
            <Input
                placeholder={"이메일 주소를 입력하세요"}
                name={"email"}
                id={"email"}
                value={email}
                onChangeText={(text)=> setEmail((text.toLowerCase()))}
            />
            <Text>Password</Text>
            <Input
                placeholder={"비밀번호를 입력하세요"}
                name={"password"}
                id={"password"}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <View style={styles.buttonGroup}>
                {error ? <Error message={error}/> : null}
                <Button
                  title="Sign In"
                  onPress={() => handleSubmit()}  
                />
            </View>
            <View style={[{marginTop: 40}, styles.buttonGroup]}>
                <Text style={styles.middleText}>아직 계정이 없으신가요?</Text>
                <Button
                    title="Sign Up"
                    onPress={()=>{
                        props.navigation.navigate("Register")
                    }}
                />
            </View>
        </FormContainer>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        width: '80%',
        alignItems: 'center'
    },
    middleText: {
        marginBottom: 20,
        alignSelf: 'center'
    }
})

/*
function LoginPage() {
    return (
      <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
  
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
              Email ID
            </FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
              Password
            </FormControl.Label>
            <Input type="password" />
            <Link
              _text={{ fontSize: 'xs', fontWeight: '500', color: 'indigo.500' }}
              
              mt="1">
              Forget ID?
            </Link>
            <Link
              _text={{ fontSize: 'xs', fontWeight: '500', color: 'indigo.500' }}
  
              mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }} title={"Sign in"}/>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="muted.700" fontWeight={400}>
              I'm a new user.
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              href="#">
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    );
  }
*/
export default Login;