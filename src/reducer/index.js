import { combineReducers } from 'redux'
import suggestion from './suggestions'
import flight from './flight' 
import ticket from './ticket'
import location from './location'

export default combineReducers({
  flight,
  ticket,
  location,
  suggestion,
})