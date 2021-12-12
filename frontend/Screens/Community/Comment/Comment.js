import React, {useEffect, useState ,useContext} from 'react';
import {
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { 
    Container,    
    Header,
    Row,
    User,
    Time,
    TextBox
} from '../../../Shared/StyledComponents/Card';
import Text from '../../../Shared/StyledComponents/Text';

import { Entypo } from "react-native-vector-icons";

import Avatar from '../../../Shared/Avatar';


const Comment = (props) => {

    return (
        <Container>
            <Header>
                <Row>
                    <Avatar
                        source={require("../../../assets/users/graduation-cap.png")}
                    />
                    <View style={{paddingLeft: 10}}>
                        <User>
                            {props.userProfile.name}
                        </User>
                        
                        <Row>
                            <Time>
                                {Date.now()}
                            </Time>
                            <Entypo
                                name="dot-single"
                                size={12}
                                color="#747476"
                            />
                            <Entypo
                                name="globe"
                                size={10}
                                color="#747476"
                            />
                        </Row>
                    </View>
                </Row>
                <TouchableOpacity>
                    <Entypo
                        name="dots-three-horizontal"
                        size={15}
                        color="#222121"
                    />
                </TouchableOpacity>
            </Header>
            <TextBox>
                <Text>
                    {props.description}
                </Text>
            </TextBox>
        </Container>

    )
}

export default Comment;