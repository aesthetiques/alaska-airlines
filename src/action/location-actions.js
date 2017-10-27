import superagent from 'superagent'

//Admin actions
export const createLocation = location => ({
  type: 'CREATE_LOCATION',
  payload: location,
})

export const updateLocation = location => ({
  type: 'UPDATE_LOCATION',
  payload: location,
})

export const deleteLocation = location => ({
  type: 'DELETE_LOCATION',
  payload: location,
})

//User actions
export const fetchLocations = locations => ({
  type: 'FETCH_ALL_LOCATIONS',
  payload: locations,
})

export const setLocationSuggestions = locations => ({
  type: 'SET_LOCATION_SUGGESTIONS',
  payload: locations,
})

export const fetchLocation = location => ({
  type: 'FETCH_LOCATION',
  payload: location,
})

export const createLocationReq = location => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/location/new`)
    .send(location)
    .then(res => {
      dispatch(createLocation(res.body))
      return res
    })
}

export const fetchLocationsReq = () => (dispatch, getState) => {
  return superagent.get(`${__API_URL__}/api/locations`)
    .then(res => {
      dispatch(fetchLocations(res.body))
      // dispatch(setLocationSuggestions(res.body))
      return res
    })
}

export const fetchLocationReq = location => (dispatch, getState) => {
  return superagent.get(`${__API_URL__}/api/location/${location._id}`)
    .then(res => {
      dispatch(fetchLocation(res.body))
      return res
    })
}

export const updateLocationReq = location => (dispatch, getState) => {
  return superagent.get(`${__API_URL__}/api/location/${location._id}`)
  .send(location)
  .then(res => {
    dispatchEvent(updateLocation(location))
  })
}

export const deleteLocationReq = location => (dispatch, getState) => {
  return superagent.delete(`${__API_URL__}/api/location/delete/${location._id}`)
    .then(res => {
      dispatch(deleteLocation(location))
      return res
    })
}