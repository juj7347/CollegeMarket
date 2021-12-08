import { SET_COLLEGE } from "../constants";

export const setCollege = (payload) => {
    return {
        type: SET_COLLEGE,
        payload
    }
}