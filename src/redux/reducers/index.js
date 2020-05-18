import { combineReducers } from 'redux'
import AppReducer from './appreducer'
import RandomCountryReducer from './randomcountryreducer'


export default combineReducers({
    appState : AppReducer,
    randomCountryState : RandomCountryReducer
})