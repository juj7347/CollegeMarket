import { SET_TAG } from "../constants";

export const setTag = (payload) => {
    return {
        type: SET_TAG,
        payload
    }
}