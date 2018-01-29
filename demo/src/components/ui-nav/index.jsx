import React from 'react';
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownToggle, DropdownMenu, Nav, NavDropdown, NavItem, NavLink, Row } from '../../../../src/components';

class UiNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      dropdownOpen1: false,
      dropdownOpen2: false,
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

  render() {
    return [
      <Card key="nav1">
        <CardHeader spacing="lg" inset>List Based</CardHeader>
        <CardBody spacing="lg">
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
        <CardHeader spacing="lg" inset>Link Based</CardHeader>
        <CardBody spacing="lg">
          <Nav>
            <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>
            <NavLink href="#">Another Link</NavLink>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </Nav>
        </CardBody>
      </Card>,

      <Card key="nav3">
        <CardHeader spacing="lg" inset>List Based - Vertical</CardHeader>
        <CardBody spacing="lg">
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
        <CardHeader spacing="lg" inset>Link based - Vertical</CardHeader>
        <CardBody spacing="lg">
          <Nav vertical>
            <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>
            <NavLink href="#">Another Link</NavLink>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </Nav>
        </CardBody>
      </Card>,

      <Card key="nav5">
        <CardHeader spacing="lg" inset>Tabs</CardHeader>
        <CardBody spacing="lg">
          <Nav tabs>
            <NavItem>
              <NavLink href="#" active>Link</NavLink>
            </NavItem>
            <NavDropdown isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
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
            </NavDropdown>
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
        <CardHeader spacing="lg" inset>Underline</CardHeader>
        <CardBody spacing="lg">
          <Nav size="sm" underline>
            <NavItem>
              <NavLink href="#" active>Link</NavLink>
            </NavItem>
            <NavDropdown isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
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
            </NavDropdown>
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
        <CardHeader className="sticky-off" spacing="lg">Pills</CardHeader>
        <CardBody className="pb-5" spacing="lg">
          <Nav pills>
            <NavItem>
              <NavLink href="#" active>Active</NavLink>
            </NavItem>
            <NavDropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
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
            </NavDropdown>
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
        <CardHeader className="sticky-off" spacing="lg">Pills Small</CardHeader>
        <CardBody className="pb-5 mb-5" spacing="lg">
          <Row>
            <Col>
              <Nav pills className="nav-pills-sm">
                <NavItem>
                  <NavLink href="#" active>Active</NavLink>
                </NavItem>
                <NavDropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
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
                </NavDropdown>
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
    ];
  }
}

export default UiNav;
