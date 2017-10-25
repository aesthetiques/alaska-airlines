import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/utils'
import LandingContainer from '../landing-container'
import {fetchLocationsReq} from '../../action/location-actions'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

class App extends React.Component{
  componentWillMount(){
    this.props.fetchLocations()
  }

  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
          <Route path ="/" component={LandingContainer}/>
          {console.log('LOGGING PROPS FROM BROWSERROUTER', this.props.locations)}
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = state => ({
  locations: state.location
})

let mapDispatchToProps = dispatch => ({
  fetchLocations: () => dispatch(fetchLocationsReq())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
