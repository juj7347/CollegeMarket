import React from "react";
import { View } from "react-native";
import { Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";


const WishList = (props) => {
    return (
        <SafeAreaView>
            {props.chatItems.map((item)=>{
                return (
                    <Text>{item.product.name}</Text>
                )
            })}
            
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
