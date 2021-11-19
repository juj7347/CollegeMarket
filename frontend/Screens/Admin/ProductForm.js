import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform
 } from "react-native";
import { Select} from "native-base";

import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import EasyButton from "../../Shared/StyledComponents/EasyButton";
import Error from "../../Shared/Form/Error";
import Icon from "react-native-vector-icons/Ionicons";

import Toast from "react-native-toast-message";

import AsyncStorage from "@react-native-async-storage/async-storage";
import baseURL from "../../assets/common/baseURL";
import axios from "axios";

import * as ImagePicker from "expo-image-picker"


const ProductForm = (props) => {

    const [pickerValue, setPickerValue] = useState('');
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

    useEffect(() => {

        //Categories

        axios
            .get(`${baseURL}categories`)
            .then((res)=>{
                setCategories(res.data)
            })
            .catch((error)=> alert("Error to load Categories"));

        //Image Picker
        (async () => {
            if (Platform.OS !== "web") {
                const {status} = await ImagePicker.requestCameraPermissionsAsync();
                if(status !== "granted") {
                    alert("Sorry, we need cameral roll permissions")
                }
            }
        })();

            return () => {
                setCategories([])
            }
    },[])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if(!result.cancelled) {
            setMainImage(result.uri);
            setImage(result.uri);
        }
    }
    
    return (
        <FormContainer
            title="Add Product"
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{uri: mainImage}}
                    style={styles.image}
                />
                <TouchableOpacity
                    style={styles.imagePicker}
                    onPress={pickImage}
                >
                    <Icon style={{color: "white"}} name="camera"/>
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
            <Select
                placeholder="카테고리 선택"
                style={{width: 150}}
                selectedValue={pickerValue}
                onValueChange={(itemValue)=> [setPickerValue(itemValue), setCategory(itemValue)]}
            >
                {categories.map((cat) => {
                    return <Select.Item key={cat.id} label={cat.name} value={cat.id}/>
                })}
            </Select>
            {error ? <Error message={error}/> : null}
            <View style={styles.buttonContainer}>
                <EasyButton
                    large
                    primary
                    onPress={()=>{}}
                >
                    <Text style={styles.buttonText}>작성</Text>
                </EasyButton>
            </View>
        </FormContainer>
    )
}

const styles = StyleSheet.create({
    label: {
        width: '80%',
        marginTop: 10
    },
    buttonContainer: {
        width: "80%",
        marginBottom: 80,
        marginTop: 20,
        alignItems: 'center'
    },
    buttonText: {
        color: "white",
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderStyle: 'solid',
        borderWidth: 8,
        padding: 0,
        justifyContent: 'center',
        borderRadius: 100,
        borderColor: "#E0E0E0",
        elevation: 10
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 100
    },
    imagePicker: {
        position: "absolute",
        right: 5,
        bottom: 5,
        backgroundColor: "grey",
        padding: 8,
        borderRadius: 100,
        elevation: 20
    }
})

export default ProductForm;