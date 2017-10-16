import React from 'react';
import { Card, CardBlock, Col, Collapse, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink, Row } from '../../../../src/components';

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
        <CardBlock>
          <h4>Full Width Inverse Toggleable</h4>
          <Navbar dark>
            <NavbarToggler onClick={this.toggleNavbar} right />
            <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
              <NavbarBrand href="/">reactstrap</NavbarBrand>
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
        </CardBlock>

        <CardBlock>
          <Navbar light toggleable className="mb-3">
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/">reactstrap</NavbarBrand>
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
        </CardBlock>
      </Card>
    );
  }
}

export default UiNavbar;
