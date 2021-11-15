import React, { useReducer, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';

import authReducer from '../reducers/Auth.reducer';
import { setCurrentUser } from '../actions/Auth.actions';
import AuthGlobal from './AuthGlobal';

const Auth = props => {
    const [stateUser, dispath] = useReducer(authReducer, {
        isAuthenticated: null,
        user: {}
    });
    const [showChild, setShowChild] = userState(false);

    useEffect(() => {
        setShowChild(true);
        if (AsyncStorage.jwt) {
            const decoded = AsyncStorage.jwt ? AsyncStorage.jwt : "";
            if (showChild) {
                dispath(setCurrentUser(jwtDecode(decoded)))
            }
        }
        return () => setShowChild(false);
    }, [])


    if(!showChild) {
        return null;
    }
    else {
        return (
            <AuthGlobal.Provider
                value={{
                    stateUser,
                    dispath
                }}
            >
                {props.children}
            </AuthGlobal.Provider>
        )
    }
};

export default Auth;
