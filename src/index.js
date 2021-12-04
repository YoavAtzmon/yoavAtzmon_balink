import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux"
import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from "./store/Weather"
import languageReducer from "./store/Language"
import specificReducer from "./store/Specific"
import reportWebVitals from './reportWebVitals';
import './components/styleComponents/Body/Body.css'

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    language: languageReducer,
    specific: specificReducer
  }
})


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
