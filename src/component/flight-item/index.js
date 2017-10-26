import React from 'react'
import {connect} from 'react-redux'
import {
  ascendingTimeFilter,
  descendingTimeFilter,
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
      firstClassFilter: 0,
      mainCabinFilter: 0,
      departureTimeFilter: 0,
    }

    this.handleFirstClassSort = this.handleFirstClassSort.bind(this)
    this.handleMainCabinSort = this.handleMainCabinSort.bind(this)
    this.handleDepartureTimeSort = this.handleDepartureTimeSort.bind(this)
  }

  
  componentWillMount(){}
  
  handleFirstClassSort(){
    this.stateProperty = this.state.firstClassFilter ? 0 : 1
    this.setState({
      firstClassFilter: this.stateProperty,
      mainCabinFilter: 0,
      departureTimeFilter: 0,
    }, function(){ 
      console.log('__NEW_SORTED_STATE', this.state)
    })    
  }

  handleMainCabinSort(){
    this.stateProperty = this.state.MainCabinFilter ? 0 : 1
    this.setState({
      firstClassFilter: 0,
      mainCabinFilter: this.stateProperty,
      departureTimeFilter: 0,
    }, function(){ 
      console.log('__NEW_SORTED_STATE', this.state)
    })    
  }

  handleDepartureTimeSort(){
    this.stateProperty = this.state.departureTimeFilter ? 0 : 1
    this.setState({
      firstClassFilter: 0,
      mainCabinFilter: 0,
      departureTimeFilter: this.stateProperty,
    }, () => console.log('__NEW_SORTED_STATE', this.state))    
  }

  render(){
    return(
      <div className="flight-item">
      {this.props.flights.length ? 
        <Grid>
          <Panel>
            <Row className="show-grid">
              <Col sm={6} md={3}>Trip</Col>
              <Col sm={6} md={2}>Flight Number</Col>
              <Col sm={6} md={2}>
                <Button 
                  onClick={() => {
                    this.handleFirstClassSort()
                    this.state.firstClassFilter ? 
                      this.props.ascendingFirstClassFilter(this.props.flights)
                    : this.props.descendingFirstClassFilter(this.props.flights)
                    }
                  }>First Class:</Button>
              </Col>
              <Col sm={6} md={2}>
                <Button
                  onClick={() => {
                    this.handleMainCabinSort()
                    this.state.mainCabinFilter ? 
                      this.props.ascendingMainCabinFilter(this.props.flights)
                    : this.props.descendingMainCabinFilter(this.props.flights)
                    }
                  }>Main Cabin</Button></Col>
              <Col sm={6} md={2}>
                <Button
                  onClick={() => {
                    this.handleDepartureTimeSort()
                    this.state.departureTimeFilter ? 
                      this.props.ascendingTimeFilter(this.props.flights)
                    : this.props.descendingTimeFilter(this.props.flights)
                    }
                  }>Departure Time:</Button></Col>
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
        : (this.props.flight ? 'No flights found' : undefined)
      }
      </div>

    )
  }

}

let mapStateToProps = state => ({
  flights: state.flight,
})

let mapDispatchToProps = dispatch => ({
  ascendingTimeFilter: flights => dispatch(ascendingTimeFilter(flights)),
  descendingTimeFilter: flights => dispatch(descendingTimeFilter(flights)),
  ascendingFirstClassFilter: flights => dispatch(ascendingFirstClassFilter(flights)),
  descendingFirstClassFilter: flights => dispatch(descendingFirstClassFilter(flights)),
  ascendingMainCabinFilter: flights => dispatch(ascendingMainCabinFilter(flights)),
  descendingMainCabinFilter: flights => dispatch(descendingMainCabinFilter(flights)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightItem)
