import { SET_LOADING, GET_COUNTRIES, GET_COUNTRIES_RANDOM, GET_COUNTRY_DETAIL, SELECT_COUNTRY } from "../actions/randomcountryactions"

export const RandomCountryState = {
    isLoading: false,
    countries: [],
    countryDetail: {},
    selectedCountry: "",
    clicked: false
}

export default function RandomCountryReducer(state = RandomCountryReducer, action) {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: action.payload }
        case GET_COUNTRIES:
            return { ...state, isLoading: false, countries: action.payload }
        case GET_COUNTRIES_RANDOM:
            return { ...state, isLoading: false, countries: action.payload }
        case GET_COUNTRY_DETAIL:
            return { ...state, isLoading: false, countryDetail: action.payload }
        case SELECT_COUNTRY:
            return { ...state, isLoading: false, selectedCountry: action.payload,clicked : true }
        default:
            return state;
    }
}