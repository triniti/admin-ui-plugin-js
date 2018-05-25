import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, ButtonDropdown, Card, CardBody, CardHeader, Col, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Icon, Row, Screen, Table } from '../../../../src/components';

class UiDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.toggleCode2 = this.toggleCode2.bind(this);
    this.toggleCode3 = this.toggleCode3.bind(this);
    this.toggleCode4 = this.toggleCode4.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpen1: false,
      dropdownOpen2: false,
      dropdownOpen3: false,
      collapseCode1: false,
      collapseCode2: false,
      collapseCode3: false,
      collapseCode4: false,
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

  toggleCode4() {
    this.setState({ collapseCode4: !this.state.collapseCode4 });
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
          <Card key="dropdown">
            <CardHeader>
              Dropdown
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode4} active={this.state.collapseCode4}>
                <Icon imgSrc="code" size="md" />
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode4}>
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

          <Card key="buttondropdown1">
            <CardHeader>
              ButtonDropdown
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md" />
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
}`}
                  </code>
                </pre>
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
                <Icon imgSrc="code" size="md" />
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
}`}
                  </code>
                </pre>
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
                <Icon imgSrc="code" size="md" />
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
}`}
                  </code>
                </pre>
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

          <Card key="props0">
            <CardHeader>ButtonDropdown Properties</CardHeader>
            <CardBody className="pl-5">
              Same as "Dropdown" component except wraps component in .btn-group class
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
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">addonType</th>
                    <td>oneOfType</td>
                    <td />
                    <td>'prepend', 'append'</td>
                  </tr>
                  <tr>
                    <th scope="row">children</th>
                    <td>node</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">cssModule</th>
                    <td>object</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">direction</th>
                    <td>oneOf</td>
                    <td />
                    <td>'up', 'down', 'left', 'right'</td>
                  </tr>
                  <tr>
                    <th scope="row">disabled</th>
                    <td>bool</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">group</th>
                    <td>bool</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">inNavbar</th>
                    <td>bool</td>
                    <td />
                    <td>For Dropdown usage inside a Navbar (disables popper)</td>
                  </tr>
                  <tr>
                    <th scope="row">isOpen</th>
                    <td>bool</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">nav</th>
                    <td>bool</td>
                    <td />
                    <td>For Dropdown usage inside a Nav</td>
                  </tr>
                  <tr>
                    <th scope="row">setActiveFromChild</th>
                    <td>bool</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">size</th>
                    <td>string</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">tag</th>
                    <td>string</td>
                    <td>'div'</td>
                    <td>default: 'div' unless nav=true, then 'li'</td>
                  </tr>
                  <tr>
                    <th scope="row">toggle</th>
                    <td>func</td>
                    <td />
                    <td />
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
                    <td>'true'</td>
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">caret</th>
                    <td>bool</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">children</th>
                    <td>node</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">className</th>
                    <td>string</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">color</th>
                    <td>string</td>
                    <td>'secondary'</td>
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">'data-toggle'</th>
                    <td>string</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">disabled</th>
                    <td>bool</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">nav</th>
                    <td>bool</td>
                    <td />
                    <td>For Dropdown usage inside a Nav</td>
                  </tr>
                  <tr>
                    <th scope="row">onClick</th>
                    <td>func</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">split</th>
                    <td>bool</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">tag</th>
                    <td>oneOfType</td>
                    <td />
                    <td>Defaults to Button component</td>
                  </tr>
                  <tr>
                    <th scope="row">toggle</th>
                    <td>func</td>
                    <td />
                    <td />
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
                    <td />
                    <td>*<i>Required</i></td>
                  </tr>
                  <tr>
                    <th scope="row">className</th>
                    <td>string</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">flip</th>
                    <td>bool</td>
                    <td>'true'</td>
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">modifiers</th>
                    <td>object</td>
                    <td />
                    <td>Custom modifiers that are passed to DropdownMenu.js, see <a href="https://popper.js.org/popper-documentation.html#modifiers" target="blank">https://popper.js.org/popper-documentation.html#modifiers</a></td>
                  </tr>
                  <tr>
                    <th scope="row">persist</th>
                    <td>bool</td>
                    <td />
                    <td>Persist the popper, even when closed.</td>
                  </tr>
                  <tr>
                    <th scope="row">right</th>
                    <td>bool</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">tag</th>
                    <td>string</td>
                    <td>'div'</td>
                    <td />
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
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">children</th>
                    <td>node</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">className</th>
                    <td>string</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">disabled</th>
                    <td>bool</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">divider</th>
                    <td>bool</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">header</th>
                    <td>bool</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">onClick</th>
                    <td>func</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">tag</th>
                    <td>oneOfType</td>
                    <td>'button'</td>
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">toggle</th>
                    <td>func</td>
                    <td />
                    <td />
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
