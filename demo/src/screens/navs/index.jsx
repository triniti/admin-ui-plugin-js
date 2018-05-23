import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Nav, NavItem, NavLink, Row, Screen, Table } from '../../../../src/components';

class UiNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.state = {
      dropdownOpen1: false,
      dropdownOpen2: false,
      dropdownOpen3: false,
      dropdownOpen4: false,
    };
  }

  toggle1() {
    this.setState({
      dropdownOpen1: !this.state.dropdownOpen1,
    });
  }

  toggle2() {
    this.setState({
      dropdownOpen2: !this.state.dropdownOpen2,
    });
  }

  toggle3() {
    this.setState({
      dropdownOpen3: !this.state.dropdownOpen3,
    });
  }

  toggle4() {
    this.setState({
      dropdownOpen4: !this.state.dropdownOpen4,
    });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="navs" />}
        sidenavHeader
        header="Navs"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="nav1">
            <CardHeader>List Based</CardHeader>
            <CardBody>
              <Nav>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>,

          <Card key="nav2">
            <CardHeader>Link Based</CardHeader>
            <CardBody>
              <Nav>
                <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>
                <NavLink href="#">Another Link</NavLink>
                <NavLink disabled href="#">Disabled Link</NavLink>
              </Nav>
            </CardBody>
          </Card>,

          <Card key="nav3">
            <CardHeader>List Based - Vertical</CardHeader>
            <CardBody>
              <Nav vertical>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>,

          <Card key="nav4">
            <CardHeader>Link based - Vertical</CardHeader>
            <CardBody>
              <Nav vertical>
                <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>
                <NavLink href="#">Another Link</NavLink>
                <NavLink disabled href="#">Disabled Link</NavLink>
              </Nav>
            </CardBody>
          </Card>,

          <Card key="nav5">
            <CardHeader>Tabs</CardHeader>
            <CardBody>
              <Nav tabs>
                <NavItem>
                  <NavLink href="#" active>Link</NavLink>
                </NavItem>
                <Dropdown nav isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
                  <DropdownToggle nav caret>
                Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>,

          <Card key="nav6">
            <CardHeader>Underline</CardHeader>
            <CardBody>
              <Nav size="sm" underline>
                <NavItem>
                  <NavLink href="#" active>Link</NavLink>
                </NavItem>
                <Dropdown nav isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
                  <DropdownToggle nav caret>
                Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Overflow on Mobile</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>,

          <Card key="nav7">
            <CardHeader className="sticky-off">Pills</CardHeader>
            <CardBody className="pb-5">
              <Nav pills>
                <NavItem>
                  <NavLink href="#" active>Active</NavLink>
                </NavItem>
                <Dropdown nav isOpen={this.state.dropdownOpen3} toggle={this.toggle3}>
                  <DropdownToggle nav caret>
                Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>,

          <Card key="nav8">
            <CardHeader className="sticky-off">Pills Small</CardHeader>
            <CardBody className="pb-5 mb-5">
              <Row>
                <Col>
                  <Nav pills className="nav-pills-sm">
                    <NavItem>
                      <NavLink href="#" active>Active</NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={this.state.dropdownOpen4} toggle={this.toggle4}>
                      <DropdownToggle nav caret>
                    Dropdown
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                      <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                  </Nav>
                  <br />
                  <br />
                  <br />
                  <br />
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="props1">
            <CardHeader>
              Nav Properties
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
                    <th scope="row">card</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">fill</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">justified</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">horizontal</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">navbar</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">pills</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">sticky</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">tabs</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">tag</th>
                    <td>oneOfType</td>
                    <td>'ul'</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">underline</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">vertical</th>
                    <td>oneOfType</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props2">
            <CardHeader>
              NavItem Properties
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
                    <th scope="row">active</th>
                    <td>bool</td>
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
                    <td>'li'</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props3">
            <CardHeader>
              NavLink Properties
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
                    <th scope="row">active</th>
                    <td>bool</td>
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
                    <th scope="row">disabled</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">href</th>
                    <td>any</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">innerRef</th>
                    <td>oneOfType</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">onClick</th>
                    <td>func</td>
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
      ]}
      />
    );
  }
}

export default UiNav;
