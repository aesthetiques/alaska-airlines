export default (state = [], action) => {
  let {type, payload} = action

  switch(type){
    case 'SET_LOCATION_SUGGESTIONS': return payload
    default: return state
  }
}


