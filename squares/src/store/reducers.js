import { combineReducers } from 'redux'
import { welcomeWindowReducer } from './welcomeDisplay/reducers'

export default combineReducers({
    welcomeWindowReducer: welcomeWindowReducer
})