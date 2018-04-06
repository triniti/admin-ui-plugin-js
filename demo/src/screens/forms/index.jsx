import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, CardTitle, Checkbox, Col, Input, Form, FormFeedback, FormGroup, FormText, Icon, Label, Radio, Row, Screen, Switch, TrinaryControl } from '../../../../src/components';

class UiForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      trinaryDefault: 0,
      trinaryCustom: 1,
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: parseInt(value, 10),
    });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="forms" />}
        sidenavHeader
        header="Forms"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="form1">
            <CardHeader>Standard Form</CardHeader>
            <CardBody indent>
              <Row>
                <Col>
                  <CardTitle tag="h2">Card Title H2 with Button
                    <Button outline color="link" radius="circle">
                      <Icon imgSrc="close" alt="x" />
                    </Button>
                  </CardTitle>
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
                      <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" />
                    Option one is this and that—be sure to include why it's great
                      </Label>
                    </FormGroup>
                      <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" />
                    Option two can be something else and selecting it will deselect option one
                      </Label>
                    </FormGroup>
                      <FormGroup check disabled>
                      <Label check>
                        <Input type="radio" name="radio1" disabled />
                      Option three is disabled
                      </Label>
                    </FormGroup>
                    </FormGroup>
                    <FormGroup check>
                      <Checkbox>Check me out</Checkbox>
                    </FormGroup>

                    <Button size="lg" color="primary" className="mt-3">Submit</Button>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="form2">
            <CardHeader>Form Feedback</CardHeader>
            <CardBody indent>
              <Row>
                <Col>
                  <CardTitle tag="h3">Card Title H3</CardTitle>
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Input with success</Label>
                      <Input valid />
                      <FormFeedback>
                      <a href="https://github.com/twbs/bootstrap/issues/23372">A bug</a> fixed in (the currently
                  unreleased) (
                      <a href="https://github.com/twbs/bootstrap/pull/23377">PR</a>
                  ) bootstrap <a href="https://github.com/twbs/bootstrap/issues/23278">v4 beta-2</a> shows invalid-feedback
                  with is-valid inputs.
                    </FormFeedback>
                      <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Input with danger</Label>
                      <Input valid={false} />
                      <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                      <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="form3">
            <CardHeader>Inline Form</CardHeader>
            <CardBody indent>
              <Row>
                <Col sm="12">
                  <Form inline>
                    <FormGroup>
                      <Label for="exampleEmail4" hidden>Email</Label>
                      <Input type="email" name="email" id="exampleEmail4" placeholder="Email" radius="round" />
                    </FormGroup>

                    <FormGroup>
                      <Label for="examplePassword4" hidden>Password</Label>
                      <Input
                      type="password"
                      name="password"
                      id="examplePassword4"
                      placeholder="Password"
                      radius="round"
                    />
                    </FormGroup>

                    <Button outline radius="round">Submit</Button>
                  </Form>
                  <CardTitle tag="h4">Card Title H4</CardTitle>
                  <Form inline className="mb-3">
                    <FormGroup>
                      <Label for="exampleEmail" className="mr-2">Email</Label>{' '}
                      <Input type="email" name="email" id="exampleEmail5" placeholder="something@idk.cool" size="sm" />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                      <Label for="examplePassword" className="mr-2">Password</Label>{' '}
                      <Input type="password" name="password" id="examplePassword5" placeholder="don't tell!" size="sm" />
                    </FormGroup>
                    {' '}
                    <Button color="info" size="sm">Submit</Button>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="form4">
            <CardHeader>Input Types</CardHeader>
            <CardBody indent>
              <Row>
                <Col>
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Plain Text (Static)</Label>
                      <Input plaintext>Some plain text/ static value</Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input type="email" name="email" id="exampleEmail2" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input type="password" name="password" id="examplePassword2" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleUrl">Url</Label>
                      <Input type="url" name="url" id="exampleUrl2" placeholder="url placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleNumber">Number</Label>
                      <Input type="number" name="number" id="exampleNumber2" placeholder="number placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleDatetime">Datetime</Label>
                      <Input type="datetime" name="datetime" id="exampleDatetime2" placeholder="datetime placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleDate">Date</Label>
                      <Input type="date" name="date" id="exampleDate2" placeholder="date placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleTime">Time</Label>
                      <Input type="time" name="time" id="exampleTime2" placeholder="time placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleColor">Color</Label>
                      <Input type="color" name="color" id="exampleColor2" placeholder="color placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSearch">Search</Label>
                      <Input type="search" name="search" id="exampleSearch2" placeholder="search placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelect2">Select</Label>
                      <Input type="select" name="select2" id="exampleSelect2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelectMulti2">Select Multiple</Label>
                      <Input type="select" name="selectMulti2" id="exampleSelectMulti2" multiple>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Text Area</Label>
                      <Input type="textarea" name="text" id="exampleText2" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleFile">File</Label>
                      <Input type="file" name="file" id="exampleFile2" />
                      <FormText color="muted">
                  This is some placeholder block-level help text for the above input.
                  It's a bit lighter and easily wraps to a new line.
                    </FormText>
                    </FormGroup>
                    <FormGroup check>
                      <Radio type="checkbox">Option one is this and that—be sure to include why it's great</Radio>
                    </FormGroup>
                    <FormGroup check>
                      <Checkbox>Check me out</Checkbox>
                    </FormGroup>
                    <FormGroup>
                      <Label className="text-label">
                      <Switch id="checkbox3"/>
                        Try me for a Toggle
                    </Label>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="form5">
            <CardHeader>Input Sizing</CardHeader>
            <CardBody indent>
              <Row>
                <Col sm="10" md="8" lg="6" xl="4" className="has-border">
                  <Form>
                    <Input placeholder="lg" size="lg" />
                    <Input placeholder="default" />
                    <Input placeholder="sm" size="sm" />
                    <Input type="select" size="lg">
                      <option>Large Select</option>
                    </Input>
                    <Input type="select">
                      <option>Default Select</option>
                    </Input>
                    <Input type="select" size="sm">
                      <option>Small Select</option>
                    </Input>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="form6">
            <CardHeader>Trinary Control - Default</CardHeader>
            <CardBody indent>
              <Row>
                <Col xs="3" md="4">
                  <Form inline className="mb-4">
                    <FormGroup>
                      <TrinaryControl name="trinaryDefault" id="trinaryDefault1" className="mr-2" onChange={this.handleChange} value={this.state.trinaryDefault} />
                      <Label>Staff</Label>
                    </FormGroup>
                  </Form>
                </Col>
                <Col xs="6">
                  <span>Selected Value: {`${this.state.trinaryDefault}`}</span>
                </Col>
              </Row>
              <Row>
                <Col xs="3" md="4">
                  <Form inline className="mb-4">
                    <FormGroup>
                      <TrinaryControl name="trinaryDefault" id="trinaryDefault2" size="sm" width="6rem" radius="round" className="mr-2" onChange={this.handleChange} value={this.state.trinaryDefault} />
                      <Label>Staff</Label>
                    </FormGroup>
                  </Form>
                </Col>
                <Col xs="6">
                  <span>Selected Value: {`${this.state.trinaryDefault}`}</span>
                </Col>
              </Row>
              <Row>
                <Col xs="3" md="4">
                  <FormGroup inline className="mb-4">
                    <TrinaryControl name="trinaryDefault" id="trinaryDefault3" size="sm" className="mr-2" onChange={this.handleChange} value={this.state.trinaryDefault} />
                    <Button color="info" size="sm">Submit</Button>
                  </FormGroup>
                </Col>
                <Col xs="6">
                  <span>Selected Value: {`${this.state.trinaryDefault}`}</span>
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="form7">
            <CardHeader>Trinary Control - Custom</CardHeader>
            <CardBody indent>
              <Row>
                <Col xs="3" md="4" className="mb-3">
                  <TrinaryControl name="trinaryCustom" unsetText="Any User" trueText="Is Staff" falseText="Non Staff" radius="round" size="sm" width="105px" value={this.state.trinaryCustom} onChange={this.handleChange} />
                </Col>
                <Col xs="6">
                  <span>Selected Value: {`${this.state.trinaryCustom}`}</span>
                </Col>
              </Row>
              <Row>
                <Col xs="3" md="4">
                  <FormGroup disabled inline>
                    <Label check className="mr-2">Disabled</Label>
                    <TrinaryControl disabled name="trinaryCustom" unsetText="Any User" trueText="Is Staff" falseText="Non Staff" radius="none" width="120px" value={this.state.trinaryCustom} onChange={this.handleChange} />
                  </FormGroup>
                </Col>
                <Col xs="6">
                  <span>Selected Value: {`${this.state.trinaryCustom}`}</span>
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="form8">
            <CardHeader>Form Grid</CardHeader>
            <CardBody indent>
              <Row>
                <Col>
                  <Form>
                    <FormGroup row>
                      <Label for="exampleEmail" sm={2}>Email</Label>
                      <Col sm={10}>
                      <Input type="email" name="email" id="exampleEmail3" placeholder="with a placeholder" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="examplePassword" sm={2}>Password</Label>
                      <Col sm={10}>
                      <Input type="password" name="password" id="examplePassword3" placeholder="password placeholder" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleSelect3" sm={2}>Select</Label>
                      <Col sm={10}>
                      <Input type="select" name="select3" id="exampleSelect3">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleSelectMulti3" sm={2}>Select Multiple</Label>
                      <Col sm={10}>
                      <Input type="select" name="selectMulti3" id="exampleSelectMulti3" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleSelectMulti" sm={2}>Disabled</Label>
                      <Col sm={10}>
                      <Input disabled type="textarea" name="text" id="disabledText3" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleSelectMulti" sm={2}>Readonly</Label>
                      <Col sm={10}>
                      <Input readOnly="readonly" type="textarea" name="text" id="readonlyText3" rows="5" value="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleText" sm={2}>Text Area</Label>
                      <Col sm={10}>
                      <Input type="textarea" name="text" id="exampleText3" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleFile" sm={2}>File</Label>
                      <Col sm={10}>
                      <Input type="file" name="file" id="exampleFile3" />
                      <FormText color="muted">
                      This is some placeholder block-level help text for the above input.
                      It's a bit lighter and easily wraps to a new line.
                      </FormText>
                    </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                      <legend className="col-form-legend col-sm-2">Radio Buttons</legend>
                      <Col sm={10}>
                      <FormGroup check>
                        <Radio size="sm">Option one is this and that—be sure to include why it's great</Radio>
                      </FormGroup>
                      <FormGroup check>
                        <Radio size="sm">Option two can be something else and selecting it will deselect option one</Radio>
                      </FormGroup>
                      <FormGroup check>
                        <Radio size="sm" disabled>Option three is disabled</Radio>
                      </FormGroup>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={{ size: 10 }}>
                      <div className="has-border border-indent">
                        <Label for="checkbox4" className="mb-3">Border Indented Checkbox</Label>
                        <FormGroup check>
                          <Checkbox size="sm">Check me out</Checkbox>
                        </FormGroup>
                      </div>
                    </Col>
                    </FormGroup>
                    <FormGroup check row>
                      <Col sm={{ size: 10, offset: 2 }}>
                      <Button>Submit</Button>
                    </Col>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>,
      ]}
      />
    );
  }
}

export default UiForm;
