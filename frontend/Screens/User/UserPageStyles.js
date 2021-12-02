import styled from "styled-components";

export const Container = styled.View`
    padding: 20px;
`

export const ProfileInfo = styled.View`
    padding: 20px;
`

export const ProfileImageContainer = styled.View`
    align-items: center;
`

export const ProfileImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: red;
`

export const ProfileText = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
`

export const ActivityContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`

export const Activity = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
`
