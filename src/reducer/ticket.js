export default  (state = [], action) => {
  let {type, payload} = action

  switch(type){
    case 'CREATE_TICKET': return [payload, ...state]
    case 'SELL_TICKET':  return state.map(item => item._id === payload._id ? payload : item)
    case 'UPDATE_TICKET': return state.map(item => item._id === payload._id ? payload : item)
    case 'DELETE_TICKET': return state.filter(item => item._id !== payload._id)
    default: return state
  }
}