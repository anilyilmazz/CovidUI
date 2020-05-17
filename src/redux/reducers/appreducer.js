import {SET_RANDOM,SET_SELECT} from "../actions/appactions"

export const AppState = {
    showRandom : false,
    showSelect : false
}

export default function AppReducer(state = [], action) {
    switch (action.type) {
        case SET_RANDOM:
            return {...state,showRandom : true,showSelect : false}
        case SET_SELECT:
            return {...state,showRandom : false,showSelect : true}
        default:
            return state
    }
}