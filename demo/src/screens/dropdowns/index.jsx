import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Col, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Icon, Row, Screen, Table } from '../../../../src/components';

class UiDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      dropdownOpen: false,
      collapseCode1: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: parseInt(value, 10),
    });
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="dropdowns" />}
        sidenavHeader
        header="Dropdowns"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card>
            <CardHeader>
              Dropdown
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
             <CardBody className="pl-0 pr-0 bg-light">
              <pre className="pl-5 pr-3">
               <code>
{`import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '@triniti/admin-ui-plugin/components';

class UiDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: parseInt(value, 10),
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="mb-4">
        <DropdownToggle caret>
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
    );
  }
}`}
                   </code>
                </pre>
              </CardBody>
            </Collapse>
            <CardBody indent>
              <Row>
                <Col xs="6">
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="mb-4">
                    <DropdownToggle caret>
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
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="props1">
            <CardHeader>Dropdown Properties</CardHeader>
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
                  <th scope="row">direction</th>
                  <td>oneOf</td>
                  <td></td>
                  <td>'up', 'down', 'left', 'right'</td>
                </tr>
                <tr>
                  <th scope="row">disabled</th>
                  <td>bool</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">group</th>
                  <td>bool</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">inNavbar</th>
                  <td>bool</td>
                  <td></td>
                  <td>For Dropdown usage inside a Navbar (disables popper)</td>
                </tr>
                <tr>
                  <th scope="row">isOpen</th>
                  <td>bool</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">nav</th>
                  <td>bool</td>
                  <td></td>
                  <td>For Dropdown usage inside a Nav</td>
                </tr>
                <tr>
                  <th scope="row">tag</th>
                  <td>string</td>
                  <td>div</td>
                  <td>default: 'div' unless nav=true, then 'li'</td>
                </tr>
                <tr>
                  <th scope="row">toggle</th>
                  <td>func</td>
                  <td></td>
                  <td></td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props2">
            <CardHeader>Dropdown Toggle Properties</CardHeader>
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
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">caret</th>
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
                  <th scope="row">color</th>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">'data-toggle'</th>
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
                  <th scope="row">nav</th>
                  <td>bool</td>
                  <td></td>
                  <td>For Dropdown usage inside a Nav</td>
                </tr>
                <tr>
                  <th scope="row">tag</th>
                  <td>any</td>
                  <td></td>
                  <td>Defaults to Button component</td>
                </tr>
                <tr>
                  <th scope="row">toggle</th>
                  <td>func</td>
                  <td></td>
                  <td></td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props3">
            <CardHeader>Dropdown Menu Properties</CardHeader>
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
                  <td>*<i>Required</i></td>
                </tr>
                <tr>
                  <th scope="row">className</th>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">cssModule</th>
                  <td>object</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">flip</th>
                  <td>bool</td>
                  <td>true</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">modifiers</th>
                  <td>object</td>
                  <td></td>
                  <td>Custom modifiers that are passed to DropdownMenu.js, see <a href="https://popper.js.org/popper-documentation.html#modifiers" target="blank">https://popper.js.org/popper-documentation.html#modifiers</a></td>
                </tr>
                <tr>
                  <th scope="row">right</th>
                  <td>bool</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">tag</th>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props4">
            <CardHeader>Dropdown Item Properties</CardHeader>
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
                  <th scope="row">cssModule</th>
                  <td>object</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">children</th>
                  <td>node</td>
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
                  <th scope="row">divider</th>
                  <td>bool</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">header</th>
                  <td>bool</td>
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
                  <th scope="row">toggle</th>
                  <td>func</td>
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
      ]}
      />
    );
  }
}

export default UiDropdown;
