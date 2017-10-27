import superagent from 'superagent'

export const createFlight = flight => ({
  type: 'CREATE_FLIGHT',
  payload: flight,
})

export const fetchFlights = () => ({
  type: 'FETCH_FLIGHTS',
  payload: {},
})

export const fetchFlight = flight => ({
  type: 'FETCH_FLIGHT',
  payload: flight,
})

export const deleteFlight = flight => ({
  type: 'DELETE_FLIGHT',
  payload: flight,
})

//user filter & search options
export const ascendingFirstClassFilter = flights => ({
  type: 'ASCENDING_FIRST_CLASS_FILTER',
  payload: flights,
})

export const descendingFirstClassFilter = flights => ({
  type: 'DESCENDING_FIRST_CLASS_FILTER',
  payload: flights,
})

export const ascendingMainCabinFilter = flights => ({
  type: 'ASCENDING_MAIN_CABIN_FILTER',
  payload: flights,
})

export const descendingMainCabinFilter = flights => ({
  type: 'DESCENDING_MAIN_CABIN_FILTER',
  payload: flights,
})

export const ascendingTimeFilter = flights => ({
  type: 'ASCENDING_TIME_FILTER',
  payload: flights,
})

export const descendingTimeFilter = flights => ({
  type: 'DESCENDING_TIME_FILTER',
  payload: flights,
})

export const flightSearch = results => ({
  type: 'FLIGHT_SEARCH',
  payload: results,
})

export const createFlightReq = flight => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/flight/new`)
    .send(flight)
    .then(res => {
      dispatch(createFlight(res.body))
      return res
    })
}

export const flightSearchReq = search => (dispatch, getState) => {
  console.log('Search', search)
  return superagent.get(`${__API_URL__}/api/flightplan/${search.departureCode}/${search.destinationCode}`)
    .then(res => {
      dispatch(flightSearch(res.body))
      return res
    })
}

export const fetchFlightsReq = flight => (dispatch, getState) => {
  return superagent.get(`${__API_URL__}/api/flights`)
    .then(res => {
      dispatch(fetchFlights(res.body.data))
      return res
    })
}

export const fetchFlightReq = flight => (dispatch, getState) => {
  return superagent.get(`${__API_URL__}/api/flight/${flight._id}`)
    .then(res => {
      dispatch(fetchFlight(res.body.data))
      return res
    })
}

export const deleteFlightReq = flight => (dispatch, getState) => {
  return superagent.delete(`${__API_URL__}/api.flight/delete/${flight._id}`)
  .then(res => {
    dispatch(deleteFlight(flight))
  })
}
