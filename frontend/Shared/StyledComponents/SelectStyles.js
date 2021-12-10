import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    background-color: #ffffff;
`

export const Card = styled.TouchableOpacity`
    width: 100%;
`
export const TextSection = styled.View`
    width: 325px;
    height: 50px;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: gainsboro;
`

export const NameText = styled.Text`
    font-weight: bold;
    font-size: 18px;
`

export const TextSearch = styled.TextInput`
    width: 100%;
    height: 35px;
    padding: 10px;
    background-color: gainsboro;
    border-radius: 6px;
`