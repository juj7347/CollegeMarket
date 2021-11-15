import React from "react";
import { View } from "react-native";
import { Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";

import WishList from "../User/WishList/WishList";

const Chat = (props) => {
    return (
        <SafeAreaView>
            {props.chatItems.map((item)=>{
                return (
                    <Text>{item.product.name}</Text>
                )
            })}
            
            <WishList/>
        </SafeAreaView>

    )
}

const mapStateToProps = (state) => {
    const { chatItems } = state;
    return {
        chatItems: chatItems
    }
}

export default connect(mapStateToProps, null)(Chat);