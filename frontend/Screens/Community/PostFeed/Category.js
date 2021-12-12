import React, {useEffect, useState} from "react"

import { FlatList } from "react-native";
import {
    Container,
    Card,
    TextSection,
    NameText
} from "../../../Shared/StyledComponents/SelectStyles";

import baseURL from "../../../assets/common/baseURL";
import axios from "axios";

import { connect } from "react-redux";
import { setTag } from "../../../Redux/Actions/postTagActions"; 

const Category = (props) => {

    const [tags, setTags] = useState([]);

    useEffect(()=>{
        axios
            .get(`${baseURL}tags`)
            .then((res)=>{
                setTags(res.data);
            })
            .catch((error) => console.log(error));

    },[])

    return (
        <Container>
            <FlatList
                data={tags}
                keyExtractor={(item)=>item._id}
                renderItem={({item}) => (
                    <Card
                        onPress={()=>{
                            props.setTagItem(item)
                            props.navigation.navigate("PostFeed")
                        }}
                    >
                        <TextSection>
                            <NameText>
                                {item.name}
                            </NameText>
                        </TextSection>
                    </Card>
                )}
            /> 
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTagItem: (postTagItems) => {
            dispatch(setTag({postTagItems}))
        }
    }
}

export default connect(null, mapDispatchToProps)(Category);