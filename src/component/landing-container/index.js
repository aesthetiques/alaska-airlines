require('./_landing.scss')
import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/utils'
import SearchForm from '../search-form'
import {PageHeader} from 'react-bootstrap'
import FlightContainer from '../flight-container'
import {fetchLocationsReq} from '../../action/location-actions'

class LandingContainer extends React.Component{
  
  render(){
    return(
    <div>
      <div className="banner">
        <h1> Alaska Airlines </h1>
      </div>
      <SearchForm/>
      <footer className="footer">
        <a href="#">Careers</a>
        <a href="#">Corporate</a>
        <a href="#">Partners</a>
        <a href="#">Contact</a>
      </footer>
    </div>
    )
  }
}

let mapStateToProps = state => ({
  locations: state.location
})

let mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)