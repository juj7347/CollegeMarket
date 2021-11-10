import React from "react";
import { Text } from "native-base";

import { connect } from "react-redux";

const Cart = (props) => {
    return (
        <Text>cart</Text>
    )
}

const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems: cartItems
    }
}

export default connect(mapStateToProps, null)(Cart);