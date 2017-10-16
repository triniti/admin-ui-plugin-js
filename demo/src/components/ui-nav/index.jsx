import React from 'react';
import { Card, CardBlock, CardHeader, Col, DropdownItem, DropdownToggle, DropdownMenu, Nav, NavDropdown, NavItem, NavLink, Row } from '../../../../src/components';

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
    return (
      <Card>
        <CardHeader>List Based</CardHeader>
        <CardBlock>
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
        </CardBlock>

        <CardHeader>Link Based</CardHeader>
        <CardBlock>
          <Nav>
            <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another
            Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
          </Nav>
        </CardBlock>

        <CardHeader>List Based - Vertical</CardHeader>
        <CardBlock>
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
        </CardBlock>

        <CardHeader>Link based - Vertical</CardHeader>
        <CardBlock>
          <Nav vertical>
            <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another
            Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
          </Nav>
        </CardBlock>

        <CardHeader>Tabs</CardHeader>
        <CardBlock>
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
        </CardBlock>

        <CardHeader>Tabs Simple</CardHeader>
        <CardBlock>
          <Nav tabs className='tabs-simple tabs-simple-sm'>
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
        </CardBlock>

        <CardHeader className="sticky-off">Pills</CardHeader>
        <CardBlock className={'pb-5'}>
          <Nav pills>
            <NavItem>
              <NavLink href="#" active>Link</NavLink>
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
        </CardBlock>

        <CardHeader className="sticky-off">Pills Small</CardHeader>
        <CardBlock className={'pb-5 mb-5'}>
          <Row>
            <Col>
              <Nav pills className="nav-pills-sm">
                <NavItem>
                  <NavLink href="#" active>Link</NavLink>
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
        </CardBlock>
      </Card>
    );
  }
}

export default UiNav;
