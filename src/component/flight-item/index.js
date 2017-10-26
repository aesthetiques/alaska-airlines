import React from 'react'
import {connect} from 'react-redux'
import {
  ascendingMainCabinFilter,
  descendingMainCabinFilter, 
  ascendingFirstClassFilter, 
  descendingFirstClassFilter} from '../../action/flight-actions' 
import {
  Col,
  Row,
  Grid,
  Panel,
  Button,
  ButtonGroup} from 'react-bootstrap'
import * as utils from '../../lib/utils'

class FlightItem extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      flights: this.props.flights,
      firstClassFilter: 0,
      mainCabinFilter: 0,
      departureTimeFilter: 0,
    }

  }

  render(){
    return(
      <div className="flight-item">
      {console.log('successfully transferred props into flight-item', this.props.flights)}
      {this.props.flights.length ? 
        <Grid>
          <Panel>
            <Row className="show-grid">
              <Col sm={6} md={3}>Trip</Col>
              <Col sm={6} md={2}>Flight Number</Col>
              <Col sm={6} md={2}>
              {console.log('props in flight item',this.props.flights)}
                <Button 
                  onClick={() => this.props.ascendingFirstClassFilter(this.props.flights)}> 
                  First Class</Button>
                </Col>
              <Col sm={6} md={2}><Button>Main Cabin</Button></Col>
              <Col sm={6} md={2}><Button>Departure Time:</Button></Col>
            </Row>
          </Panel>
          <Panel>
            {this.props.flights.map(flight => {
              return(
                <Row className="show-grid" key={flight.flightNum}>
                  <Col sm={6} md={3}>{flight.departure} &rarr; {flight.destination}</Col>
                  <Col sm={6} md={2}>{flight.flightNum}</Col>
                  <Col sm={6} md={2}>${flight.firstClassPrice}</Col>
                  <Col sm={6} md={2}>${flight.standardClassPrice}</Col>
                  <Col sm={6} md={2}>{flight.departureTime}</Col>
                </Row>
              )
            })
            }
      
          </Panel>
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

let mapDispatchToProps = dispatch => ({
  ascendingFirstClassFilter: flights => dispatch(ascendingFirstClassFilter(flights)),
  descendingFirstClassFilter: flights => dispatch(descendingFirstClassFilter(flights)),
  ascendingMainCabinClassFilter: flights => dispatch(ascendingMainCabinClassFilter(flights)),
  descendingMainCabinClassFilter: flights => dispatch(descendingMainCabinClassFilter(flights)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightItem)
