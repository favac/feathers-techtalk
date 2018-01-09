import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Collapse,
  Nav
} from 'reactstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="md" color="primary" dark>
          <NavbarBrand href="/">UruIT's Tech Talks</NavbarBrand>
          <Collapse navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/menu" tag={Link}>
                  Menú
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
