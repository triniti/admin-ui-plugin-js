import React from 'react';
import classnames from 'classnames';
import { Button, ButtonDropdown, Card, CardBody, CardHeader, CardText, CardTitle, Checkbox, Col, Container, DropdownItem, DropdownMenu, DropdownToggle,
  Form, FormGroup, FormText, Input, InputGroup, InputGroupButton, Label, ScreenBody, NavLink, Row, TabContent, TabPane } from '../../../../src/components';

class UiSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.state = {
      activeTab1: '1',
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
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggle1(tab1) {
    if (this.state.activeTab1 !== tab1) {
      this.setState({
        activeTab1: tab1,
      });
    }
  }


  render() {
    return (
    <ScreenBody
    tabs={[
      <NavLink href="#" className={classnames({ active: this.state.activeTab1 === '1' })} onClick={() => {this.toggle1('1');}}>Tab1</NavLink>,
      <NavLink href="#" className={classnames({ active: this.state.activeTab1 === '2' })} onClick={() => {this.toggle1('2');}}>Tab2</NavLink>,
      <NavLink href="#">Scroll</NavLink>,
      <NavLink href="#">Horiz Mobile</NavLink>,
      <NavLink disabled href="#">Disabled Link</NavLink>,
      ]
    }
    sidebar={
      <Card>
        <CardBody>
          <CardHeader subheader>Subheader Sidebar</CardHeader>
          <Row>
            <Col>
              <InputGroup>
                <Input theme="white" />
                <InputGroupButton>
                  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret color="info">
                      Dropdown
                    </DropdownToggle>
                    <DropdownMenu arrow="right" right>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </InputGroupButton>
              </InputGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    }
    body={
      <TabContent activeTab={this.state.activeTab1}>
        <TabPane tabId="1">
          <Card>
            <CardBody spacing="lg">
              <Container fluid>
                <Row>
                  <Col xs="12">
                    <Form>
                      <FormGroup>
                        <Label for="exampleEmail1">Email</Label>
                        <Input type="email" name="email" id="exampleEmail1" placeholder="with a placeholder" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword1">Password</Label>
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword1"
                          placeholder="password placeholder"
                        />
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
                            Option two can be something else
                            and selecting it will deselect option one
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
              </Container>
            </CardBody>
          </Card>
        </TabPane>
        <TabPane tabId="2">
          <Card>
            <CardBody spacing="lg">
              <Row>
                <Col sm="8" lg="12">
                  <CardTitle>Underline Tabs, Sticky Top, No Sidebar</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </TabPane>
      </TabContent>
    }
    >
    </ScreenBody>
    );
  }
}

export default UiSidebar;
