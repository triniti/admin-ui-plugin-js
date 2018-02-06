import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, ButtonDropdown, Card, CardBody, CardHeader, Col, DropdownToggle, DropdownMenu, DropdownItem, Input, InputGroup, InputGroupAddon, InputGroupButton, Row, Screen } from '../../../../src/components';

class UiInputGroup extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
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
        <CardBody>
          <Row>
            <Col sm="6">
              <InputGroup>
                <InputGroupAddon>@</InputGroupAddon>
                <Input placeholder="username" />
              </InputGroup>

              <InputGroup>
                <InputGroupAddon>
                  <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                </InputGroupAddon>
                <Input placeholder="Check it out" />
              </InputGroup>

              <InputGroup>
                <Input placeholder="username" />
                <InputGroupAddon>@example.com</InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupAddon>$</InputGroupAddon>
                <InputGroupAddon>$</InputGroupAddon>
                <Input placeholder="Dolla dolla billz yo!" />
                <InputGroupAddon>$</InputGroupAddon>
                <InputGroupAddon>$</InputGroupAddon>
              </InputGroup>

              <InputGroup size="lg">
                <InputGroupAddon>$</InputGroupAddon>
                <Input placeholder="Amount" type="number" step="1" />
                <InputGroupAddon>.00</InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupAddon>To the Left!</InputGroupAddon>
                <Input />
              </InputGroup>

              <InputGroup size="sm">
                <Input />
                <InputGroupAddon>To the Right!</InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupAddon>To the Left!</InputGroupAddon>
                <Input placeholder="and..." />
                <InputGroupAddon>To the Right!</InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupButton><Button>I'm a button</Button></InputGroupButton>
                <Input />
              </InputGroup>

              <InputGroup>
                <Input />
                <InputGroupButton>
                  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret color="dark">
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
                </InputGroupButton>
              </InputGroup>

              <InputGroup>
                <InputGroupButton />
                <Input placeholder="and..." />
                <InputGroupButton><Button>I'm a button</Button></InputGroupButton>
              </InputGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="imput2" className="mb-0">
        <CardHeader fullWidth>White Form on BG Color</CardHeader>
        <CardBody className="bg-light form-white">
          <Row>
            <Col sm="6">
              <InputGroup>
                <InputGroupAddon>@</InputGroupAddon>
                <Input placeholder="username" theme="white" />
              </InputGroup>

              <InputGroup>
                <InputGroupAddon>
                  <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                </InputGroupAddon>
                <Input placeholder="Check it out" theme="white" />
              </InputGroup>

              <InputGroup>
                <Input placeholder="username" theme="white" />
                <InputGroupAddon>@example.com</InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupAddon>$</InputGroupAddon>
                <InputGroupAddon>$</InputGroupAddon>
                <Input placeholder="Dolla dolla billz yo!" theme="white" />
                <InputGroupAddon>$</InputGroupAddon>
                <InputGroupAddon>$</InputGroupAddon>
              </InputGroup>

              <InputGroup size="lg">
                <InputGroupAddon>$</InputGroupAddon>
                <Input placeholder="Amount" type="number" step="1" theme="white" />
                <InputGroupAddon>.00</InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupAddon>To the Left!</InputGroupAddon>
                <Input theme="white" />
              </InputGroup>

              <InputGroup size="sm">
                <Input theme="white" />
                <InputGroupAddon>To the Right!</InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupAddon>To the Left!</InputGroupAddon>
                <Input placeholder="and..." theme="white" />
                <InputGroupAddon>To the Right!</InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupButton><Button color="primary">I'm a button</Button></InputGroupButton>
                <Input theme="white" />
              </InputGroup>

              <InputGroup>
                <InputGroupButton />
                <Input placeholder="and..." theme="white" />
                <InputGroupButton><Button>I'm a button</Button></InputGroupButton>
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
