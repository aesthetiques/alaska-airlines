import React from 'react'
import {connect} from 'react-redux'
import {
  ascendingTimeFilter, 
  ascendingPriceFilter, 
  descendingTimeFilter,
  descendingPriceFilter} from '../../action/flight-actions' 
import * as utils from '../../lib/utils'

class FlightItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="flight-item">
      {console.log('successfully transferred props into flight-item', this.props.flights)}
      {this.props.flights.length ? 
        <ul>
        {this.props.flights.map(flight => {
          return(
            <li key={flight.flightNum}>
              Depart from: {flight.departure} Flight Number: {flight.flightNum} &rarr; {flight.destination}<br/>
              Depart at: {flight.departureTime} Arrive at: {flight.arrivalTime}<br />
              First Class: ${flight.firstClassPrice} <br />
              Main Cabin: ${flight.standardClassPrice} <br />
            </li>
          )
        })
        }
      
      </ul> 
      : 'No flights found'
      }
      </div>
    )
  }

}

let mapStateToProps = state => ({
  flights: state.flight.flightsOut,
})

let mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FlightItem)