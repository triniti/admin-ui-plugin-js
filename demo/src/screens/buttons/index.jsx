import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, ButtonGroup, Card, CardBody, CardHeader, CardTitle, Checkbox, Col, Divider, Form, FormGroup, Icon, Label, PageActionButton, PageActions, Radio, Row, Screen, Switch } from '../../../../src/components';

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
              <a href="" className="text-decoration-none"><Button>href wrapped</Button></a>
            </CardBody>
          </Card>,

          <Card key="button1">
            <CardHeader>Solid
              <span>
                <Button color="hover-bg" size="sm">hover-bg</Button>
                <Button size="sm">default</Button>
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
              <Button color="icon-hover-bg">icon-hover-bg <Icon imgSrc="arrow-double-right" className="ml-1"/></Button>
              <Button color="hover-bg">hover-bg</Button>
              <Button color="link" radius="circle"><Icon imgSrc="microphone"/></Button>
              <Button color="link-bg" radius="circle"><Icon imgSrc="bolt-outline"/></Button>
              <Button color="hover" radius="circle"><Icon imgSrc="trash"/></Button>
              <Button color="icon-hover-bg" radius="circle"><Icon imgSrc="clipboard"/></Button>
              <Button color="hover-bg" radius="circle"><Icon imgSrc="microphone"/></Button>
              <Button color="hover-bg text-secondary" radius="circle"><Icon imgSrc="microphone"/></Button>
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
                    <Switch id="toggler0" size="md" />
                  </FormGroup>
                </Form>
              </span>
            </CardHeader>
            <CardBody>
              <Form className="mb-3">
                <FormGroup inline>
                  <Label for="toggler1" className="ml-4 mr-2 text-label">size="xs"</Label>
                  <Switch id="toggler1" size="xs" />

                  <Label for="toggler2" className="ml-4 mr-2 text-label">size="sm"</Label>
                  <Switch id="toggler2" size="sm" />

                  <Divider horizontal="md" className="ml-4"/>

                  <Label for="toggler3" strong>Off</Label>
                  <Switch id="toggler3" className="ml-2"/>
                  <Label for="toggler3" strong>On</Label>

                  <Divider horizontal="md" />


                  <Label for="toggler4" className="ml-4 mr-2 text-label">size="md"</Label>
                  <Switch id="toggler4" size="md" />

                  <Label for="toggler5" className="ml-4 mr-2 text-label">size="lg"</Label>
                  <Switch id="toggler5" size="lg" />

                </FormGroup>
              </Form>

              <Form>
                <FormGroup inline>
                  <Switch id="toggler1b" size="xs" label1="Disabled" label2="Enabled"></Switch>

                  <Switch id="toggler2b" size="sm" label1="Disabled" label2="Enabled" className="ml-4"></Switch>

                  <Switch id="toggler3b" label1="Disabled" label2="Enabled" className="ml-4"></Switch>

                  <Switch id="toggler4b" size="md" label1="Disabled" label2="Enabled" className="ml-4"></Switch>

                  <Switch id="toggler5b" size="lg" label1="Disabled" label2="Enabled" className="ml-4"></Switch>

                </FormGroup>
              </Form>
            </CardBody>
          </Card>,

          <Card key="button12">
            <CardHeader>
            Radio Component
              <Form>
                <FormGroup inline>
                  <FormGroup check inline>
                    <Radio size="sm" onClick={() => this.onRadioBtnClick(11)}>
                      <Label strong>Yes</Label>
                    </Radio>
                  </FormGroup>
                  <FormGroup check inline>
                    <Radio size="sm" onClick={() => this.onRadioBtnClick(11)}>
                      <Label strong>No</Label>
                    </Radio>
                  </FormGroup>
                  <FormGroup check inline>
                    <Radio size="sm" onClick={() => this.onRadioBtnClick(11)}>
                      <Label strong>Maybe</Label>
                    </Radio>
                  </FormGroup>

                </FormGroup>
              </Form>
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup inline>
                  <FormGroup check className="mr-3">
                    <Radio size="xs">size="xs"</Radio>
                  </FormGroup>

                  <FormGroup check className="mr-3">
                    <Radio size="sm">size="sm"</Radio>
                  </FormGroup>

                  <FormGroup check className="mr-3">
                    <Radio>default</Radio>
                  </FormGroup>

                  <FormGroup check className="mr-3">
                    <Radio size="md">size="md"</Radio>
                  </FormGroup>

                  <FormGroup check className="mr-3">
                    <Radio size="lg" onClick={() => this.onRadioBtnClick(12)}>size="lg"</Radio>
                  </FormGroup>

                  <FormGroup check className="mr-3">
                    <Radio disabled>disabled</Radio>
                  </FormGroup>

                  <FormGroup check className="mr-3">
                    <Radio disabled checked>disabled checked</Radio>
                  </FormGroup>

                </FormGroup>
              </Form>
            </CardBody>
          </Card>,

          <Card key="button13">
            <CardHeader>
            Checkbox Component
              <Form>
                <FormGroup check inline>
                  <Checkbox size="sm" round>Maybe</Checkbox>
                </FormGroup>
              </Form>
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup inline>
                  <FormGroup check className="mr-3">
                    <Checkbox size="xs">size="xs"</Checkbox>
                  </FormGroup>

                  <FormGroup check className="mr-3">
                    <Checkbox size="sm">size="sm"</Checkbox>
                  </FormGroup>

                  <FormGroup check className="mr-3">
                    <Checkbox>default</Checkbox>
                  </FormGroup>

                  <FormGroup check className="mr-3">
                    <Checkbox size="md">size="md"</Checkbox>
                  </FormGroup>

                  <FormGroup check className="mr-3">
                    <Checkbox size="lg">size="lg"</Checkbox>
                  </FormGroup>

                  <FormGroup check className="mr-3">
                    <Checkbox disabled>disabled</Checkbox>
                  </FormGroup>

                  <FormGroup check className="mr-3">
                    <Checkbox disabled checked>disabled checked</Checkbox>
                  </FormGroup>

                  <FormGroup check className="mr-3">
                    <Checkbox round>round</Checkbox>
                  </FormGroup>

                  <FormGroup check className="mr-3">
                    <Checkbox right>right</Checkbox>
                  </FormGroup>

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
              <Button radius="circle" color="link-bg">
                <Icon imgSrc="close" alt="x" />
              </Button>
              <Button outlineText color="secondary" radius="circle" size="md">
                <Icon imgSrc="close" alt="x" />
              </Button>
              <Button radius="circle" size="lg">
                <Icon imgSrc="close" alt="x" />
              </Button>
              <Button outline color="secondary" radius="none" size="lg">
                <Icon imgSrc="close" alt="x" className="mr-0"/>
              </Button>
              <Button radius="round" outline>
                <Icon imgSrc="close" alt="x" className="mr-2" />Close Me Please
              </Button>
              <Button outline radius="round" size="sm">
              <Icon imgSrc="delete-line" alt="x" className="mr-1" />Close Me Please
              </Button>
              <Button radius="round" size="sm">
              <Icon imgSrc="pencil" alt="x" className="mr-1" />Edit
              </Button>
            </CardBody>
          </Card>,
      ]}
      />
    );
  }
}

export default UiButtons;
