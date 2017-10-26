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
      firstClassFilter: 0,
      mainCabinFilter: 0,
      departureTimeFilter: 0,
    }

    this.handleSort = this.handleSort.bind(this)
  }

  
  componentWillMount(){}
  
  handleSort(){
    this.stateProperty = this.state.firstClassFilter ? 0 : 1
    console.log('switching to:', this.stateProperty)    
    this.setState({
      firstClassFilter: this.stateProperty,
      mainCabinFilter: 0,
      departureTimeFilter: 0,
    }, function(){ 
      console.log('__NEW_SORTED_STATE', this.state)
    })    
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
                  type="submit"
                  name="firstClassFilter"
                  onClick={() => {
                    this.handleSort()
                    this.state.firstClassFilter ? 
                      this.props.ascendingFirstClassFilter(this.props.flights)
                    : this.props.descendingFirstClassFilter(this.props.flights)
                    }
                  }>First Class:</Button>
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
  flights: state.flight,
})

let mapDispatchToProps = dispatch => ({
  ascendingFirstClassFilter: flights => dispatch(ascendingFirstClassFilter(flights)),
  descendingFirstClassFilter: flights => dispatch(descendingFirstClassFilter(flights)),
  ascendingMainCabinClassFilter: flights => dispatch(ascendingMainCabinClassFilter(flights)),
  descendingMainCabinClassFilter: flights => dispatch(descendingMainCabinClassFilter(flights)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightItem)
