import React from 'react'
import {connect} from 'react-redux'
import FlightItem from '../flight-item'
import * as utils from '../../lib/utils'

class FlightContainer extends React.Component{

  componentDidMount(){
    sessionStorage.setItem('flights', JSON.stringify(this.props.flights))
  }

  render(){
    return(
      <div className="flight-container">
        <FlightItem />
      </div>
    )
  }
}

let mapStateToProps = state => ({
  locations: state.location,
  flights: state.flight,
})

let mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FlightContainer)