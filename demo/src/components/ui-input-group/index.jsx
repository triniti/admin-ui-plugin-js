import React from 'react';
import { Button, ButtonDropdown, Card, CardBody, CardHeader, Col, DropdownToggle, DropdownMenu, DropdownItem, Input, InputGroup, InputGroupAddon, InputGroupButton, Row } from '../../../../src/components';

class UiInputGroup extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Card>
        <div>
          <CardHeader spacing="lg">Standard Form</CardHeader>
          <CardBody spacing="lg">
            <Row>
              <Col sm="6">
                <InputGroup>
                  <InputGroupAddon>@</InputGroupAddon>
                  <Input placeholder="username"/>
                </InputGroup>

                <InputGroup>
                  <InputGroupAddon>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input"/>
                  </InputGroupAddon>
                  <Input placeholder="Check it out"/>
                </InputGroup>

                <InputGroup>
                  <Input placeholder="username"/>
                  <InputGroupAddon>@example.com</InputGroupAddon>
                </InputGroup>

                <InputGroup>
                  <InputGroupAddon>$</InputGroupAddon>
                  <InputGroupAddon>$</InputGroupAddon>
                  <Input placeholder="Dolla dolla billz yo!"/>
                  <InputGroupAddon>$</InputGroupAddon>
                  <InputGroupAddon>$</InputGroupAddon>
                </InputGroup>

                <InputGroup size="lg">
                  <InputGroupAddon>$</InputGroupAddon>
                  <Input placeholder="Amount" type="number" step="1"/>
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
                  <Input placeholder="and..."/>
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
                      <DropdownToggle caret outline color="inverse">
                        Button Dropdown
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </InputGroupButton>
                </InputGroup>

                <InputGroup>
                  <InputGroupButton></InputGroupButton>
                  <Input placeholder="and..."/>
                  <InputGroupButton><Button>I'm a button</Button></InputGroupButton>
                </InputGroup>
              </Col>
            </Row>
          </CardBody>
        </div>

        <CardHeader spacing="lg">White Form on BG Color</CardHeader>
        <CardBody className={'bg-light form-white'} spacing="lg">
          <Row>
            <Col sm="6">
              <InputGroup>
                <InputGroupAddon>@</InputGroupAddon>
                <Input placeholder="username"/>
              </InputGroup>

              <InputGroup>
                <InputGroupAddon>
                  <Input addon type="checkbox" aria-label="Checkbox for following text input"/>
                </InputGroupAddon>
                <Input placeholder="Check it out"/>
              </InputGroup>

              <InputGroup>
                <Input placeholder="username"/>
                <InputGroupAddon>@example.com</InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupAddon>$</InputGroupAddon>
                <InputGroupAddon>$</InputGroupAddon>
                <Input placeholder="Dolla dolla billz yo!"/>
                <InputGroupAddon>$</InputGroupAddon>
                <InputGroupAddon>$</InputGroupAddon>
              </InputGroup>

              <InputGroup size="lg">
                <InputGroupAddon>$</InputGroupAddon>
                <Input placeholder="Amount" type="number" step="1"/>
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
                <Input placeholder="and..."/>
                <InputGroupAddon>To the Right!</InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupButton><Button color="primary">I'm a button</Button></InputGroupButton>
                <Input />
              </InputGroup>

              <InputGroup>
                <Input />
                <InputGroupButton>
                  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      Button Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </InputGroupButton>
              </InputGroup>

              <InputGroup>
                <InputGroupButton></InputGroupButton>
                <Input placeholder="and..."/>
                <InputGroupButton><Button>I'm a button</Button></InputGroupButton>
              </InputGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default UiInputGroup;
