import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Col, DropdownToggle, DropdownMenu, DropdownItem, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupDropdown, InputGroupText, Row, Screen } from '../../../../src/components';

class UiInputGroup extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
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
            <CardHeader>Standard Form</CardHeader>
            <CardBody indent>
              <Row>
                <Col>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input placeholder="username" />
                  </InputGroup>

                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Check it out" />
                  </InputGroup>

                  <InputGroup>
                    <Input placeholder="username" />
                    <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
                  </InputGroup>

                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>$</InputGroupText>
                      <InputGroupText>$</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Dolla dolla billz yo!" />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>$</InputGroupText>
                      <InputGroupText>$</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>

                  <InputGroup size="lg">
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input placeholder="Amount" type="number" step="1" />
                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                  </InputGroup>

                  <InputGroup>
                    <InputGroupAddon addonType="prepend">To the Left!</InputGroupAddon>
                    <Input />
                  </InputGroup>

                  <InputGroup size="sm">
                    <Input />
                    <InputGroupAddon addonType="append">To the Right!</InputGroupAddon>
                  </InputGroup>

                  <InputGroup>
                    <InputGroupAddon addonType="prepend">To the Left!</InputGroupAddon>
                    <Input placeholder="and..." />
                    <InputGroupAddon addonType="append">To the Right!</InputGroupAddon>
                  </InputGroup>

                  <InputGroup>
                    <InputGroupAddon addonType="prepend"><Button outline color="secondary">I'm a button</Button></InputGroupAddon>
                    <Input />
                  </InputGroup>

                  <InputGroup>
                    <Input />
                    <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                      <DropdownToggle caret color="secondary">
                    Button Dropdown
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </InputGroupButtonDropdown>
                  </InputGroup>

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
                    <InputGroupAddon addonType="append"><Button color="secondary">I'm a button</Button></InputGroupAddon>
                  </InputGroup>

                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <Button color="danger">To the Left!</Button>
                    </InputGroupAddon>
                    <Input placeholder="and..." />
                    <InputGroupAddon addonType="append">
                      <Button color="success">To the Right!</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="imput2" className="mb-0">
            <CardHeader fullWidth>Form theme="white" on BG Color</CardHeader>
            <CardBody className="bg-light" main>
              <Row>
                <Col>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend"><Button color="secondary">I'm a button</Button></InputGroupAddon>
                    <Input theme="white" />
                  </InputGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>,
      ]}
      />
    );
  }
}

export default UiInputGroup;
