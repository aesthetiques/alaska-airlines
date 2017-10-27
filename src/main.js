import React from 'react'
require('./style/_main-style.scss')
import ReactDOM from 'react-dom'
import App from './component/app'
import { Provider } from 'react-redux'
import appCreateStore from './lib/app-create-store'

export const store = appCreateStore()

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