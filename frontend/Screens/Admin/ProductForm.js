import React, {useEffect, useState, useContext} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform
 } from "react-native";
import { Select } from "native-base";

import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import EasyButton from "../../Shared/StyledComponents/EasyButton";
import Error from "../../Shared/Form/Error";
import Icon from "react-native-vector-icons/Ionicons";

import Toast from "react-native-toast-message";

import AsyncStorage from "@react-native-async-storage/async-storage";
import baseURL from "../../assets/common/baseURL";
import axios from "axios";

import AuthGlobal from "../../Context/store/AuthGlobal";

import * as ImagePicker from "expo-image-picker"
import mime from "mime";


const ProductForm = (props) => {
    
    const context = useContext(AuthGlobal);

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
    //const [isFeatured, setIsFeatured] = useState();
    const [richDescription, setRichDescription] = useState();
    const [item, setItem] = useState();

    useEffect(() => {

        if(!props.route.params) {
            setItem(null);
        }
        else {
            setItem(props.route.params.item);
            setName(props.route.params.item.name);
            setPrice(props.route.params.item.price.toString());
            setDescription(props.route.params.item.description);
            setMainImage(props.route.params.item.image)
            setImage(props.route.params.item.image);
            setCategory(props.route.params.item.category._id);
        }

        AsyncStorage.getItem("jwt")
            .then((res)=>{
                setToken(res)
            })
            .catch((error)=> console.log(error))

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

    const addProduct = () => {
        if (
            name == "" ||
            description == "" ||
            category == ""
        ) {
            setError("필수항목들을 입력해 주세요")
        }

        let formData = new FormData();

        //required step for iOS (not required for Android)
        const newImageUri = "file:///" + image.split("file:/").join("");

        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("richDescription", richDescription);
        //formData.append("isFeatured", isFeatured);
        formData.append("image", {
            uri: newImageUri,
            type: mime.getType(newImageUri),
            name: newImageUri.split("/").pop()
        });
        formData.append('userId', context.stateUser.user.userId);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        }

        if(item !== null) {
            console.log(userId)
            axios
                .put(`${baseURL}products/${item.id}`, formData, config)
                .then((res)=>{
                    if (res.status == 200 || res.status == 201) {
                        Toast.show({
                            topOffset: 60,
                            type: "success",
                            text1: "수정완료"
                        });
                        setTimeout(() => {
                            props.navigation.navigate("Products");
                        }, 500)
                    }
                })
                .catch((error)=> {
                    console.log(error);
                    Toast.show({
                        topOffset: 60,
                        type: "error",
                        text1: "수정 실패",
                        text2: "다시 시도해주세요"
                    })
                })
        }
        else {
            axios
                .post(`${baseURL}products`, formData, config)
                .then((res)=>{
                    if (res.status == 200 || res.status == 201) {
                        Toast.show({
                            topOffset: 60,
                            type: "success",
                            text1: "물품이 등록되었습니다"
                        });
                        setTimeout(() => {
                            props.navigation.navigate("Products");
                        }, 500)
                    }
                })
                .catch((error)=> {
                    Toast.show({
                        topOffset: 60,
                        type: "error",
                        text1: "물품등록 실패",
                        text2: "다시 시도해주세요"
                    })
                })
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
                    return <Select.Item key={cat._id} label={cat.name} value={cat._id}/>
                })}
            </Select>
            {error ? <Error message={error}/> : null}
            <View style={styles.buttonContainer}>
                <EasyButton
                    large
                    primary
                    onPress={addProduct}
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