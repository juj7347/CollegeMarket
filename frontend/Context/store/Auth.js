import React, { useReducer, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import AsyncStorage from "@react-native-async-storage/async-storage";

import authReducer from '../reducers/Auth.reducer';
import { setCurrentUser } from '../actions/Auth.actions';
import AuthGlobal from './AuthGlobal';

import { io } from 'socket.io-client';

const Auth = props => {
    const [stateUser, dispatch] = useReducer(authReducer, {
        isAuthenticated: null,
        user: {},
        userProfile: {}
    });
    const [socket, setSocket] = useState();
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        setShowChild(true);
        setSocket(io("http://192.168.35.9:3000"));
        if (AsyncStorage.jwt) {
            const decoded = AsyncStorage.jwt ? AsyncStorage.jwt : "";
            if (setShowChild) {
                dispatch(setCurrentUser(jwtDecode(decoded)))
            }
        }
        return () => {
            setShowChild(false);
            setSocket();
        }
    }, [])


    if(!showChild) {
        return null;
    }
    else {
        return (
            <AuthGlobal.Provider
                value={{
                    stateUser,
                    socket,
                    dispatch
                }}
            >
                {props.children}
            </AuthGlobal.Provider>
        )
    }
};

export default Auth;
