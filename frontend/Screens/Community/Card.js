import React from "react"
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base"

import { TouchableOpacity, View } from "react-native";

import {
    CardContainer,
    Header,
    Row,
    User,
    Time,
    BottomDivider
} from "../../Shared/StyledComponents/Card";

import Avatar from "../../Shared/Avatar";

import {Entypo, AntDesign} from "react-native-vector-icons";

import BoxBottom from "./BoxBottom"
/*
    content = {title: string, subtitle: string, text: string, image: string, id: String, time: number}로 할 예정
*/
const Card = ({title, subtitle, text, image, id, time, category, ...props}) => {
  return (
    <CardContainer
        onPress={()=>props.navigation.navigate("SinglePost")}
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

        <Header>
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
            <TouchableOpacity>
                <Entypo
                    name="dots-three-horizontal"
                    size={15}
                    color="#222121"
                />
            </TouchableOpacity>

        </Header>

        <Stack p="4" space={3}>
            <Text fontWeight="400">
                {text}
            </Text>
        </Stack>
        <Box mt = {2}>
            <AspectRatio w="100%" ratio={16 / 9} alignSelf = 'center'>
            <Image
                source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                }}
                alt="image"
            />
            </AspectRatio>
        </Box>
        <BoxBottom/>
        </Box>
    </CardContainer>
  )
};

export default Card;