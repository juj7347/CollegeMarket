import styled from "styled-components";

export const ImageContainer = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    width: 50px;
    height: 50px;
    border-width: 0.5px;
    border-bottom-color: gainsboro;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`
export const ImageButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const Image = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`
export const Close = styled.TouchableOpacity`
    position: absolute;
    top: -5px;
    right: -5px;
    z-index: 10;
`