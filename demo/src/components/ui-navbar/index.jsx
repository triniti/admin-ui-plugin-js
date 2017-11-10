import React from 'react';
import { Card, CardBody, Col, Collapse, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink, Row } from '../../../../src/components';

class UiNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false,
      collapsed: true,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Card>
        <CardBody spacing="lg">
          <h4>Full Width Inverse Toggleable</h4>
          <Navbar color="dark" toggleable className="justify-content-start">
            <NavbarToggler onClick={this.toggleNavbar} />
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/alerts">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </CardBody>

        <CardBody spacing="lg">
          <Navbar color="light" toggleable className="mb-3">
            <NavbarToggler onClick={this.toggle} />
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav>
                <NavItem>
                  <NavLink href="/alerts">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </CardBody>
      </Card>
    );
  }
}

export default UiNavbar;
