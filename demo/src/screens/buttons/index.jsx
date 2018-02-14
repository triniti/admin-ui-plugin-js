import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, ButtonGroup, Card, CardBody, CardHeader, CardTitle, Checkbox, Col, Form, FormGroup, Icon, Label, PageActionButton, PageActions, Radio, Row, Screen, Switch } from '../../../../src/components';

import EnvelopeIcon from '../../assets/img/svg/icon/fa-envelope.svg';

class UiButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="buttons" />}
        sidenavHeader
        header="Buttons"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="button0">
            <CardHeader>Brand</CardHeader>
            <CardBody>
              <Button>default</Button>
              <Button outline>outline</Button>
              <Button color="primary">primary</Button>
              <Button color="primary" outline>primary</Button>
              <Button color="secondary">secondary</Button>
              <Button color="secondary" outline>secondary</Button>
            </CardBody>
          </Card>,

          <Card key="button1">
            <CardHeader>Solid
              <span>
                <Button color="hover-bg">hover-bg</Button>
                <Button>default</Button>
              </span>
            </CardHeader>
            <CardBody>
              <Button>default</Button>
              <Button color="primary">primary</Button>
              <Button color="secondary">secondary</Button>
              <Button color="warning">warning</Button>
              <Button color="danger">danger</Button>
              <Button color="light">light</Button>
              <Button color="dark">dark</Button>
              <Button color="link">link</Button>
              <Button color="link-bg">link-bg</Button>
              <Button color="hover">hover</Button>
              <Button color="hover-bg">hover-bg</Button>
            </CardBody>
          </Card>,

          <Card key="button2">
            <CardHeader>
              <span>Solid radius="round"</span>
              <Button outline radius="round" color="link">outline link</Button>
            </CardHeader>
            <CardBody>
              <Button radius="round">default</Button>
              <Button color="primary" radius="round">primary</Button>
              <Button color="secondary" radius="round">secondary</Button>
              <Button color="warning" radius="round">warning</Button>
              <Button color="danger" radius="round">danger</Button>
              <Button color="light" radius="round">light</Button>
              <Button color="dark" radius="round">dark</Button>
            </CardBody>
          </Card>,

          <Card key="button3">
            <CardHeader>
              <span>Solid radius="none"</span>
              <Button outline radius="none" color="link">outline link</Button>
            </CardHeader>
            <CardBody>
              <Button radius="none">default</Button>
              <Button color="primary" radius="none">primary</Button>
              <Button color="secondary" radius="none">secondary</Button>
              <Button color="warning" radius="none">warning</Button>
              <Button color="danger" radius="none">danger</Button>
              <Button color="light" radius="none">light</Button>
              <Button color="dark" radius="none">dark</Button>
            </CardBody>
          </Card>,

          <Card key="button4">
            <CardHeader>
            Outline
              <Button color="hover" radius="round">hover</Button>
            </CardHeader>
            <CardBody>
              <Button outline>default</Button>
              <Button outline color="primary">primary</Button>
              <Button outline color="secondary">secondary</Button>
              <Button outline color="warning">warning</Button>
              <Button outline color="danger">danger</Button>
              <Button outline color="light">light</Button>
              <Button outline color="dark">dark</Button>
              <Button outline color="link">link</Button>
            </CardBody>
            <CardBody>
              <Button outline radius="round">default</Button>
              <Button outline radius="round" color="primary">primary</Button>
              <Button outline radius="round" color="secondary">secondary</Button>
              <Button outline radius="round" color="warning">warning</Button>
              <Button outline radius="round" color="danger">danger</Button>
              <Button outline radius="round" color="light">light</Button>
              <Button outline radius="round" color="dark">dark</Button>
            </CardBody>
            <CardBody>
              <Button outline radius="none">default</Button>
              <Button outline radius="none" color="primary">primary</Button>
              <Button outline radius="none" color="secondary">secondary</Button>
              <Button outline radius="none" color="warning">warning</Button>
              <Button outline radius="none" color="danger">danger</Button>
              <Button outline radius="none" color="light">light</Button>
              <Button outline radius="none" color="dark">dark</Button>
            </CardBody>
          </Card>,

          <Card key="button5">
            <CardHeader>
            OutlineText
            </CardHeader>
            <CardBody>
              <ButtonGroup>
                <Button outlineText size="lg">default</Button>
                <Button outlineText color="primary" size="lg">primary</Button>
                <Button outlineText color="secondary" size="lg">secondary</Button>
                <Button outlineText color="warning" size="lg">warning</Button>
                <Button outlineText color="danger" size="lg">danger</Button>
                <Button outlineText color="dark" size="lg">dark</Button>
              </ButtonGroup>
            </CardBody>
            <CardBody>
              <Button outlineText>default</Button>
              <Button outlineText color="primary">primary</Button>
              <Button outlineText color="secondary">secondary</Button>
              <Button outlineText color="warning">warning</Button>
              <Button outlineText color="danger">danger</Button>
              <Button outlineText color="dark">dark</Button>
            </CardBody>
            <CardBody>
              <Button outlineText size="sm" radius="round">default</Button>
              <Button outlineText color="primary" size="sm" radius="round">primary</Button>
              <Button outlineText color="secondary" size="sm" radius="round">secondary</Button>
              <Button outlineText color="warning" size="sm" radius="round">warning</Button>
              <Button outlineText color="danger" size="sm" radius="round">danger</Button>
              <Button outlineText color="dark" size="sm" radius="round">dark</Button>
            </CardBody>
          </Card>,

          <Card key="button6">
            <CardHeader>Sizes</CardHeader>
            <CardBody>
              <div>
                <Button color="primary" size="sm">Size sm</Button>
                <Button size="sm">Size sm</Button>
              </div>
              <div>
                <Button color="primary">Default</Button>
                <Button>Default</Button>
              </div>
              <div>
                <Button color="primary" size="lg">Size lg</Button>
                <Button outline size="lg">Size lg</Button>
              </div>
              <div>
                <Button color="primary" size="xl">Size xl</Button>
                <Button outline size="xl">Size xl</Button>
                <p className="small">* Most often used in modals</p>
              </div>
            </CardBody>
          </Card>,

          <Card key="button7">
            <CardHeader>Block Level</CardHeader>
            <CardBody>
              <Button color="primary" size="lg" block>Block level button</Button>
              <Button size="lg" block>Block level button</Button>
            </CardBody>
          </Card>,

          <Card key="button8">
            <CardHeader>Active State</CardHeader>
            <CardBody>
              <Row>
                <Col sm="6">
                  <Button active>Default</Button>
                  <Button outline active>Outline</Button>
                  <Button color="primary" active>Primary</Button>
                  <Button color="secondary" active>Secondary</Button>
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="button9">
            <CardHeader>Disabled State</CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <Button disabled>Default</Button>
                  <Button disabled outline>Outline</Button>
                  <Button color="primary" disabled>Primary</Button>
                  <Button color="secondary" disabled>Secondary</Button>
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="button10">
            <CardHeader>
            Checkbox and Radio Buttons (Stateful Buttons)
              <ButtonGroup>
                <Button outline size="sm">5</Button>
                <Button outline size="sm">6</Button>
                <Button outline size="sm">7</Button>
              </ButtonGroup>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12" sm="6">
                  <CardTitle tag="h4">Radio Buttons default</CardTitle>
                  <ButtonGroup className="mb-2">
                    <Button

                      onClick={() => this.onRadioBtnClick(1)}
                      active={this.state.rSelected === 1}
                      radius="round"
                    >One
                    </Button>
                    <Button

                      onClick={() => this.onRadioBtnClick(2)}
                      active={this.state.rSelected === 2}
                      radius="round"
                    >Two
                    </Button>
                    <Button

                      onClick={() => this.onRadioBtnClick(3)}
                      active={this.state.rSelected === 3}
                      radius="round"
                    >Three
                    </Button>
                  </ButtonGroup>

                  <CardTitle tag="h4">Radio Buttons outline</CardTitle>
                  <ButtonGroup className="mb-2">
                    <Button
                      onClick={() => this.onRadioBtnClick(1)}
                      active={this.state.rSelected === 1}
                      size="sm"
                      outline
                    >One
                    </Button>
                    <Button
                      onClick={() => this.onRadioBtnClick(2)}
                      active={this.state.rSelected === 2}
                      size="sm"
                      outline
                    >Two
                    </Button>
                    <Button
                      onClick={() => this.onRadioBtnClick(3)}
                      active={this.state.rSelected === 3}
                      size="sm"
                      outline
                    >Three
                    </Button>
                  </ButtonGroup>

                  <CardTitle tag="h4">Radio Buttons outline secondary</CardTitle>
                  <ButtonGroup className="mb-2">
                    <Button
                      outline
                      onClick={() => this.onRadioBtnClick(1)}
                      active={this.state.rSelected === 1}
                      color="secondary"
                      radius="round"
                      size="sm"
                    >One
                    </Button>
                    <Button
                      outline
                      onClick={() => this.onRadioBtnClick(2)}
                      active={this.state.rSelected === 2}
                      color="secondary"
                      radius="round"
                      size="sm"
                    >Two
                    </Button>
                    <Button
                      outline
                      onClick={() => this.onRadioBtnClick(3)}
                      active={this.state.rSelected === 3}
                      color="secondary"
                      radius="round"
                      size="sm"
                    >Three
                    </Button>
                  </ButtonGroup>

                  <CardTitle tag="h4">Radio Buttons outlineText</CardTitle>
                  <ButtonGroup className="mb-2">
                    <Button
                      outlineText
                      onClick={() => this.onRadioBtnClick(1)}
                      active={this.state.rSelected === 1}
                      color="primary"
                      size="sm"
                    >Save
                    </Button>
                    <Button
                      outlineText
                      onClick={() => this.onRadioBtnClick(2)}
                      active={this.state.rSelected === 2}
                      size="sm"
                    >N/A
                    </Button>
                    <Button
                      outlineText
                      onClick={() => this.onRadioBtnClick(3)}
                      active={this.state.rSelected === 3}
                      color="danger"
                      size="sm"
                    >Delete
                    </Button>
                  </ButtonGroup>

                  <p className="text-muted">Selected: <span className="text-info">{this.state.rSelected}</span></p>

                </Col>
                <Col xs="12" sm="6">
                  <CardTitle tag="h4">Checkbox Buttons</CardTitle>
                  <ButtonGroup className="mb-2">
                    <Button
                      onClick={() => this.onCheckboxBtnClick(1)}
                      active={this.state.cSelected.includes(1)}
                    >One
                    </Button>
                    <Button
                      onClick={() => this.onCheckboxBtnClick(2)}
                      active={this.state.cSelected.includes(2)}
                    >Two
                    </Button>
                    <Button
                      onClick={() => this.onCheckboxBtnClick(3)}
                      active={this.state.cSelected.includes(3)}
                    >Three
                    </Button>
                  </ButtonGroup>

                  <CardTitle tag="h4">Checkbox Buttons "outline"</CardTitle>
                  <ButtonGroup className="mb-2">
                    <Button
                      outline
                      onClick={() => this.onCheckboxBtnClick(1)}
                      active={this.state.cSelected.includes(1)}
                    >One
                    </Button>
                    <Button
                      outline
                      onClick={() => this.onCheckboxBtnClick(2)}
                      active={this.state.cSelected.includes(2)}
                    >Two
                    </Button>
                    <Button
                      outline
                      onClick={() => this.onCheckboxBtnClick(3)}
                      active={this.state.cSelected.includes(3)}
                    >Three
                    </Button>
                  </ButtonGroup>

                  <p className="text-muted">
                  Selected:
                    <span className="text-info">
                      {JSON.stringify(this.state.cSelected)}
                    </span>
                  </p>
                </Col>
              </Row>
            </CardBody>
          </Card>,

          <Card key="button11">
            <CardHeader>
            Switch Component
              <span>
                <Button size="sm" outline radius="round" onClick={() => this.onCheckboxBtnClick(4)} active={this.state.cSelected.includes(4)}>Check Button</Button>
                <Button size="sm" outline radius="round" onClick={() => this.onRadioBtnClick(4)} active={this.state.rSelected === 4}>Radio Button</Button>
                <Form>
                  <FormGroup inline>
                    <Switch id="toggler0" />
                  </FormGroup>
                </Form>
              </span>
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup inline>
                  <Label for="toggler1">size="xs"</Label>
                  <Switch id="toggler1" size="xs" value="on" />

                  <Label for="toggler2" className="ml-4">size="sm"</Label>
                  <Switch id="toggler2" size="sm" />

                  <Label for="toggler3" strong className="ml-4">default</Label>
                  <Switch id="toggler3" />

                  <Label for="toggler4" className="ml-4">size="md"</Label>
                  <Switch id="toggler4" size="md" />

                  <Label for="toggler5" className="ml-4">size="lg"</Label>
                  <Switch id="toggler5" size="lg" />

                </FormGroup>
              </Form>
            </CardBody>
          </Card>,

          <Card key="button12">
            <CardHeader>
            Radio Component
              <Form>
                <FormGroup inline>
                  <Label check className="mr-3" strong>
                    <Radio size="sm" type="radio" name="toggler11" id="toggler11" onClick={() => this.onRadioBtnClick(11)} />
                  Yes
                  </Label>

                  <Label check className="mr-3" strong>
                    <Radio size="sm" type="radio" name="toggler11" id="toggler12" onClick={() => this.onRadioBtnClick(12)} />
                  No
                  </Label>

                  <Label check className="mr-3" strong>
                    <Radio size="sm" type="radio" name="toggler11" id="toggler13" onClick={() => this.onRadioBtnClick(13)} />
                  Maybe
                  </Label>
                </FormGroup>
              </Form>
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup inline>

                  <Label check className="mr-4">
                    <Radio size="xs" type="checkbox" name="toggler6" id="toggler6" />
                  size="xs"
                  </Label>

                  <Label check className="mr-4">
                    <Radio size="sm" type="checkbox" name="toggler7" id="toggler7" />
                  size="sm"
                  </Label>

                  <Label check className="mr-4" strong>
                    <Radio type="checkbox" name="toggler8" id="toggler8" />
                default
                  </Label>

                  <Label check className="mr-4">
                    <Radio size="md" type="checkbox" name="toggler9" id="toggler9" />
                  size="md"
                  </Label>

                  <Label check className="mr-4">
                    <Radio size="lg" type="checkbox" name="toggler10" id="toggler10" />
                  size="lg"
                  </Label>

                </FormGroup>
              </Form>
            </CardBody>
          </Card>,

          <Card key="button13">
            <CardHeader>
            Checkbox Component
              <Form>
                <FormGroup check inline>
                  <Label className="mr-3">
                    <Checkbox size="sm" name="toggler14" id="toggler14" onClick={() => this.onCheckboxBtnClick(14)} />
                Maybe
                  </Label>
                </FormGroup>
              </Form>
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup inline>
                  <Label className="mr-4">
                    <Checkbox size="xs" name="toggler15" id="toggler15" />
                size="xs"
                  </Label>

                  <Label className="mr-4">
                    <Checkbox size="sm" name="toggler16" id="toggler16" />
                size="sm"
                  </Label>

                  <Label className="mr-4" strong>
                    <Checkbox name="toggler17" id="toggler17" />
                default
                  </Label>

                  <Label className="mr-4" strong>
                    <Checkbox size="md" name="toggler18" id="toggler18" />
                size="md"
                  </Label>

                  <Label className="mr-4" strong>
                    <Checkbox size="lg" name="toggler19" id="toggler19" />
                size="lg"
                  </Label>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>,

          <Card key="button14">
            <CardHeader>
            Icons radius="circle"
              <Button outline color="link" radius="circle">
                <Icon imgSrc="close" />
              </Button>
            </CardHeader>
            <CardBody>
              <Button color="hover" radius="circle">×</Button>
              <Button outline color="link" radius="circle">×</Button>
              <Button radius="circle" color="link-bg">
                <Icon imgSrc="close" alt="x" />
              </Button>
              <Button outline radius="circle" size="sm">
                <Icon imgSrc="close" alt="x" />
              </Button>
              <Button radius="circle">
                <Icon imgSrc="close" alt="x" />
              </Button>
              <Button outline radius="none" size="lg">
                <Icon imgSrc="close" alt="x" />
              </Button>
              <Button radius="round" outline>
                <Icon imgSrc="close" alt="x" /> <span>Close Me Please</span>
              </Button>
              <Button outline radius="round" size="sm">
              × <span>Close Me Please</span>
              </Button>
              <Button radius="round" size="sm">
              × <span>Close Me Please</span>
              </Button>
            </CardBody>
          </Card>,
      ]}
      />
    );
  }
}

export default UiButtons;
