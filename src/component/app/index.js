import React from 'react'
import {connect} from 'react-redux'
import {store} from '../../main'
import * as utils from '../../lib/utils'
import LandingContainer from '../landing-container'
import {setLocationSuggestions} from '../../action/suggestion-actions'
import {fetchLocationsReq} from '../../action/location-actions'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

class App extends React.Component{
  componentWillMount(){
    store.dispatch(fetchLocationsReq())
  }

  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
          <Route path ="/" component={LandingContainer}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = state => ({
  locations: state.location,
})

let mapDispatchToProps = dispatch => ({
  fetchLocations: () => dispatch(fetchLocationsReq()),
  setLocationSuggestions: array => dispatch(setLocationSuggestions(array))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
