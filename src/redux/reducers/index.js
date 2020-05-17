import { combineReducers } from 'redux'
import AppReducer from './appreducer'

export default combineReducers({
    appState : AppReducer
})