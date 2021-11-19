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

    const [pickerValue, setPickerValue] = useState();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState();
    const [mainImage, setMainImage] = useState('');
    const [category, setCategory] = useState();
    const [categories, setCategories] = useState([]);
    const [token, setToken] = useState();
    const [error, setError] = useState();
    const [isFeatured, setIsFeatured] = useState();
    const [rickDescription, setRichDescription] = useState();
    const [item, setItem] = useState();


    return (
        <FormContainer
            title="Add Product"
        >
            <View>
                <Image source={{uri: mainImage}}/>
                <TouchableOpacity>
                    <Text>Image</Text>
                </TouchableOpacity>
            </View>

            <Input
                placeholder="글 제목"
                name="name"
                id="name"
                value={name}
                onChangeText={(text)=>setName(text)}
            />
            <Input
                placeholder="가격"
                name="price"
                id="price"
                value={price}
                onChangeText={(text)=>setPrice(text)}
            />
            <Input
                placeholder="게시글 내용을 작성해주세요"
                name="description"
                id="description"
                value={description}
                onChangeText={(text)=>setDescription(text)}
            />
        </FormContainer>
    )
}

const styles = StyleSheet.create({
    label: {
        width: '80%',
        marginTop: 10
    }
})

export default ProductForm;