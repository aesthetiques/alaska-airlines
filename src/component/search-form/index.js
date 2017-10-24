import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/utils'
import {flightSearchReq} from '../../action/flight-actions'

class SearchForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      departureCode: 'SEA',
      destinationCode: 'LAX',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    e.preventDefault()

  }

  handleSubmit(e){
    e.preventDefault()

    this.props.flightSearchReq(this.state)
    //dispatch the flightSearch
  }


  render(){
    return(
      <form 
        className="search-form"
        onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="departureCode"
          placeholder="starting location"
          onChange={this.handleChange}
          />

        <input
          type="text"
          name="destinationCode"
          placeholder="destination"
          onChange={this.handleChange}
          />
        <button label="search" type="submit">search</button>
      </form>
    )
  }
}

let mapDispatchToProps = dispatch => ({
  flightSearchReq: state => dispatch(flightSearchReq(state))
})

export default SearchForm