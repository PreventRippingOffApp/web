import { SEARCH_FORM_OPEN } from "../actionTypes";

const initialState = {
    searchForm: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SEARCH_FORM_OPEN:
            return {
                ...state,
                searchForm: action.searchForm
            }
        default:
            return state
    }
}