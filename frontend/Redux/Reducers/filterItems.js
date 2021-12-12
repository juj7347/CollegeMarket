import { SET_CATEGORY } from "../constants";
import { SET_SEARCH } from "../constants";

const filterItems = (state = {}, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, category: action.payload};
        case SET_SEARCH:
            return {...state, search: action.payload};
    }
    
    return state;
}

export default filterItems;