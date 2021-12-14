import * as React from 'react';
import { useState } from 'react';
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
  ScrollView,
} from 'native-base';

import {
    Container,
    Row,
    Footer
} from '../../Shared/StyledComponents/Card';

import Text from '../../Shared/StyledComponents/Text';

import {AntDesign} from "react-native-vector-icons"


const BoxBottom = () => {
    const [visible, setVisible] = React.useState(false)
    const toggleState = () => {
        setVisible(!visible);
    };

    return(
        <>
            <Container>
                <Footer justifyContent={"center"} height={"35px"} center>
                    <Text heavy medium marginRight={10}>댓글쓰기</Text>
                    <AntDesign
                        name="message1"
                        size={18}
                    />
                </Footer>
            </Container>
        </>
    );
};

export default BoxBottom;