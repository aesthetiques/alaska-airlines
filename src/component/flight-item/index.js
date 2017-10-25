import React from 'react'
import {connect} from 'react-redux'
import {
  ascendingTimeFilter, 
  ascendingPriceFilter, 
  descendingTimeFilter,
  descendingPriceFilter} from '../../action/flight-actions' 
import {
  Col,
  Row,
  Grid,
  Panel} from 'react-bootstrap'
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
        <Grid>
        <Row className="show-grid">
          <Col sm={6} md={4}>Trip</Col>
          <Col sm={6} md={2}>Flight Number</Col>
          <Col sm={6} md={2}>First Class</Col>
          <Col sm={6} md={2}>Main Cabin</Col>
        </Row>
        {this.props.flights.map(flight => {
          return(
          <Row className="show-grid" key={flight.flightNum}>
            <Col sm={6} md={4}>{flight.departure} &rarr; {flight.destination}</Col>
            <Col sm={6} md={2}>{flight.flightNum}</Col>
            <Col sm={6} md={2}>${flight.firstClassPrice}</Col>
            <Col sm={6} md={2}>${flight.standardClassPrice}</Col>
          </Row>
          )
        })
        }
      
        </Grid> 
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
