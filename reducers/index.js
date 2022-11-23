import { combineReducers } from 'redux'
import loginReducer from './loginReducer'

const reducers = {
  login: loginReducer,
}

export default combineReducers(reducers)
