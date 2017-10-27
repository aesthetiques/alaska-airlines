import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/utils'
import AutoComplete from 'material-ui/AutoComplete'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class AutoSuggest extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      locations: [
        'Seattle, WA',
        'Las Vegas, NV',
      ],
    }
  }

  componentWillMount(){
    console.log('props onload in autosuggest stuff',this.props.locations)
    this.locations = []
    this.props.locations.map(airport => {
      this.locations.push(airport.location)
    })
    console.log('Mapped locations:', this.locations)
  }


  render(){
    console.log(this.props.locations)
    return(
      <MuiThemeProvider>
        <AutoComplete
          floatingLabelText="place..."
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.state.locations}/>
      </MuiThemeProvider>
    )
  }
}

let mapStateToProps = state => ({
  locations: state.location
})

let mapDispatchToProps = dispatch => ({})


export default connect(mapStateToProps, mapDispatchToProps)(AutoSuggest)