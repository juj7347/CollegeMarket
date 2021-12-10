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
  Button,
  NativeBaseProvider,
} from "native-base"

import ReplyContents from "./ReplyContents"

const Reply = () => {
    const Re = [{
        profile: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
        id: 0,
        textValue: "내용없음"
    }];
    return(
        <>
            {Re.map(content => (<ReplyContents key = {Re.id} profile = {Re.profile} id = {Re.id} textValue = {Re.textValue}/>))};
        </>
    );
};

export default Reply;