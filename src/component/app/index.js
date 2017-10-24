import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/utils'
import {fetchLocationsReq} from '../../action/location-actions'
import {flightSearchReq} from '../../action/flight-actions'
// import FlightContainer from '../flight-container'
// import TicketContainer from '../ticket-container'
import LandingContainer from '../landing-container'
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
          {/* want to make this a 'get started' element VVVVVV */}
          <Route path ="/" component={LandingContainer}/>
          {console.log(this.props.state)}
          </div>
          {/* {LandingContainer} */}
        </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = state => ({
  locations: state.locations
})

let mapDispatchToProps = dispatch => ({
  fetchLocations: () => dispatch(fetchLocationsReq())
  // flightSearchReq: () => dispatch(flightSearchReq())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
