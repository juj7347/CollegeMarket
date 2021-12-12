import { SET_CATEGORY } from "../constants";
import { SET_SEARCH } from "../constants";

export const setCategory = (payload) => {
    return {
        type: SET_CATEGORY,
        payload
    }
}

export const setSearch = (payload) => {
    return {
        type: SET_SEARCH,
        payload
    }
}