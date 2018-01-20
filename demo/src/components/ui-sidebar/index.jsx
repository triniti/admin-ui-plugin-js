import React from 'react';
import { Button, ButtonDropdown, Card, CardBody, CardHeader, CardTitle, Checkbox, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupAddon, InputGroupButton, Form, FormFeedback, FormGroup, FormText, Icon, Label, Nav, NavDropdown, NavItem, NavLink, Radio, Row, Switch, TrinaryControl } from '../../../../src/components';

class UiForm extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      trinaryDefault: 0,
      trinaryCustom: 1,
      dropdownOpen: false
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: parseInt(value, 10),
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    return [
      <div className="main-content-flex-container">
        <div className="main-content-navtabs">
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
        </div>
        <div className="main-content-row">
          <div className="main-content-col">
          <Card className="mt-0">
            <CardBody spacing="lg">
              <Row>
                <Col sm="12" md="8">
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail1">Email</Label>
                      <Input type="email" name="email" id="exampleEmail1" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword1">Password</Label>
                      <Input type="password" name="password" id="examplePassword1" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelect1">Select</Label>
                      <Input type="select" name="select1" id="exampleSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelectMulti1">Select Multiple</Label>
                      <Input type="select" name="selectMulti1" id="exampleSelectMulti1" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText1">Text Area</Label>
                      <Input type="textarea" name="text" id="exampleText1" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleFile1">File</Label>
                      <Input type="file" name="file" id="exampleFile1" />
                      <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                      </FormText>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                      <legend>Radio Buttons</legend>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="radio" name="radio1" />
                          Option one is this and that—be sure to include why it's great
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="radio" name="radio1" />
                          Option two can be something else and selecting it will deselect option one
                        </Label>
                      </FormGroup>
                      <FormGroup check disabled inline>
                        <Label check>
                          <Input type="radio" name="radio1" disabled />
                            Option three is disabled
                        </Label>
                      </FormGroup>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Checkbox />
                        Check me out
                      </Label>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>
          </div>
          <div className="main-content-col main-content-sidebar">
            <Card color="transparent">
              <CardBody>
                <CardHeader subheader>Trinary Control - Default</CardHeader>
                <Row>
                  <Col>
                    <InputGroup>
                      <Input />
                      <InputGroupButton>
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                          <DropdownToggle caret>
                            Dropdown
                          </DropdownToggle>
                          <DropdownMenu arrow="right" right>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </InputGroupButton>
                    </InputGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    ];
  }
}

export default UiForm;
