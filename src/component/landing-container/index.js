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
      <PageHeader>
        <img src="/"/>
      </PageHeader>
      <SearchForm
        results={this.props.locations} />
    </div>
    )
  }
}

let mapStateToProps = state => ({
  locations: state.location
})

let mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)