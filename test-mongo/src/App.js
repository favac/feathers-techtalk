import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './common/NavBar'
import MainContainer from './common/MainContainer/'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <MainContainer />
        </div>
      </Router>
    )
  }
}
