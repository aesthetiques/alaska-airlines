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
  Panel,
  Button,
  ButtonGroup} from 'react-bootstrap'
import * as utils from '../../lib/utils'

class FlightItem extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      sortType: '',
    }

    this.toggleSort = this.toggleSort.bind(this)
  }

  toggleSort(){
    if(this.state.sortType === 'ascending'){
      this.setState({
        sortType: 'descending',
      })
    }else{
      this.setState({
        sortType: 'ascending',
      })
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
                <Button 
                  onClick={this.state.toggleSort} 
                  onClick={this.state.sortType === 'ascending' ? this.props.descendingFirstClass(this.props.flights) : this.props.ascendingFirstClass(this.props.flights)}>
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
  ascendingFirstClass: flights => dispatch(ascendingFirstClass(flights)),
  descendingFirstClass: flights => dispatch(descendingFirstClass(flights)),
  ascendingMainCabinClass: flights => dispatch(ascendingMainCabinClass(flights)),
  descendingMainCabinClass: flights => dispatch(descendingMainCabinClass(flights)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightItem)
