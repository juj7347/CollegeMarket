import styled from "styled-components";
import Text from "./TextStyle";

export const Container = styled.ScrollView`
    flex: 1;
`

export const Main = styled.View`
    margin-top: 50px;
`

export const Auth = styled.View`
    margin: 64px 32px 32px;
`

export const AuthContainer = styled.View`
    margin-bottom: 32px;
`

export const AuthField = styled.TextInput`
    border-bottom-color: #8393a1;
    border-bottom-width: 0.5px;
    height: 48px;
`

export const EmailRegisterField = styled.TextInput`
    width: 50%;
    border-bottom-color: #8393a1;
    border-bottom-width: 0.5px;
    margin-right: 10px;
    height: 48px;
`

export const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`
export const SignInContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: blue;
    border-radius: 6px;
`

export const SignUp = styled.TouchableOpacity`
    margin-top: 16px;
`

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
`

export const CollegeEmail = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10px;
    border-bottom-color: #8393a1;
    border-bottom-width: 0.5px;
    height: 48px;
    width: 40%;
`

export const Button = styled.TouchableOpacity`
    align-items: center;
`

export const ErrorMessage = styled.View`
    margin-top: 16px;
    align-items: center;
`

export const Input = styled.TextInput`
    width: 80%;
    max-width: 350px;
    min-height: 250px;
    height: 40px;
    border: none;
    margin: 0.5rem 0;
`