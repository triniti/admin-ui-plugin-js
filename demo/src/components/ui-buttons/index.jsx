import React from 'react';
import { Button, ButtonGroup, Card, CardBody, CardHeader, CardTitle, Checkbox, Col, FlexSpacer, Form, FormGroup, Icon, Label, PageActionButton, PageActions, Radio, Row, Switch } from '../../../../src/components';

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
      <Card>

        <div>
          <CardHeader spacing="lg" inset>Solid
            <span>
              <Button color="hover-bg">hover-bg</Button>
              <Button>default</Button>
            </span>
          </CardHeader>
          <CardBody spacing="lg">
            <Button>default</Button>
            <Button color="primary">primary</Button>
            <Button color="secondary">secondary</Button>
            <Button color="success">success</Button>
            <Button color="info">info</Button>
            <Button color="warning">warning</Button>
            <Button color="danger">danger</Button>
            <Button color="light">light</Button>
            <Button color="dark">dark</Button>
            <Button color="link">link</Button>
            <Button color="link-bg">link-bg</Button>
            <Button color="hover">hover</Button>
            <Button color="hover-bg">hover-bg</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg"><span>Solid radius="round"</span>
            <Button outline radius="round" color="link">outline link</Button>
          </CardHeader>
          <CardBody spacing="lg">
            <Button radius="round">default</Button>
            <Button color="primary" radius="round">primary</Button>
            <Button color="secondary" radius="round">secondary</Button>
            <Button color="success" radius="round">success</Button>
            <Button color="info" radius="round">info</Button>
            <Button color="warning" radius="round">warning</Button>
            <Button color="danger" radius="round">danger</Button>
            <Button color="light" radius="round">light</Button>
            <Button color="dark" radius="round">dark</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg" inset><span>Solid radius="none"</span>
            <Button outline radius="none" color="link">outline link</Button>
          </CardHeader>
          <CardBody spacing="lg">
            <Button radius="none">default</Button>
            <Button color="primary" radius="none">primary</Button>
            <Button color="secondary" radius="none">secondary</Button>
            <Button color="success" radius="none">success</Button>
            <Button color="info" radius="none">info</Button>
            <Button color="warning" radius="none">warning</Button>
            <Button color="danger" radius="none">danger</Button>
            <Button color="light" radius="none">light</Button>
            <Button color="dark" radius="none">dark</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg">Outline
            <Button color="hover" radius="round">hover</Button>
          </CardHeader>
          <CardBody spacing="lg">
            <Button outline>default</Button>
            <Button outline color="primary">primary</Button>
            <Button outline color="secondary">secondary</Button>
            <Button outline color="success">success</Button>
            <Button outline color="info">info</Button>
            <Button outline color="warning">warning</Button>
            <Button outline color="danger">danger</Button>
            <Button outline color="light">light</Button>
            <Button outline color="dark">dark</Button>
            <Button outline color="link">link</Button>
          </CardBody>
          <CardBody spacing="lg">
            <Button outline radius="round">default</Button>
            <Button outline radius="round" color="primary">primary</Button>
            <Button outline radius="round" color="secondary">secondary</Button>
            <Button outline radius="round" color="success">success</Button>
            <Button outline radius="round" color="info">info</Button>
            <Button outline radius="round" color="warning">warning</Button>
            <Button outline radius="round" color="danger">danger</Button>
            <Button outline radius="round" color="light">light</Button>
            <Button outline radius="round" color="dark">dark</Button>
          </CardBody>
          <CardBody spacing="lg">
            <Button outline radius="none">default</Button>
            <Button outline radius="none" color="primary">primary</Button>
            <Button outline radius="none" color="secondary">secondary</Button>
            <Button outline radius="none" color="success">success</Button>
            <Button outline radius="none" color="info">info</Button>
            <Button outline radius="none" color="warning">warning</Button>
            <Button outline radius="none" color="danger">danger</Button>
            <Button outline radius="none" color="light">light</Button>
            <Button outline radius="none" color="dark">dark</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg">OutlineText
          </CardHeader>
          <CardBody spacing="lg">
            <ButtonGroup>
              <Button outlineText size="lg">default</Button>
              <Button outlineText color="primary" size="lg">primary</Button>
              <Button outlineText color="secondary" size="lg">secondary</Button>
              <Button outlineText color="success" size="lg">success</Button>
              <Button outlineText color="info" size="lg">info</Button>
              <Button outlineText color="warning" size="lg">warning</Button>
              <Button outlineText color="danger" size="lg">danger</Button>
              <Button outlineText color="dark" size="lg">dark</Button>
            </ButtonGroup>
          </CardBody>
          <CardBody spacing="lg">
            <Button outlineText>default</Button>
            <Button outlineText color="primary">primary</Button>
            <Button outlineText color="secondary">secondary</Button>
            <Button outlineText color="success">success</Button>
            <Button outlineText color="info">info</Button>
            <Button outlineText color="warning">warning</Button>
            <Button outlineText color="danger">danger</Button>
            <Button outlineText color="dark">dark</Button>
          </CardBody>
          <CardBody spacing="lg">
            <Button outlineText size="sm" radius="round">default</Button>
            <Button outlineText color="primary" size="sm" radius="round">primary</Button>
            <Button outlineText color="secondary" size="sm" radius="round">secondary</Button>
            <Button outlineText color="success" size="sm" radius="round">success</Button>
            <Button outlineText color="info" size="sm" radius="round">info</Button>
            <Button outlineText color="warning" size="sm" radius="round">warning</Button>
            <Button outlineText color="danger" size="sm" radius="round">danger</Button>
            <Button outlineText color="dark" size="sm" radius="round">dark</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg" inset>Sizes</CardHeader>
          <CardBody spacing="lg">
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
        </div>

        <div>
          <CardHeader spacing="lg" inset>Block Level</CardHeader>
          <CardBody spacing="lg">
            <Button color="primary" size="lg" block>Block level button</Button>
            <Button size="lg" block>Block level button</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg" inset>Active State</CardHeader>
          <CardBody spacing="lg">
            <Row>
              <Col sm="6">
                <Button color="primary" size="lg" active>Primary link</Button>
                <Button size="lg" active>Link</Button>
              </Col>
            </Row>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg" inset>Disabled State</CardHeader>
          <CardBody spacing="lg">
            <Row>
              <Col>
                <Button color="primary" size="lg" disabled>Primary button</Button>
                <Button size="lg" disabled>Button</Button>
              </Col>
            </Row>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg" inset>Checkbox and Radio Buttons (Stateful Buttons)
            <ButtonGroup>
              <Button outline size="sm">5</Button>
              <Button outline size="sm">6</Button>
              <Button outline size="sm">7</Button>
            </ButtonGroup>
          </CardHeader>
          <CardBody spacing="lg">
            <Row>
              <Col xs="12" sm="6">
                <CardTitle tag="h4">Radio Buttons color="primary"</CardTitle>
                <ButtonGroup className="mb-2">
                  <Button
                    color="primary"
                    onClick={() => this.onRadioBtnClick(1)}
                    active={this.state.rSelected === 1}
                    radius="round"
                  >One
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => this.onRadioBtnClick(2)}
                    active={this.state.rSelected === 2}
                    radius="round"
                  >Two
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => this.onRadioBtnClick(3)}
                    active={this.state.rSelected === 3}
                    radius="round"
                  >Three
                  </Button>
                </ButtonGroup>

                <CardTitle tag="h4">Radio Buttons color="multistate"</CardTitle>
                <ButtonGroup className="mb-2">
                  <Button
                    color="multistate"
                    onClick={() => this.onRadioBtnClick(1)}
                    active={this.state.rSelected === 1}
                  >One
                  </Button>
                  <Button
                    color="multistate"
                    onClick={() => this.onRadioBtnClick(2)}
                    active={this.state.rSelected === 2}
                  >Two
                  </Button>
                  <Button
                    color="multistate"
                    onClick={() => this.onRadioBtnClick(3)}
                    active={this.state.rSelected === 3}
                  >Three
                  </Button>
                </ButtonGroup>
                <br />
                <ButtonGroup className="mb-2">
                  <Button
                    color="multistate"
                    onClick={() => this.onRadioBtnClick(1)}
                    active={this.state.rSelected === 1}
                    size="sm"
                  >One
                  </Button>
                  <Button
                    color="multistate"
                    onClick={() => this.onRadioBtnClick(2)}
                    active={this.state.rSelected === 2}
                    size="sm"
                  >Two
                  </Button>
                  <Button
                    color="multistate"
                    onClick={() => this.onRadioBtnClick(3)}
                    active={this.state.rSelected === 3}
                    size="sm"
                  >Three
                  </Button>
                </ButtonGroup>

                <CardTitle tag="h4">Radio Buttons outline</CardTitle>
                <ButtonGroup className="mb-2">
                  <Button
                    onClick={() => this.onRadioBtnClick(1)}
                    active={this.state.rSelected === 1}
                    size="sm"
                    radius="round"
                    outline
                  >One
                  </Button>
                  <Button
                    onClick={() => this.onRadioBtnClick(2)}
                    active={this.state.rSelected === 2}
                    size="sm"
                    radius="round"
                    outline
                  >Two
                  </Button>
                  <Button
                    onClick={() => this.onRadioBtnClick(3)}
                    active={this.state.rSelected === 3}
                    size="sm"
                    radius="round"
                    outline
                  >Three
                  </Button>
                </ButtonGroup>

                <CardTitle tag="h4">Radio Buttons outline</CardTitle>
                <ButtonGroup className="mb-2">
                  <Button
                    outline
                    onClick={() => this.onRadioBtnClick(1)}
                    active={this.state.rSelected === 1}
                  >One
                  </Button>
                  <Button
                    outline
                    onClick={() => this.onRadioBtnClick(2)}
                    active={this.state.rSelected === 2}
                  >Two
                  </Button>
                  <Button
                    outline
                    onClick={() => this.onRadioBtnClick(3)}
                    active={this.state.rSelected === 3}
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

                <p className="text-muted">Selected: <span className="text-danger">{this.state.rSelected}</span></p>

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
                  <span className="text-success">
                    {JSON.stringify(this.state.cSelected)}
                  </span>
                </p>
              </Col>
            </Row>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg" inset>Switch Component
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
          <CardBody spacing="lg">
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
        </div>

        <div>
          <CardHeader spacing="lg" inset>Radio Component
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
          <CardBody spacing="lg">
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
        </div>

        <div>
          <CardHeader spacing="lg" inset>Checkbox Component
            <Form>
              <FormGroup check inline>
                <Label className="mr-3">
                  <Checkbox size="sm" name="toggler14" id="toggler14" onClick={() => this.onCheckboxBtnClick(14)} />
                Maybe
                </Label>
              </FormGroup>
            </Form>
          </CardHeader>
          <CardBody spacing="lg">
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
        </div>

        <div>
          <CardHeader spacing="lg" inset>Icons radius="circle"
            <Button outline color="link" radius="circle">
              <Icon imgSrc="close" />
            </Button>
          </CardHeader>
          <CardBody spacing="lg">
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
        </div>

        <div>
          <CardHeader spacing="lg">Page Actions
            <PageActions>
              <PageActionButton text="Back" icon="back" />
              <PageActionButton text="Delete" icon="delete" />
              <PageActionButton text="Save" icon="save" />
              <PageActionButton text="save & close" iconUrl={EnvelopeIcon} onClick={() => alert('save & close!')} />
            </PageActions>
          </CardHeader>
        </div>

        <FlexSpacer height="5rem"></FlexSpacer>
      </Card>
    );
  }
}

export default UiButtons;
