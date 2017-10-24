import React from 'react';
import { Card, CardBody, Collapse, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink } from '../../../../src/components';

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
          <h4>Full Width Inverse Expanded</h4>
          <Navbar color="faded" dark expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </CardBody>

        <CardBody spacing="lg">
          <h4>Full Width Light Collapse</h4>
          <Navbar color="faded" light>
            <NavbarBrand href="#" className="mr-auto">reactstrap</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
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
