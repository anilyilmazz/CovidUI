import { SET_LOADING, GET_COUNTRIES, GET_COUNTRIES_RANDOM } from "../actions/randomcountryactions"

export const RandomCountryState = {
    isLoading: false,
    countries: []
}

export default function RandomCountryReducer(state = RandomCountryReducer, action) {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: action.payload }
        case GET_COUNTRIES:
            return { ...state, isLoading: false, countries: action.payload }
        case GET_COUNTRIES_RANDOM:
            return { ...state, isLoading: false, countries: action.payload }
        default:
            return state;
    }
}