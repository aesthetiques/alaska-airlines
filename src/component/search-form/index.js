import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/utils'
import FlightContainer from '../flight-container'
import {flightSearchReq} from '../../action/flight-actions'

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
    console.log(this.state)
  }

  handleSubmit(e){
    e.preventDefault()
    
    this.departureCode = ''
    this.destinationCode = ''
    
    this.props.locations.map(flight => {
      if(flight.location === this.state.departure) this.departureCode = flight.abbr
      if(flight.location === this.state.destination) this.destinationCode = flight.abbr
    })

    this.props.flightSearchReq({
      departureCode: this.departureCode,
      destinationCode: this.destinationCode,
    })
  }

  render(){
    return(
      <div className="search">
        <form 
          className="search-form"
          onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="departure"
            placeholder="starting location"
            onChange={this.handleChange}
            />

          <input
            type="text"
            name="destination"
            placeholder="destination"
            onChange={this.handleChange}
            />
          <button label="search" type="submit">search</button>
        </form>
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
  flightSearchReq: search => dispatch(flightSearchReq(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)