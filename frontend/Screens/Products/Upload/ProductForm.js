import React, {useEffect, useState, useContext} from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Platform
 } from "react-native";
import { Select } from "native-base";

import {
    Container,
    SelectContainer,
    Button,
    InputContainer,
    MultilineInput,
    TitleInput,
    Submit
} from "../../../Shared/StyledComponents/Form"

import Text from "../../../Shared/StyledComponents/Text";

import {
    Image,
    ImageContainer,
    ImageButton,
    Close
} from "../../../Shared/StyledComponents/Image";

import { AntDesign } from "react-native-vector-icons";

import FormContainer from "../../../Shared/Form/FormContainer";
import Input from "../../../Shared/Form/Input";
import EasyButton from "../../../Shared/StyledComponents/EasyButton";
import Error from "../../../Shared/Form/Error";
import Icon from "react-native-vector-icons/Ionicons";

import Toast from "react-native-toast-message";

import AsyncStorage from "@react-native-async-storage/async-storage";
import baseURL from "../../../assets/common/baseURL";
import axios from "axios";

import { connect } from "react-redux";
import postTagItems from "../../../Redux/Reducers/postTagItems";

import AuthGlobal from "../../../Context/store/AuthGlobal";

import * as ImagePicker from "expo-image-picker"
import mime from "mime";


const ProductForm = (props) => {
    
    const context = useContext(AuthGlobal);

    const [pickerValue, setPickerValue] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState();
    const [category, setCategory] = useState();
    const [token, setToken] = useState();
    const [error, setError] = useState();
    //const [isFeatured, setIsFeatured] = useState();
    const [richDescription, setRichDescription] = useState();
    const [item, setItem] = useState();

    useEffect(()=>{
        setCategory(props.postTagItems.postTagItems);
    },[props.postTagItems.postTagItems])

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
            
        }
        AsyncStorage.getItem("jwt")
            .then((res)=>{
                setToken(res)
                /*
                axios
                    .get(`${baseURL}users/${context.stateUser.user.userId}`, {
                        headers: {Authorization: `Bearer ${res}`}
                    })
                    .then((user) => setUserProfile(user.data))
                    .catch((error) => console.log(error))
                */
            })
            .catch((error)=> console.log(error));


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
            setImage(result.uri);
        }
    }

    const addProduct = () => {
        if (
            name == "" ||
            description == "" ||
            category == ""
        ) {
            setError("?????????????????? ????????? ?????????");
            return;
        }

        //required step for iOS (not required for Android)
        const newImageUri = "file:///" + image.split("file:/").join("");

        let formData = new FormData();

        formData.append("image", {
            uri: newImageUri,
            type: mime.getType(newImageUri),
            name: newImageUri.split("/").pop()
        });
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("category", category._id);
        formData.append("categoryName", category.name);
        formData.append("userId", context.stateUser.user.userId);
        formData.append("userName", context.stateUser.userProfile.name);
        formData.append("school", context.stateUser.userProfile.collegeEmail);
        formData.append("userImg", "img");

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        }

        if(item !== null) {
            axios
                .put(`${baseURL}products/${item.id}`, formData, config)
                .then((res)=>{
                    if (res.status == 200 || res.status == 201) {
                        Toast.show({
                            topOffset: 60,
                            type: "success",
                            text1: "????????????"
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
                        text1: "?????? ??????",
                        text2: "?????? ??????????????????"
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
                            text1: "????????? ?????????????????????"
                        });
                        setTimeout(() => {
                            props.navigation.navigate("Home");
                        }, 500)
                    }
                })
                .catch((error)=> {
                    console.log(error)
                    Toast.show({
                        topOffset: 60,
                        type: "error",
                        text1: "???????????? ??????",
                        text2: "?????? ??????????????????"
                    })
                })
        }


    }
    
    return (
        <>
        <Container>
            <ImageContainer>
                {image ? (
                <Close
                    onPress={()=>setImage()}
                >
                    <AntDesign
                        name="closecircle"
                        size={12}
                    />
                </Close>) : null}
                <ImageButton
                    onPress={pickImage}
                >
                    {!image ? (
                        <AntDesign
                            name="camera"
                            size={25}
                            color="#8e93a1"
                        />
                    ) : (
                        <Image
                            source={{uri: image}}
                        />
                    )}
                </ImageButton>
            </ImageContainer>
            <SelectContainer>
                <Text semi color="#8e93a1">{category ? [category.name === "" ? "??????????????? ???????????????" : category.name] : "??????????????? ???????????????"}</Text>
                <Button
                    onPress={()=> props.navigation.navigate("CategorySelect")}
                >
                    <AntDesign
                        name="doubleright"
                        size={14}
                        color="#8e93a1"
                    />
                </Button>
            </SelectContainer>
            <InputContainer>
                <TitleInput
                    placeholder="??????"
                    multiline={true}
                    value={name}
                    onChangeText={(text)=>setName(text)}
                    autoFocus={true}
                />
            </InputContainer>
            <InputContainer>
                <TitleInput
                    placeholder="??????"
                    keyboardType="numeric"
                    value={price}
                    onChangeText={(text)=>setPrice(text)}
                    autoFocus={true}
                />
            </InputContainer>
            <InputContainer>
                <MultilineInput
                    placeholder="???????????? ????????? ?????????"
                    multiline={true}
                    value={description}
                    onChangeText={(text)=>setDescription(text)}
                    autoFocus={true}
                />
            </InputContainer>
        </Container>
        <Submit
            onPress={addProduct}
        >
            <Text medium heavy center color="white">??????</Text>
        </Submit>
        {/*
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
                placeholder="??? ??????"
                name="name"
                id="name"
                value={name}
                onChangeText={(text)=>setName(text)}
            />
            <Input
                placeholder="??????"
                name="price"
                id="price"
                value={price}
                onChangeText={(text)=>setPrice(text)}
            />
            <Input
                placeholder="????????? ????????? ??????????????????"
                name="description"
                id="description"
                value={description}
                onChangeText={(text)=>setDescription(text)}
            />
            <Select
                placeholder="???????????? ??????"
                style={{width: 150}}
                selectedValue={pickerValue}
                onValueChange={(itemValue)=> [setPickerValue(itemValue), setCategory(itemValue)]}
            >
                {categories.map((cat) => {
                    return <Select.Item key={cat._id} label={cat.name} value={{id: cat._id, name: cat.name}}/>
                })}
            </Select>
            {error ? <Error message={error}/> : null}
            <View style={styles.buttonContainer}>
                <EasyButton
                    large
                    primary
                    onPress={addProduct}
                >
                    <Text style={styles.buttonText}>??????</Text>
                </EasyButton>
            </View>
        </FormContainer>
            */}
        </>
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

const mapStateToProps = (state) => {
    const {postTagItems} = state;
    return {
        postTagItems: postTagItems
    }
}

export default connect(mapStateToProps, null)(ProductForm);