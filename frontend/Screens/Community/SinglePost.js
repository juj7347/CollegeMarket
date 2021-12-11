import React, { useLayoutEffect } from "react";
import {
    View,
    TouchableOpacity
} from "react-native";

import Text from "../../Shared/StyledComponents/Text";

import {
    Container,
    CardContainer,
    Header,
    Row,
    User,
    Time,
    BottomDivider
} from "../../Shared/StyledComponents/Card";

import { Entypo, AntDesign } from "react-native-vector-icons";

import Avatar from "../../Shared/Avatar";



const SinglePost = (props) => {

    useLayoutEffect(() => {

        props.navigation.setOptions({
            headerLeft: () => (
                <Container>
                    <Header>
                        <TouchableOpacity
                            style={{marginRight: 10}}
                            onPress={()=> props.navigation.goBack()}
                        >
                            <AntDesign
                                name="left"
                                color="#000000"
                                size={18}
                            />
                        </TouchableOpacity>
                        <Row>
                            <Avatar
                                source={require("../../assets/users/graduation-cap.png")}
                            />
                            <View style={{paddingLeft: 10}}>
                                <User>
                                    {"sdf"}
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

                    </Header>
                </Container>
            ),
            headerTitle: '',
            headerRight: () => (
                <TouchableOpacity style={{marginRight: 10}}>
                    <Entypo
                        name="dots-three-horizontal"
                        size={15}
                        color="#222121"
                    />
                </TouchableOpacity>
            )
        })

        return () => {
            
        }
    }, [props.navigation])



    return (
        <View>
            <Text>sdf</Text>
        </View>
    )
}

export default SinglePost;