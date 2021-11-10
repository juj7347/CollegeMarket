import {
    ADD_TO_CHAT,
    REMOVE_FROM_CHAT,
    CLEAR_CHAT
} from '../constants';

export const addToChat = (payload) => {
    return {
        type: ADD_TO_CHAT,
        payload
    }
}

export const removeFromChat = (payload) => {
    return {
        type: REMOVE_FROM_CHAT,
        payload
    }
}

export const clearChat = () => {
    return {
        type: CLEAR_CHAT
    }
}