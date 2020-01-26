import { GET_DATA } from "../actionTypes";

const initialState = {
    voiceData: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                voiceData: action.data
            }
        default:
            return state
    }
}