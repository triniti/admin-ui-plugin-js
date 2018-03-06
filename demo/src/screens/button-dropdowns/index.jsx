import React, { Component } from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, ButtonDropdown, Card, CardBody, CardHeader, Collapse, DropdownItem, Dropdown, DropdownMenu, DropdownToggle, Icon, Screen, Table } from '../../../../src/components';

class UiButtonDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.toggleCode2 = this.toggleCode2.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpen2: false,
      collapseCode1: false,
      collapseCode2: false
    };
  }

  toggle1() {
    this.setState({ dropdownOpen1: !this.state.dropdownOpen1 });
  }

  toggle2() {
    this.setState({ dropdownOpen2: !this.state.dropdownOpen2 });
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  toggleCode2() {
    this.setState({ collapseCode2: !this.state.collapseCode2 });
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
          <Card key="props1">
            <CardHeader>ButtonDropdown Properties</CardHeader>
            <CardBody className="pl-5">
              Same as "Dropdown" component except wraps component in .btn-group class
            </CardBody>
          </Card>,

          <Card key="props2">
            <CardHeader>DropdownToggle Properties</CardHeader>
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
                    <td>Sets button color.  Can use all button props including "outline", "hover", "hover-bg", etc</td>
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

          <Card key="buttondropdown1">
            <CardHeader>
              ButtonDropdown
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-5 bg-light">
<pre>
<code>{`import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
    <ButtonDropdown isOpen={this.state.dropdownOpen1} toggle={this.toggle1} className="mb-4">
      <DropdownToggle caret outline color="light" >
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
};`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody indent>
              <ButtonDropdown isOpen={this.state.dropdownOpen1} toggle={this.toggle1} className="mb-4">
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
            </CardBody>
          </Card>,

          <Card key="buttondropdown2">
            <CardHeader>
              ButtonDropdown with Icon & Arrows
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode2} active={this.state.collapseCode2}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode2}>
              <CardBody className="pl-5 bg-light">
<pre>
<code>{`import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
    <ButtonDropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
      <DropdownToggle outline radius="circle" color="hover">
        <Icon imgSrc="more-vertical" alt="more" size="md" />
      </DropdownToggle>
      <DropdownMenu left arrow="left">
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody indent>
              <ButtonDropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
                <DropdownToggle outline radius="circle" color="hover">
                  <Icon imgSrc="more-vertical" alt="more" size="md" />
                </DropdownToggle>
                <DropdownMenu left arrow="left">
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </CardBody>
          </Card>,
        ]}
      />
    );
  }
}

export default UiButtonDropdown;
