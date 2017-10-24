export default (state = [], action) => {
  let {type, payload} = action

  switch(type){
    //Admin reducers
    case 'CREATE_FLIGHT': return [payload, ...state]
    case 'FETCH_FLIGHTS': return payload
    case 'FETCH_FLIGHT': return payload
    case 'DELETE_FLIGHT': return state.filter(item => item._id !== payload._id)
    //User reducers
    case 'FLIGHT_SEARCH': return payload
    case 'ASCENDING_PRICE_FILTER': return payload.sort((flightA, flightB) => flightA.price - flightB.price)
    case 'DESCENDING_PRICE_FILTER': return payload.sort((flightA, flightB) => flightB.price - flightA.price)
    case 'ASCENDING_TIME_FILTER': return payload.sort((flightA, flightB) => flightA.departureMilitary - flightB.departureMilitary)
    case 'DESCENDING_TIME_FILTER': return payload.sort((flightA, flightB) => flightB.departureMilitary - flightA.departureMilitary)
    default: return state
  }
}