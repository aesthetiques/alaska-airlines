import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/utils'
import {
  Col,
  Row,
  Form,
  Panel,
  Button,
  FormGroup,
  FormControl,
  ControlLabel} from 'react-bootstrap'
import FlightContainer from '../flight-container'
import {flightSearchReq} from '../../action/flight-actions'
import {ascendingFirstClassFilter} from '../../action/flight-actions'

class SearchForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      departure: '',
      destination: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(e){
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e){
    e.preventDefault()
    
    this.departureCode = ''
    this.destinationCode = ''
    
    this.props.locations.map(airport => {
      if(airport.location === this.state.departure) this.departureCode = airport.abbr
      if(airport.location === this.state.destination) this.destinationCode = airport.abbr
    })

    this.props.flightSearchReq({
      departureCode: this.departureCode,
      destinationCode: this.destinationCode,
    })
  }

  render(){
    return(
      <div className="search">
        <Form 
          horizontal 
          className="search-form"
          onSubmit={this.handleSubmit}>
          <FormGroup>
            <Col 
              componentClass={ControlLabel} 
              sm={2}>
              Departing from
            </Col>
            
            <Col sm={4}>
            <FormControl
              type="text"
              name="departure"
              placeholder="home"
              onChange={this.handleChange}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col
              componentClass={ControlLabel}
              sm={2}>
              traveling to 
            </Col>
            <Col sm={4}>
              <FormControl
                type="text"
                name="destination"
                placeholder="...where no man has gone before."
                onChange={this.handleChange}/>
              </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={4}>
              <Button type="submit">search</Button>
            </Col>
          </FormGroup>
        </Form>

        {utils.renderIf(this.props.flights, <FlightContainer />)}
      </div> 
    )
  }
}

let mapStateToProps = state => ({
  locations: state.location,
  flights: state.flight.flightsOut,
})

let mapDispatchToProps = dispatch => ({
  flightSearchReq: search => dispatch(flightSearchReq(search)),
  ascendingFirstClassFilter: flights => dispatch(ascendingFirstClassFilter(flights))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)