import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform
 } from "react-native";
import { Item, Picker} from "native-base";

import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import EasyButton from "../../Shared/StyledComponents/EasyButton";
import Error from "../../Shared/Form/Error";
import Icon from "react-native-vector-icons/Ionicons";

import Toast from "react-native-toast-message";

import AsyncStorage from "@react-native-async-storage/async-storage";
import baseURL from "../../assets/common/baseURL";
import axios from "axios";

const ProductForm = (props) => {
    return (
        <View>
            <Text>ProductForm</Text>
        </View>
    )
}

export default ProductForm;