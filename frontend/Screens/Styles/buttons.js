import styled from 'styled-components';
import React from 'react';

const RoundedTouchableOpacity = styled.TouchableOpacity`
    height: 60px;
    border-radius: 30px
    width: 180px;
    justify-content: center;
    align-items: center;
    background-color: blue;
    margin-top: 16px;
`
const ButtonText = styled.Text`
    color: white;
    font-size: ${props => props.size || '16px' }
`

export const RoundedButton = ({ onPress, title, fontSize} ) =>
    <RoundedTouchableOpacity onPress={onPress}>
        <ButtonText size={fontSize}>{title}</ButtonText>
    </RoundedTouchableOpacity>

