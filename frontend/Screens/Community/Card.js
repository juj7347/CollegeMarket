import React from "react"
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base"

import { SmallBox } from "../../Shared/StyledComponents/SmallCard";
import Text from "../../Shared/StyledComponents/Text";

import { TouchableOpacity, View } from "react-native";

import {
    Container,
    CardContainer,
    Header,
    Row,
    User,
    Time,
    BottomDivider,
    Photo
} from "../../Shared/StyledComponents/Card";

import Avatar from "../../Shared/Avatar";

import { Entypo } from "react-native-vector-icons";

import BoxBottom from "./BoxBottom"
/*
    content = {title: string, subtitle: string, text: string, image: string, id: String, time: number}로 할 예정
*/
const Card = ({tag, id, name, text, image, ...props}) => {
    return (
    <CardContainer
        onPress={()=>props.navigation.navigate("SinglePost", {content: {text: text, image: image, id: id}})}
    >
        <Box my = {2} alignSelf= 'center' 
        w = '100%'
        overflow="hidden"
        _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
        }}
        _web={{
            shadow: 2,
            borderWidth: 0,
        }}
        _light={{
            backgroundColor: "gray.50",
        }}
        >
        <SmallBox>
            <Text tiny center>{tag}</Text>
        </SmallBox>
        

        <Header>
            <Row>
                <Avatar
                    source={require("../../assets/users/graduation-cap.png")}
                />
                <View style={{paddingLeft: 10}}>
                    <User>
                        {name}
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

        <Stack p="4" space={3}>
            <Text fontWeight="400" numberOfLines={5}>
                {text}
            </Text>
        </Stack>
        <Box mt = {2}>
            <Photo
                source={{uri: image ? image : "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"}}
            />
        </Box>
        <BoxBottom/>
        </Box>
    </CardContainer>
  )
};

export default Card;