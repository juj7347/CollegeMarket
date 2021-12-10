import { SET_TAG } from "../constants";

const postTagItems = (state = {}, action) => {
    switch (action.type) {
        case SET_TAG:
            return state = action.payload;
    }

    return state;
}

export default postTagItems;