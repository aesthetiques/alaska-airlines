export default (state = [], action) => {
  let {type, payload} = action

  switch(type){
    case 'CREATE_FLIGHT': return [payload, ...state]
    case 'FETCH_FLIGHTS': return payload
    case 'FETCH_FLIGHT': return payload
    case 'DELETE_FLIGHT': return state.filter(item => item._id !== payload._id)
    default: return state
  }
}