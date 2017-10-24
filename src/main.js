import React from 'react'
import ReactDOM from 'react-dom'
import app from './component/app'
import { Provider } from 'react-redux'
import appCreateStore from './lib/app-create-store'

let store = appCreateStore()

class AppContainer extends React.Component{
  render(){
    return(
      <Provider store={store}> 
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('app'))