import React, {useState, useEffect} from "react";

import { FlatList, StatusBar, TextInput } from "react-native";

import {
    Container,
    Card,
    TextSection,
    NameText,
    TextSearch
} from "./CollegeSelectStyles";

import { setCollege } from "../../Redux/Actions/collegeActions";
import { connect } from "react-redux";

import baseURL from "../../assets/common/baseURL";
import axios from "axios";

const CollegeSelect = (props) => {

    const [colleges, setColleges] = useState([]);
    const [filtered, setFilterd] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const searchFilter = (text) => {
        setFilterd(colleges.filter(c => c.name.toLowerCase().includes(text.toLowerCase())));
    }

    useEffect(() => {
        axios
            .get(`${baseURL}address`)
            .then((res)=>{
                setColleges(res.data);
                setFilterd(res.data);
            })
            .catch((error) => console.log(error));
    },[])

    return (
        <Container>
            <TextSearch
                placeholder="대학이름 검색"
                onChangeText={(text)=>setSearchValue(text)}
                onSubmitEditing={()=> searchFilter(searchValue)}
            />
            <FlatList
                data={filtered}
                keyExtractor={(item)=>item._id}
                renderItem={({item})=> (
                    <Card
                        onPress={()=>{
                            props.setCollegeItem(item)
                            props.navigation.navigate("Register")
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
        setCollegeItem: (collegeItem) => {
            dispatch(setCollege({collegeItem}))
        }
    }
}

export default connect(null, mapDispatchToProps)(CollegeSelect);