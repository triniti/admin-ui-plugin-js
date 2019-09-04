import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Col, Collapse, DropdownToggle, DropdownMenu, DropdownItem, Icon, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupText, Row, Screen, Table } from '../../../../src/components';

class UiInputGroup extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.toggleCode2 = this.toggleCode2.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
      collapseCode1: false,
      collapseCode2: false,
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen,
    });
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
        sidenav={<Sidenav activeScreen="input-groups" />}
        sidenavHeader
        header="Input Groups"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="imput1">
            <CardHeader>Standard Form
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                  <Icon imgSrc="code" size="md"/>
               </Button>
            </CardHeader>
          <Collapse isOpen={this.state.collapseCode1}>
            <CardBody className="pl-0 pr-0 bg-light">
              <pre className="pl-5 pr-3">
                <code>
                    {`
import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from '@triniti/admin-ui-plugin/input-groups';

const Example = (props) => {
  return (
      <Row>
        <Col>
          <InputGroup>
            <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
              <Button outline>Split Button</Button>
              <DropdownToggle split outline color="light" />
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
            <Input placeholder="and..." />
            <InputGroupAddon addonType="append">
              <InputGroupText>Text</InputGroupText>
              <Button color="secondary">I'm a button</Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
  );
};

export default UiInputGroup;
                  `}
              </code>
            </pre>
          </CardBody>
        </Collapse>
            <CardBody indent>
              <Row>
                <Col>
                  <InputGroup>
                    <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
                      <Button outline>Split Button</Button>
                      <DropdownToggle split outline color="light" />
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </InputGroupButtonDropdown>
                    <Input placeholder="and..." />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>Text</InputGroupText>
                      <Button color="secondary">I'm a button</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="imput2">
            <CardHeader>Form theme="white" size="sm" col xs="6" on BG Color
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode2} active={this.state.collapseCode2}>
                  <Icon imgSrc="code" size="md"/>
               </Button>
            </CardHeader>
          <Collapse isOpen={this.state.collapseCode2}>
            <CardBody className="pl-0 pr-0 bg-light">
              <pre className="pl-5 pr-3">
                <code>
                    {`
import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from '@triniti/admin-ui-plugin/input-groups';

const Example = (props) => {
  return (
      <Row>
        <Col>
          <InputGroup size="sm">
            <InputGroupAddon addonType="prepend"><Button color="secondary">I'm a button</Button></InputGroupAddon>
            <Input theme="white" />
          </InputGroup>
        </Col>
      </Row>
  );
};

export default UiInputGroup;
                  `}
              </code>
            </pre>
          </CardBody>
        </Collapse>
            <CardBody className="bg-light" indent>
              <Row>
                <Col xs="6">
                  <InputGroup size="sm">
                    <InputGroupAddon addonType="prepend"><Button color="secondary">I'm a button</Button></InputGroupAddon>
                    <Input theme="white" />
                  </InputGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="props1">
            <CardHeader>Input Group Properties</CardHeader>
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
                  <th scope="row">className</th>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">size</th>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">tag</th>
                  <td>oneOfType</td>
                  <td></td>
                  <td>([PropTypes.func, PropTypes.string])</td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,


          <Card key="props2">
            <CardHeader>Input Group Add On Properties</CardHeader>
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
                  <td>oneOf</td>
                  <td>*<i>Required</i></td>
                  <td>(['prepend', 'append'])</td>
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
                  <td></td>
                  <td>([PropTypes.func, PropTypes.string])</td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props3">
            <CardHeader>Input Group Button Properties</CardHeader>
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
                  <td>oneOf</td>
                  <td>*<i>Required</i></td>
                  <td>(['prepend', 'append'])</td>
                </tr>
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
                  <th scope="row">groupAttributes</th>
                  <td>object</td>
                  <td></td>
                  <td>only used in shorthand</td>
                </tr>
                <tr>
                  <th scope="row">groupClassName</th>
                  <td>string</td>
                  <td></td>
                  <td>only used in shorthand</td>
                </tr>
                <tr>
                  <th scope="row">tag</th>
                  <td>oneOfType</td>
                  <td></td>
                  <td>([PropTypes.func, PropTypes.string])</td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props4">
            <CardHeader>Input Group Button Dropdown Properties</CardHeader>
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
                  <td>oneOf</td>
                  <td>*<i>Required</i></td>
                  <td>(['prepend', 'append'])</td>
                </tr>
                <tr>
                  <th scope="row">children</th>
                  <td>node</td>
                  <td></td>
                  <td></td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props5">
            <CardHeader>Input Group Text Properties</CardHeader>
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
                  <th scope="row">className</th>
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
      ]}
      />
    );
  }
}

export default UiInputGroup;
