import styled from 'styled-components';
//Singlepage
export const Container = styled.View`
    flex: 1;
`
export const Header = styled.View`
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px;
    padding: 0 11px;
`

export const Row = styled.View`
    align-items: center;
    flex-direction: row;

`

export const User = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #222121;
`

export const Time = styled.Text`
    font-size: 12px;
    color: #747476;

`

export const Post = styled.View`
    padding: 10px;
`

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #222121;
`
export const PostContent = styled.Text`
    font-size: 12px;
    color: #222121;
    line-height: 16px;
    margin-top: 10px;
`

export const Photo = styled.Image`
    width: 100%;
    height: 250;
`

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
`

export const Like = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-self: center;
    margin-left: 10px;
`

export const Chat = styled.TouchableOpacity`
    flex-direction: row;
    width: 100px;
    height: 100%;
    justify-content: center;
    align-self: center;
    background: red;
`
export const ChatText = styled.Text`
    font-weight: bold;
    color: white;
    font-size: 15px;
    align-self: center;
`

export const BottomDivider = styled.View`
    width: 95%;
    height: 1px;
    background: #d0d0d0;
    align-self: center;
`

export const Seperator = styled.View`
    width: 1px;
    height: 60%;
    background: #d0d0d0;
    align-self: center;
`
export const BottomInfo = styled.View`
    height: 100%;
`

export const Price = styled.Text`
    font-size: 18px;
    font-weight: bold;
`

export const Category = styled.Text`
    font-size: 12px;
    color: #747476;
`

export const GoBack = styled.TouchableOpacity`
    flex-direction: row;
    padding: 10px;
`