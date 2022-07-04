import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createReduxStore } from './store/store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createReduxStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

