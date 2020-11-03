import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import 'bootswatch/dist/lux/bootstrap.min.css'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
