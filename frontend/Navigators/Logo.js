import { Image } from "native-base";
import React from 'react'

export const LogoImage = () => {
    return (
        <Image
            style={{ width: 60, height: 60, marginLeft: 15}}
            source={require('./logo.png')}
        />
    )
}