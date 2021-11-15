import {
    ADD_TO_WISHLIST,
    REMOVE_FROM_WIHSLIST,
    CLEAR_WISHLIST
} from '../constants';

const wishListItems = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return [...state, action.payload];
        case REMOVE_FROM_WIHSLIST:
            return state.filter(wishListItem => wishListItem !== action.payload);
        case CLEAR_WISHLIST:
            return state = [];
    }

    return state;
}

export default wishListItems;