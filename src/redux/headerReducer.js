import { getIpInfo } from "../api/api";


const UPDATE_INPUT = "UPDATE_INPUT";
const SET_CURRENT_INFO = "SET_CURRENT_INFO";

let initialState = {
    nowInput: "",
    info: {
        ip: null,
        location: { city: null, postalCode: null, region: null, timezone: null, lat: 0, lng: 0, },
        isp: null,
    }
}

function headerReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_INPUT:
            return {
                ...state, nowInput: action.nowInput
            }
        case SET_CURRENT_INFO:
            return {
                ...state, info: action.info
            }

        default:
            return state;
    }
}

export const changeInput = (inputText) => {
    return { type: UPDATE_INPUT, nowInput: inputText }
}

export const setCurrentInfo = (info) => {
    return { type: SET_CURRENT_INFO, info }
}

export const getInfo = (Ip) => {
    return (dispatch) => {

        getIpInfo(Ip).then(response => {

            dispatch(setCurrentInfo(response.data));

        })

    }
}

export default headerReducer;