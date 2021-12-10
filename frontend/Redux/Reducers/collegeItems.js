import { SET_COLLEGE } from "../constants";

const collegeItems = (state = {}, action) => {
    switch (action.type) {
        case SET_COLLEGE:
            return state = action.payload;
    }

    return state;
}

export default collegeItems;