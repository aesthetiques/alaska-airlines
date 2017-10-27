export default (state = [], action) => {
  let {type, payload} = action

  switch(type){
    case 'SET_LOCATION_SUGGESTIONS': return [state, [...payload.forEach((airport, index) => payload[index] = airport.location)]]
    default: return state
  }
}