import React from 'react';
import { Button, ButtonGroup, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Navbar, Row } from '../../../../src/components';

import iconClose from 'assets/img/svg/icons/close.svg';

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
          <CardHeader spacing="lg">Solid
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
          <CardHeader spacing="lg"><span>Solid radius="none"</span>
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
        </div>

        <div>
          <CardHeader spacing="lg"><span>Outline radius="round"</span>
            <Button outline radius="round" size="sm">outline round sm</Button>
          </CardHeader>
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
        </div>

        <div>
          <CardHeader spacing="lg">Outline radius="none"</CardHeader>
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
          <CardHeader spacing="lg">Sizes</CardHeader>
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
          <CardHeader spacing="lg">Block Level</CardHeader>
          <CardBody spacing="lg">
            <Button color="primary" size="lg" block>Block level button</Button>
            <Button size="lg" block>Block level button</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg">Active State</CardHeader>
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
          <CardHeader spacing="lg">Disabled State</CardHeader>
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
          <CardHeader spacing="lg">Checkbox and Radio Buttons (Stateful Buttons)
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
                <ButtonGroup className={'mb-2'}>
                  <Button
                    color="primary" onClick={() => this.onRadioBtnClick(1)}
                    active={this.state.rSelected === 1}
                  >One</Button>
                  <Button
                    color="primary" onClick={() => this.onRadioBtnClick(2)}
                    active={this.state.rSelected === 2}
                  >Two</Button>
                  <Button
                    color="primary" onClick={() => this.onRadioBtnClick(3)}
                    active={this.state.rSelected === 3}
                  >Three</Button>
                </ButtonGroup>

                <CardTitle tag="h4">Radio Buttons</CardTitle>
                <ButtonGroup className={'mb-2'}>
                  <Button
                    onClick={() => this.onRadioBtnClick(1)}
                    active={this.state.rSelected === 1}
                  >One</Button>
                  <Button
                    onClick={() => this.onRadioBtnClick(2)}
                    active={this.state.rSelected === 2}
                  >Two</Button>
                  <Button
                    onClick={() => this.onRadioBtnClick(3)}
                    active={this.state.rSelected === 3}
                  >Three</Button>
                </ButtonGroup>

                <CardTitle tag="h4">Radio Buttons outline</CardTitle>
                <ButtonGroup className={'mb-2'}>
                  <Button
                    outline onClick={() => this.onRadioBtnClick(1)}
                    active={this.state.rSelected === 1}
                  >One</Button>
                  <Button
                    outline onClick={() => this.onRadioBtnClick(2)}
                    active={this.state.rSelected === 2}
                  >Two</Button>
                  <Button
                    outline onClick={() => this.onRadioBtnClick(3)}
                    active={this.state.rSelected === 3}
                  >Three</Button>
                </ButtonGroup>
                <p className={'text-muted'}>Selected: <span className={'text-danger'}>{this.state.rSelected}</span></p>
              </Col>
              <Col xs="12" sm="6">
                <CardTitle tag="h4">Checkbox Buttons</CardTitle>
                <ButtonGroup className={'mb-2'}>
                  <Button
                    onClick={() => this.onCheckboxBtnClick(1)}
                    active={this.state.cSelected.includes(1)}
                  >One</Button>
                  <Button
                    onClick={() => this.onCheckboxBtnClick(2)}
                    active={this.state.cSelected.includes(2)}
                  >Two</Button>
                  <Button
                    onClick={() => this.onCheckboxBtnClick(3)}
                    active={this.state.cSelected.includes(3)}
                  >Three</Button>
                </ButtonGroup>

                <CardTitle tag="h4">Checkbox Buttons "outline"</CardTitle>
                <ButtonGroup className={'mb-2'}>
                  <Button
                    outline onClick={() => this.onCheckboxBtnClick(1)}
                    active={this.state.cSelected.includes(1)}
                  >One</Button>
                  <Button
                    outline onClick={() => this.onCheckboxBtnClick(2)}
                    active={this.state.cSelected.includes(2)}
                  >Two</Button>
                  <Button
                    outline onClick={() => this.onCheckboxBtnClick(3)}
                    active={this.state.cSelected.includes(3)}
                  >Three</Button>
                </ButtonGroup>

                <p className={'text-muted'}>Selected: <span
                  className={'text-success'}
                >{JSON.stringify(this.state.cSelected)}</span></p>
              </Col>
            </Row>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg">Checkbox & Radio .btn-toggle style
            <span>
              <Button size="sm" outline radius="round" onClick={() => this.onCheckboxBtnClick(4)} active={this.state.cSelected.includes(4)}>Check Button</Button>
              <Button size="sm" outline radius="round" onClick={() => this.onRadioBtnClick(4)} active={this.state.rSelected === 4}>Radio Button</Button>
              <Form>
                <FormGroup>
                  <Input type="checkbox" name="toggler0" id="toggler0" className={'btn-toggle'} />
                  <Label for="toggler0" />
                </FormGroup>
              </Form>
            </span>
          </CardHeader>
          <CardBody spacing="lg">
            <Form>
              <FormGroup>
                <Label for="toggler1">size="xs"</Label>
                <Input size="xs" type="checkbox" name="toggler1" id="toggler1" className={'btn-toggle'} />
                <Label for="toggler1" />

                <Label for="toggler2" className={'ml-4'}>size="sm"</Label>
                <Input size="sm" type="checkbox" name="toggler2" id="toggler2" className={'btn-toggle'} />
                <Label for="toggler2" />

                <Label for="toggler3" className={'ml-4'}>default</Label>
                <Input type="checkbox" name="toggler3" id="toggler3" className={'btn-toggle'} />
                <Label for="toggler3" />

                <Label for="toggler4" className={'ml-4'}>size="md"</Label>
                <Input size="md" type="checkbox" name="toggler4" id="toggler4" className={'btn-toggle'} />
                <Label for="toggler4" />

                <Label for="toggler4" className={'ml-4'}>size="lg"</Label>
                <Input size="lg" type="checkbox" name="toggler5" id="toggler5" className={'btn-toggle'} />
                <Label for="toggler5" />

              </FormGroup>
            </Form>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg">Checkbox & Radio .btn-radio style
            <Form>
              <FormGroup>
                <Input size="sm" type="checkbox" name="toggler11" id="toggler11" className={'btn-radio'} onClick={() => this.onRadioBtnClick(11)} />
                <Label for="toggler11" />
                <Label for="toggler11" className={'mr-3 mb-0'}>Yes</Label>

                <Input size="sm" type="checkbox" name="toggler12" id="toggler12" className={'btn-radio'} onClick={() => this.onRadioBtnClick(12)} />
                <Label for="toggler12" />
                <Label for="toggler12" className={'mr-3 mb-0'}>No</Label>

                <Input size="sm" type="checkbox" name="toggler13" id="toggler13" className={'btn-radio'} onClick={() => this.onRadioBtnClick(13)} />
                <Label for="toggler13" />
                <Label for="toggler13" className={'mr-3 mb-0'}>Maybe</Label>
              </FormGroup>
            </Form>
          </CardHeader>
          <CardBody spacing="lg">
            <Form>
              <FormGroup>

                <Input size="xs" type="checkbox" name="toggler6" id="toggler6" className={'btn-radio'} />
                <Label for="toggler6" />
                <Label for="toggler6" className={'mr-4'}>size="xs"</Label>

                <Input size="sm" type="checkbox" name="toggler7" id="toggler7" className={'btn-radio'} />
                <Label for="toggler7" />
                <Label for="toggler7" className={'mr-4'}>size="sm"</Label>

                <Input type="checkbox" name="toggler8" id="toggler8" className={'btn-radio'} />
                <Label for="toggler8" />
                <Label for="toggler8" className={'mr-4'}>default</Label>

                <Input size="md" type="checkbox" name="toggler9" id="toggler9" className={'btn-radio'} />
                <Label for="toggler9" />
                <Label for="toggler9" className={'mr-4'}>size="md"</Label>

                <Input size="lg" type="checkbox" name="toggler10" id="toggler10" className={'btn-radio'} />
                <Label for="toggler10" />
                <Label for="toggler10" className={'mr-4'}>size="lg"</Label>

              </FormGroup>
            </Form>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg">Checkbox & Radio .btn-check style
            <Form>
              <FormGroup>
                <Input size="sm" type="checkbox" name="toggler14" id="toggler14" className={'btn-check'} onClick={() => this.onRadioBtnClick(14)} />
                <Label for="toggler14" />
                <Label for="toggler14" className={'mr-3 mb-0'}>Maybe</Label>
              </FormGroup>
            </Form>
          </CardHeader>
          <CardBody spacing="lg">
            <Form>
              <FormGroup>
                <Input size="xs" type="checkbox" name="toggler15" id="toggler15" className={'btn-check'} />
                <Label for="toggler15" />
                <Label for="toggler15" className={'mr-4'}>size="xs"</Label>

                <Input size="sm" type="checkbox" name="toggler16" id="toggler16" className={'btn-check'} />
                <Label for="toggler16" />
                <Label for="toggler16" className={'mr-4'}>size="sm"</Label>

                <Input type="checkbox" name="toggler17" id="toggler17" className={'btn-check'} />
                <Label for="toggler17" />
                <Label for="toggler17" className={'mr-4'}>default</Label>

                <Input size="md" type="checkbox" name="toggler18" id="toggler18" className={'btn-check'} />
                <Label for="toggler18" />
                <Label for="toggler18" className={'mr-4'}>size="md"</Label>

                <Input size="lg" type="checkbox" name="toggler19" id="toggler19" className={'btn-check'} />
                <Label for="toggler19" />
                <Label for="toggler19" className={'mr-4'}>size="lg"</Label>

              </FormGroup>
            </Form>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg">Icons radius="circle"
            <Button outline color="link" radius="circle">
              <img src={iconClose} alt="x" />
            </Button>
          </CardHeader>
          <CardBody spacing="lg">
            <Button color="hover" radius="circle">×</Button>
            <Button outline color="link" radius="circle">×</Button>
            <Button radius="circle" color="link-bg">
              <img src={iconClose} alt="x" />
            </Button>
            <Button outline radius="circle" size="sm">
              <img src={iconClose} alt="x" />
            </Button>
            <Button radius="circle">
              <img src={iconClose} alt="x" />
            </Button>
            <Button outline radius="none" size="lg">
              <img src={iconClose} alt="x" />
            </Button>
            <Button radius="round" outline>
              <img src={iconClose} alt="x" /> <span>Close Me Please</span>
            </Button>
            <Button outline radius="round" size="sm">
              × <span>Close Me Please</span>
            </Button>
            <Button radius="round" size="sm">
              × <span>Close Me Please</span>
            </Button>
          </CardBody>
        </div>

      </Card>
    );
  }
}

export default UiButtons;
