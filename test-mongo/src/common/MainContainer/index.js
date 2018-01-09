import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Route } from 'react-router-dom'

import Dashboard from '../../routes/Dashboard'
import Menu from '../../routes/Menu'

export default class MainContainer extends Component {
  render() {
    return (
      <Container fluid>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/menu" component={Menu} />
      </Container>
    )
  }
}
