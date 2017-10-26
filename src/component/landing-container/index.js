import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/utils'
import SearchForm from '../search-form'
import {
  PageHeader,
} from 'react-bootstrap'
import FlightContainer from '../flight-container'
import {fetchLocationsReq} from '../../action/location-actions'

class LandingContainer extends React.Component{
  
  render(){
    return(
    <div>
      <PageHeader>
        <img src="/"/>
      </PageHeader>
      <SearchForm />
    </div>
    )
  }
}

export default LandingContainer