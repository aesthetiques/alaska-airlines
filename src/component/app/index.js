import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/utils'
// import FlightContainer from '../flight-container'
// import TicketContainer from '../ticket-container'
import LandingContainer from '../landing-container'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

class App extends React.Component{
  componentDidMount(){
    
  }

  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
          {/* want to make this a 'get started' element VVVVVV */}
          <Route path ="/" component={LandingContainer}/>
          </div>
          {/* {LandingContainer} */}
        </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = state => ({

})

let mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
