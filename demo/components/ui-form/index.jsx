import React from 'react';
import { Button, Card, CardBlock, CardHeader, CardTitle, Col, Input, Form, FormFeedback, FormGroup, FormText, Label, Row } from '../../../src/components';
import iconClose from 'assets/img/svg/icons/close.svg';

const UiForm = () => (
  <Card>
    <CardHeader>Standard Form</CardHeader>
    <CardBlock>
      <Row>
        <Col sm="8" md="6">
          <CardTitle tag="h2">Card Title H2 with Button
            <Button outline color="link" className={'rounded-circle'}>
              <img src={iconClose} alt="x" />
            </Button>
          </CardTitle>
          <Form>
            <FormGroup className={'has-border'}>
              <Label for="exampleEmail1">Email</Label>
              <Input type="email" name="email" id="exampleEmail1" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword1">Password</Label>
              <Input type="password" name="password" id="examplePassword1" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect1">Select</Label>
              <Input type="select" name="select" id="exampleSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti1">Select Multiple</Label>
              <Input type="select" name="selectMulti" id="exampleSelectMulti1" multiple>
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
              <Label check>
                <Input type="checkbox" />
                    Check me out
                  </Label>
            </FormGroup>

            <Button size="lg" color="primary" className={'mt-3'}>Submit</Button>
          </Form>
        </Col>
      </Row>
    </CardBlock>

    <CardHeader>Form Feedback</CardHeader>
    <CardBlock>
      <Row>
        <Col sm="6" md="4">
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
    </CardBlock>

    <CardHeader>Inline Form</CardHeader>
    <CardBlock>
      <Row>
        <Col sm="12">
          <Form inline className={'mt-3'}>
            <FormGroup>
              <Label for="exampleEmail4" hidden>Email</Label>
              <Input type="email" name="email" id="exampleEmail4" placeholder="Email" className={'round'} />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword4" hidden>Password</Label>
              <Input
                type="password" name="password" id="examplePassword4" placeholder="Password"
                className={'round'}
              />
            </FormGroup>

            <Button outline color="default" className={'round'}>Submit</Button>
          </Form>
          <CardTitle tag="h4">Card Title H4</CardTitle>
          <Form inline className={'mb-3'}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>{' '}
              <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" size="sm" />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label for="examplePassword">Password</Label>{' '}
              <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" size="sm" />
            </FormGroup>
            {' '}
            <Button color="info" size="sm">Submit</Button>
          </Form>


        </Col>
      </Row>
    </CardBlock>

    <CardHeader>Input Types</CardHeader>
    <CardBlock>
      <Row>
        <Col sm="9" md="6">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Plain Text (Static)</Label>
              <Input plaintext>Some plain text/ static value</Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleUrl">Url</Label>
              <Input type="url" name="url" id="exampleUrl" placeholder="url placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleNumber">Number</Label>
              <Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDatetime">Datetime</Label>
              <Input type="datetime" name="datetime" id="exampleDatetime" placeholder="datetime placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">Date</Label>
              <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleTime">Time</Label>
              <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleColor">Color</Label>
              <Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSearch">Search</Label>
              <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Select Multiple</Label>
              <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
                  </FormText>
            </FormGroup>
            <FormGroup check className={'mb-3'}>
              <Label check>
                <Input type="checkbox" name="radio1" id="radio1" className={'btn-radio'} />
                <Label for="radio1" />
                    Option one is this and that—be sure to include why it's great
                  </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="checkbox1" id="checkbox1" className={'btn-check'} />
                <Label for="checkbox1" />
                    Check me out
                  </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="checkbox2" id="checkbox2" className={'btn-toggle'} />
                <Label for="checkbox2" />
                    Try me for a Toggle
                  </Label>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </CardBlock>

    <CardHeader>Input Sizing</CardHeader>
    <CardBlock>
      <Row>
        <Col sm="10" md="8" lg="6" xl="4" className={'has-border'}>
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
    </CardBlock>

    <CardHeader>Form Grid</CardHeader>
    <CardBlock>
      <Row>
        <Col>
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>Password</Label>
              <Col sm={10}>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelect" sm={2}>Select</Label>
              <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
              <Col sm={10}>
                <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>Text Area</Label>
              <Col sm={10}>
                <Input type="textarea" name="text" id="exampleText" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>File</Label>
              <Col sm={10}>
                <Input type="file" name="file" id="exampleFile" />
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
                  <Label check>
                    <Input size="sm" type="radio" name="radio2" id="radio2a" className={'btn-radio'} />
                    <Label for="radio2a" />
                        Option one is this and that—be sure to include why it's great
                      </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input size="sm" type="radio" name="radio2" id="radio2b" className={'btn-radio'} />
                    <Label for="radio2b" />
                        Option two can be something else and selecting it will deselect option one
                      </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input size="sm" type="radio" name="radio2" id="radio2c" className={'btn-radio'} disabled />
                    <Label for="radio2c" />
                        Option three is disabled
                      </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 10 }}>
                <div className={'has-border border-indent'}>
                  <Label for="checkbox3">Border Indented Checkbox</Label>
                  <FormGroup check>
                    <Label check>
                      <Input size="sm" type="checkbox" name="checkbox3" id="checkbox3" className={'btn-check'} />
                      <Label for="checkbox3" />
                          Check me out
                        </Label>
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
    </CardBlock>
  </Card>
);

export default UiForm;
