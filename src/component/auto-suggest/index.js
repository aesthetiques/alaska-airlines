import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/utils'
import Autosuggest from 'react-autosuggest'

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expression
// s#Using_Special_Characters
class AutoSuggest extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      suggestions: this.props.locations,
    }

    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
  }

  onChange(event, {newValue, method}){
    this.setState({value: newValue})
  }

  onSuggestionsFetchRequested({value}){
    this.setState({suggestions: getSuggestions(value)})
  }

  onSuggestionsClearRequested(){
    this.setState({suggestions: []})
  }

  render() {
    // const {value, suggestions} = this.state
    const inputProps = {
      placeholder: "home",
      value: this.state.value,
      onChange: this.onChange,
    }

    return (
      <Autosuggest
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={utils.getSuggestionValue}
        renderSuggestion={utils.renderSuggestion}
        inputProps={utils.inputProps}/>
      )
  }
}

let mapStateToProps = state => ({
  locations: state.location,
})

let mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AutoSuggest)