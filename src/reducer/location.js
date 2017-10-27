export default (state = [], action) => {
  let {type, payload} = action

  switch(type){
    case 'CREATE_LOCATION': return [payload, ...state]
    case 'FETCH_ALL_LOCATIONS': return payload
    case 'SET_LOCATION_SUGGESTIONS': return payload.map(flight => flight.location)
    case 'FETCH_LOCATION': return payload
    case 'UPDATE_LOCATION': return payload.map(item => item._id === payload._id ? payload : item)
    case 'DELETE_LOCATION': return payload.filter(item => item._id !== payload._id)
    default: return state
  }
}