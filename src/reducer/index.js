import { combineReducers } from 'redux'
import flight from './flight' 
import ticket from './ticket'
import location from './location'
import suggestions from './suggestions'

export default combineReducers({
  flight,
  ticket,
  location,
  suggestions,
})