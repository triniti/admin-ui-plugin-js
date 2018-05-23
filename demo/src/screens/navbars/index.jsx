import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, CardHeader, Col, Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink, Row, Screen, Table, UncontrolledDropdown } from '../../../../src/components';

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
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                        </DropdownItem>
                        <DropdownItem>
                          Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </CardBody>
          </Card>,

          <Card key="navbar2">
            <CardBody>
              <h4>Full Width Inverse Toggleable</h4>
              <Navbar dark>
                <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </CardBody>
          </Card>,

          <Card key="props1">
            <CardHeader>
              Navbar Properties
            </CardHeader>
            <CardBody>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">className</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">color</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">dark</th>
                    <td>bool</td>
                    <td></td>
                    <td>Use this prop instead of deprecated inverse</td>
                  </tr>
                  <tr>
                    <th scope="row">expand</th>
                    <td>oneOfType</td>
                    <td></td>
                    <td>Use expand instead of deprecated toggleable</td>
                  </tr>
                  <tr>
                    <th scope="row">fixed</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">full</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">light</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">role</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">sticky</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">tag</th>
                    <td>oneOfType</td>
                    <td>'span'</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props2">
            <CardHeader>
              Navbar Brand Properties
            </CardHeader>
            <CardBody>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">className</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">tag</th>
                    <td>oneOfType</td>
                    <td>'a'</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props3">
            <CardHeader>
              Navbar Toggler Properties
            </CardHeader>
            <CardBody>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">children</th>
                    <td>node</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">className</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">tag</th>
                    <td>oneOfType</td>
                    <td>'button'</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">type</th>
                    <td>string</td>
                    <td>'button'</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,
        ]}
      />
    );
  }
}

export default UiNavbar;
