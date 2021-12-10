import React, { useState, useEffect } from "react"

import { FlatList } from "react-native"
import { 
    Container,
    Card,
    TextSection,
    NameText 
} from "../../../Shared/StyledComponents/SelectStyles"

import baseURL from "../../../assets/common/baseURL"
import axios from "axios"

import { connect } from "react-redux"
import { setTag } from "../../../Redux/Actions/postTagActions"

const CategorySelect = (props) => {
    
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axios
            .get(`${baseURL}categories`)
            .then((res)=>{
                setCategories(res.data);
            })
            .catch((error) => console.log("category get failed", error));
        
        return () => {
            setCategories([]);
        }
    },[])

    return (
        <Container>
            <FlatList
                data={categories}
                keyExtractor={(item)=>item._id}
                renderItem={({item})=>(
                    <Card
                        onPress={()=>{
                            props.setCategory(item)
                            props.navigation.navigate("ProductForm")
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
        setCategory: (postTagItems) => {
            dispatch(setTag({postTagItems}))
        }
    }
}

export default connect(null, mapDispatchToProps)(CategorySelect);