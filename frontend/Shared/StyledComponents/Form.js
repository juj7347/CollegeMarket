import styled from "styled-components"
import Text from "./Text"

export const Container = styled.ScrollView`
    flex: 1;
`

export const SelectContainer = styled.View`
    align-items: center;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-color: #8393a1;
    border-bottom-width: 0.5px;
    height: 48px;
    width: 90%;
`

export const Button = styled.TouchableOpacity`
    align-items: center;
`

export const InputContainer = styled.View`
    align-self: center;
    width: 90%;
`

export const MultilineInput = styled.TextInput`
    margin-top: 20px;
`

export const TitleInput = styled.TextInput`
    border-bottom-color: #8393a1;
    border-bottom-width: 0.5px;
    height: 48px;
`

export const Submit = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    bottom: 0px;
    border-radius: 5px;
    background-color: #64B5F6;
    justify-content: center;
`