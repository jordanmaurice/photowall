import React, {Component} from 'react' 
import { Button, Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler, NavbarText } from 'reactstrap';

class Header extends Component{
    render(){
        return (
<div>
  <Navbar
    color="light"
    expand="md"
    light
    container="xl"
  >
    <NavbarBrand href="/">
      photowall
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        {/* <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem> */}
      </Nav>
      <NavbarText>
        by Jordan Maurice
      </NavbarText>
    </Collapse>
  </Navbar>
</div>

        )
    }
}

export default Header