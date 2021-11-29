import {
    ADD_TO_CHAT,
    REMOVE_FROM_CHAT,
    CLEAR_CHAT,
    SET_CHAT_OPPONENT,
    SET_CONVERSATION
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

export const setChatOpponent = (payload) => {
    return {
        type: SET_CHAT_OPPONENT,
        payload
    }
}

export const setConversation = (payload) => {
    return {
        type: SET_CONVERSATION,
        payload
    }
}