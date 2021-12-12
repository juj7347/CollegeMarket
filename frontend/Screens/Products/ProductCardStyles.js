import styled from "styled-components";

export const Container = styled.View`
    background-color: white;
    flex: 1;
`

export const ListContainer = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
`

export const Card = styled.TouchableOpacity`
    width: 50%;
    height: 300px;
    justify-content: center;
    padding: 15px;
`

export const ProductImage = styled.Image`
    height: 65%;
    width: 100%;
    border-radius: 5px;
    align-self: center;
`

export const ProductInfo = styled.View`
    margin-top: 10px;
`