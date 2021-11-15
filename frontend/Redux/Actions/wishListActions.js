import {
    ADD_TO_WISHLIST,
    REMOVE_FROM_WIHSLIST,
    CLEAR_WISHLIST
} from '../constants';

export const addToWishList = (payload) => {
    return {
        type: ADD_TO_WISHLIST,
        payload
    }
}

export const removeFromWithList = (payload) => {
    return {
        type: REMOVE_FROM_WIHSLIST,
        payload
    }
}

export const clearWishList = () => {
    return {
        type: CLEAR_WISHLIST
    }
}