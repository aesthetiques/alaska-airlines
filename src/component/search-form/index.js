import React from 'react'
require('./_search-form.scss')
import {connect} from 'react-redux'
import * as utils from '../../lib/utils'
import AutoComplete from 'material-ui/AutoComplete'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
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
import {setLocationSuggestions} from '../../action/suggestion-actions'
import {fetchLocationsReq, flightSearchReq, ascendingFirstClassFilter} from '../../action/flight-actions'

class SearchForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      departure: '',
      destination: '',
      searchText: '',
      suggestions: [],
      locations: this.props.locations,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDeparture = this.handleDeparture.bind(this)
    this.handleDestination = this.handleDestination.bind(this)
  }

  handleDeparture(searchText){
    this.setState({
      departure: searchText,
    }, console.log('__DEPARTURE__:', searchText))
  }

  handleDestination(searchText){
    this.setState({
      destination: searchText,
    }, console.log('__DESTINATION__:', searchText))
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
              <MuiThemeProvider>
                <AutoComplete
                    hintText="from one journey..."
                    searchText={this.state.departure}
                    onUpdateInput={this.handleDeparture}
                    dataSource={this.props.locationSuggestions}
                    filter={AutoComplete.caseInsensitiveFilter}
                    openOnFocus={true}
                  />
              </MuiThemeProvider>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col
              componentClass={ControlLabel}
              sm={2}>
              Traveling to 
            </Col>
            <Col sm={4}>
              <MuiThemeProvider>
                <AutoComplete
                  hintText="to another.."
                  searchText={this.state.destination}
                  onUpdateInput={this.handleDestination}
                  dataSource={this.props.locationSuggestions}
                  filter={AutoComplete.caseInsensitiveFilter}
                  openOnFocus={true}
                />
              </MuiThemeProvider>
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
  flights: state.flight,
  locationSuggestions: ['Seattle, WA', 'Las Vegas, NV', 'Los Angeles, CA', 'Pheonix, AZ'],
})

let mapDispatchToProps = dispatch => ({
  flightSearchReq: search => dispatch(flightSearchReq(search)),
  setLocationSuggestions: array => dispatch(setLocationSuggestions(fetchLocationsReq())),
  ascendingFirstClassFilter: flights => dispatch(ascendingFirstClassFilter(flights))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
