import {
    ADD_TO_CHAT,
    REMOVE_FROM_CHAT,
    CLEAR_CHAT,
    SET_CHAT_OPPONENT
} from '../constants';

const chatItems = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CHAT:
            return [...state, action.payload];
        case REMOVE_FROM_CHAT:
            return state.filter(chatItem => chatItem !== action.payload);
        case CLEAR_CHAT:
            return state = [];
        case SET_CHAT_OPPONENT:
            return state = action.payload;
    }

    return state;
}

export default chatItems;