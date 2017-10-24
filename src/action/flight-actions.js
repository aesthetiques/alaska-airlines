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

export const createFlightReq = flight => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/flight/new`)
    .send(flight)
    .then(res => {
      dispatch(createFlight(res.body))
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
