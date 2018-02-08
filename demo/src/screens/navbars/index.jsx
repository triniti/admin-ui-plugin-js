import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, Col, Collapse, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink, Row, Screen } from '../../../../src/components';

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
      <Screen
        sidenav={<Sidenav activeScreen="navbars" />}
        sidenavHeader
        header="Navbars"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="navbar1">
            <CardBody>
              <h4>Full Width Inverse Toggleable</h4>
              <Navbar color="dark" toggleable className="justify-content-start">
                <NavbarToggler onClick={this.toggleNavbar} />
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Collapse isOpen={!this.state.collapsed} navbar>
                  <Nav vertical>
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
          </Card>,

          <Card key="navbar2">
            <CardBody>
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
          </Card>,
        ]}
      />
    );
  }
}

export default UiNavbar;
