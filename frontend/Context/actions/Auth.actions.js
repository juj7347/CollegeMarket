import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import baseURL from "../../assets/common/baseURL";
import axios from "axios";

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const loginUser = (user, dispatch) => {
    fetch(`${baseURL}users/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
    .then((res)=> res.json())
    .then((data)=>{
        if(data) {
            const token = data.token;
            const userId = data.id;
            AsyncStorage.setItem("jwt", token)
            const decoded = jwtDecode(token)

            axios
                .get(`${baseURL}users/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                .then((res)=>{
                    let user = res.data;
                    user["token"] = token;
                    dispatch(setCurrentUser(decoded, user)) 
                })
                .catch((error) => {
                    console.log(error);
                    logoutUser(dispatch);
                });

            
        }
        else {
            logoutUser(dispatch)
        }
    })
    .catch((err)=>{
        Toast.show({
            topOffset: 60,
            type: "error",
            text1: "올바른 계정 정보를 입력해주세요"
        });
        logoutUser(dispatch)
    });
    
};

export const getUserProfile = (id) => {
    fetch(`${baseURL}users/${id}`, {
        method: "GET",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data)=> console.log(data));
}

export const logoutUser = (dispatch) => {
    AsyncStorage.removeItem("jwt");
    dispatch(setCurrentUser({}))
}

export const setCurrentUser = (decoded, user) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
        userProfile: user
    }
}