import React, { Component } from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, ButtonDropdown, Card, CardBody, CardHeader, Collapse, DropdownItem, Dropdown, DropdownMenu, DropdownToggle, Icon, Screen, Table } from '../../../../src/components';

class UiButtonDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.toggleCode2 = this.toggleCode2.bind(this);
    this.toggleCode3 = this.toggleCode3.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpen2: false,
      dropdownOpen3: false,
      collapseCode1: false,
      collapseCode2: false,
      collapseCode3: false
    };
  }

  toggle1() {
    this.setState({ dropdownOpen1: !this.state.dropdownOpen1 });
  }

  toggle2() {
    this.setState({ dropdownOpen2: !this.state.dropdownOpen2 });
  }

  toggle3() {
    this.setState({ dropdownOpen3: !this.state.dropdownOpen3 });
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  toggleCode2() {
    this.setState({ collapseCode2: !this.state.collapseCode2 });
  }

  toggleCode3() {
    this.setState({ collapseCode3: !this.state.collapseCode3 });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="button-dropdowns" />}
        sidenavHeader
        header="Button Dropdowns"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[

          <Card key="buttondropdown1">
            <CardHeader>
              ButtonDropdown
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
<code>{`import React from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from '@triniti/admin-ui-plugin/components';

Example extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }


  render() {
    return (
    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="mb-4">
      <DropdownToggle caret outline color="light">
        Button Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    );
  }
}`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody indent>
              <ButtonDropdown isOpen={this.state.dropdownOpen1} toggle={this.toggle1} className="mb-4">
                <DropdownToggle caret outline color="light">
                  Button Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>First Action</DropdownItem>
                  <DropdownItem>Another Button</DropdownItem>
                  <DropdownItem>Third One</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </CardBody>
          </Card>,

          <Card key="buttondropdown2">
            <CardHeader>
              Full Width ButtonDropdown
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode2} active={this.state.collapseCode2}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode2}>
              <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
<code>{`import React from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from '@triniti/admin-ui-plugin/components';

Example extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }


  render() {
    return (
    <ButtonDropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2} className="mb-4 w-100">
      <DropdownToggle caret outline color="light" size="lg" className="justify-content-between w-100">
        <span className="ml-auto mr-auto">Button Dropdown</span>
      </DropdownToggle>
      <DropdownMenu right arrow="right">
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    );
  }
}`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody indent>
              <ButtonDropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2} className="mb-4 w-100">
                <DropdownToggle caret outline size="lg" color="light" className="justify-content-between w-100">
                  <span className="ml-auto mr-auto">Button Dropdown</span>
                </DropdownToggle>
                <DropdownMenu right arrow="right">
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </CardBody>
          </Card>,

          <Card key="buttondropdown3">
            <CardHeader>
              ButtonDropdown with Icon & Arrows
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode3} active={this.state.collapseCode3}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode3}>
              <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
<code>{`import React from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from '@triniti/admin-ui-plugin/components';

Example extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }


  render() {
    return (
    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle outline radius="circle" color="hover">
        <Icon imgSrc="more-vertical" alt="more" size="md" />
      </DropdownToggle>
      <DropdownMenu arrow="left">
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    );
  }
}`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody indent>
              <ButtonDropdown isOpen={this.state.dropdownOpen3} toggle={this.toggle3}>
                <DropdownToggle outline radius="circle" color="hover">
                  <Icon imgSrc="more-vertical" alt="more" size="md" />
                </DropdownToggle>
                <DropdownMenu arrow="left">
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </CardBody>
          </Card>,

          <Card key="props1">
            <CardHeader>ButtonDropdown Properties</CardHeader>
            <CardBody className="pl-5">
              Same as "Dropdown" component except wraps component in .btn-group class
            </CardBody>
          </Card>,

//   addonType: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['prepend', 'append'])]),
//   disabled: PropTypes.bool,
//   dropup: PropTypes.bool,
//   group: PropTypes.bool,
//   isOpen: PropTypes.bool,
//   nav: PropTypes.bool,

//   size: PropTypes.string,
//   tag: PropTypes.string,
//   toggle: PropTypes.func,
//   children: PropTypes.node,
//   className: PropTypes.string,
//   cssModule: PropTypes.object,
//   inNavbar: PropTypes.bool,

          <Card key="props2">
            <CardHeader>Dropdown Properties</CardHeader>
            <CardBody className="pt-3">
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
                    <th scope="row">addonType</th>
                    <td>bool</td>
                    <td></td>
                    <td>Supports either 'prepend' or 'append'</td>
                  </tr>
                  <tr>
                    <th scope="row">addonType</th>
                    <td>bool</td>
                    <td></td>
                    <td>Supports either 'prepend' or 'append'</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props3">
            <CardHeader>DropdownToggle Properties</CardHeader>
            <CardBody className="pt-3">
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
                    <th scope="row">'aria-haspopup'</th>
                    <td>bool</td>
                    <td>true</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">caret</th>
                    <td>bool</td>
                    <td></td>
                    <td>Adds caret icon</td>
                  </tr>
                  <tr>
                    <th scope="row">color</th>
                    <td>string</td>
                    <td>light</td>
                    <td>Sets button color.  Can use all button props including 'outline', 'hover', 'hover-bg', etc</td>
                  </tr>
                  <tr>
                    <th scope="row">disabled</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">nav</th>
                    <td>bool</td>
                    <td></td>
                    <td>Adds class .nav-link and sets tag to "a".  Will remove any button styles.</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props4">
            <CardHeader>DropdownMenu Properties</CardHeader>
            <CardBody className="pt-3">
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
                    <th scope="row">arrow</th>
                    <td>string</td>
                    <td></td>
                    <td>Accepts values "left" & "right". Positions an arrow on the top of the dropdown menu. Useful with small links like icons.</td>
                  </tr>
                  <tr>
                    <th scope="row">children</th>
                    <td>node</td>
                    <td>isRequired</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">className</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">flip</th>
                    <td>bool</td>
                    <td>true</td>
                    <td>Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..flip.enabled" target="_blank">flip docs.</a></td>
                  </tr>
                  <tr>
                    <th scope="row">right</th>
                    <td>bool</td>
                    <td></td>
                    <td>The default is to align the dropdown menu to the left edge of the button. Adding the prop "right" will align it to the right.</td>
                  </tr>
                  <tr>
                    <th scope="row">tag</th>
                    <td>string</td>
                    <td>div</td>
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

export default UiButtonDropdown;
