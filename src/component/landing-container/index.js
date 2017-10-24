import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/utils'
import SearchForm from '../search-form'
import {fetchLocationsReq} from '../../action/location-actions'

class LandingContainer extends React.Component{
  
  render(){
    return(
    <div>
      <h1>Here is a thing</h1>
      <SearchForm />
    </div>
    )
  }
}

export default LandingContainer