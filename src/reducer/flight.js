export default (state = [], action) => {
  let {type, payload} = action

  switch(type){
    //Admin reducers
    case 'CREATE_FLIGHT': return [payload, ...state]
    case 'FETCH_FLIGHTS': return payload
    case 'FETCH_FLIGHT': return payload
    case 'DELETE_FLIGHT': return state.filter(item => item._id !== payload._id)
    //User reducers
    case 'FLIGHT_SEARCH': return payload.flightsOut
    case 'ASCENDING_FIRST_CLASS_FILTER' : return payload.sort((flightA, flightB) => flightA.firstClassPrice - flightB.firstClassPrice)
    case 'DESCENDING_FIRST_CLASS_FILTER': return payload.sort((flightA, flightB) => flightB.firstClassPrice - flightA.firstClassPrice)
    case 'ASCENDING_MAIN_CABIN_FILTER' : return payload.sort((flightA, flightB) => flightA.standardClassPrice - flightB.standardClassPrice)
    case 'DESCENDING_MAIN_CABIN_FILTER' : return payload.sort((flightA, flightB) => flightB.standardClassPrice - flightA.standardClassPrice)
    case 'ASCENDING_TIME_FILTER': return payload.sort((flightA, flightB) => flightA.departureMilitary - flightB.departureMilitary)
    case 'DESCENDING_TIME_FILTER': return payload.sort((flightA, flightB) => flightB.departureMilitary - flightA.departureMilitary)
    default: return state
  }
}