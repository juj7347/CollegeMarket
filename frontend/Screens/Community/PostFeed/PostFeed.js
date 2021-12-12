import React,{useState, useEffect, useContext} from "react";
import {MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";

import {
    Container,
    SelectContainer,
    Button,
    InputContainer,
    MultilineInput,
    TitleInput,
    Submit
} from "../../../Shared/StyledComponents/Form"

import Toast from "react-native-toast-message";

import {
    ImageContainer,
    Image,
    ImageButton,
    Close
} from "../../../Shared/StyledComponents/Image";
import Text from "../../../Shared/StyledComponents/Text";
import { AntDesign } from "react-native-vector-icons";

import { connect } from "react-redux";
import postTagItems from "../../../Redux/Reducers/postTagItems";

import * as ImagePicker from "expo-image-picker";
import mime from "mime";

import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthGlobal from "../../../Context/store/AuthGlobal";

import axios from "axios";
import baseURL from "../../../assets/common/baseURL";

const PostFeed = (props) => {

    const context = useContext(AuthGlobal);

    const [tagName, setTagName] = useState("");
    const [tagId, setTagId] = useState();
    const [image, setImage] = useState();
    const [desc, setDesc] = useState("");
    const [token, setToken] = useState();

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

    const postFeed = () => {
        if(desc == "" || tagName == "") {
            Toast.show({
                topOffset: 60,
                type: "error",
                text1: "비어있는 항목이 있습니다",
                text2: "빈 항목들을 채워주세요"
            })
            return;
        }

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        }
        let formData = new FormData();
        if(image) {
            const newImageUri = "file:///" + image.split("file:/").join("");

            

            formData.append("image", {
                uri: newImageUri,
                type: mime.getType(newImageUri),
                name: newImageUri.split("/").pop()
            });
        }
        formData.append("tag", tagId);
        formData.append("tagName", tagName);
        formData.append("description", desc);
        formData.append("userId", context.stateUser.user.userId);
        formData.append("userName", context.stateUser.userProfile.name);
        formData.append("userImg", "noImg");


        axios
            .post(`${baseURL}posts`, formData, config)
            .then((res)=> {
                Toast.show({
                    topOffset: 60,
                    type: "success",
                    text1: "게시글 등록 완료",
                })
            })
            .catch((error)=>console.log(error));
    }

    useEffect(()=>{
        setTagName(props.postTagItems.postTagItems.name);
        setTagId(props.postTagItems.postTagItems._id);
    },[props.postTagItems.postTagItems])

    useEffect(()=>{
        AsyncStorage.getItem("jwt")
        .then((res)=>{
            setToken(res);
        })
        .catch((error)=> console.log(error));
    },[])

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
                <Text semi color="#8e93a1">{tagName !== "" ? tagName : "게시판을 선택하세요"}</Text>
                <Button
                    onPress={()=> props.navigation.navigate("category select")}
                >
                    <AntDesign
                        name="doubleright"
                        size={14}
                        color="#8e93a1"
                    />
                </Button>
            </SelectContainer>
            <InputContainer>
                <MultilineInput
                    placeholder="게시글을 작성해 주세요"
                    multiline={true}
                    defaultValue={desc}
                    onChangeText={(text)=>setDesc(text)}
                    autoFocus={true}
                />
            </InputContainer>
        </Container>
        
        <Submit
            onPress={postFeed}
        >
            <Text medium heavy center color="white">등록</Text>
        </Submit>
        </>
    )
}

const mapStateToProps = (state) => {
    const {postTagItems} = state;
    return {
        postTagItems: postTagItems
    }
}

export default connect(mapStateToProps, null)(PostFeed);