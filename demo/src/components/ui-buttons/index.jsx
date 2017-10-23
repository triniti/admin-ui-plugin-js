import React from 'react';
import { Button, ButtonGroup, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row } from '../../../../src/components';

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
          <CardHeader spacing="lg">Solid<span><Button outline color="hover-bg" className={'mr-1'}>clear</Button><Button outline color="default">save</Button></span></CardHeader>
          <CardBody spacing="lg">
            <Button color="default" className={'mr-1 mb-2'}>default</Button>
            <Button color="primary" className={'mr-1 mb-2'}>primary</Button>
            <Button color="secondary" className={'mr-1 mb-2'}>secondary</Button>
            <Button color="inverse" className={'mr-1 mb-2'}>inverse</Button>
            <Button color="success" className={'mr-1 mb-2'}>success</Button>
            <Button color="info" className={'mr-1 mb-2'}>info</Button>
            <Button color="warning" className={'mr-1 mb-2'}>warning</Button>
            <Button color="danger" className={'mr-1 mb-2'}>danger</Button>
            <Button color="purple" className={'mr-1 mb-2'}>purple</Button>
            <Button color="pink" className={'mr-1 mb-2'}>pink</Button>
            <Button color="link" className={'mr-1 mb-2'}>link</Button>
            <Button color="link-bg" className={'mr-1 mb-2'}>link-bg</Button>
            <Button color="hover" className={'mr-1 mb-2'}>hover</Button>
            <Button color="hover-bg" className={'mr-1 mb-2'}>hover-bg</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg">Outline
            <Button color="hover" className={'round mr-2'}>hover</Button>
          </CardHeader>
          <CardBody spacing="lg">
            <Button outline color="default" className={'mr-1 mb-2'}>default</Button>
            <Button outline color="primary" className={'mr-1 mb-2'}>primary</Button>
            <Button outline color="secondary" className={'mr-1 mb-2'}>secondary</Button>
            <Button outline color="inverse" className={'mr-1 mb-2'}>inverse</Button>
            <Button outline color="success" className={'mr-1 mb-2'}>success</Button>
            <Button outline color="info" className={'mr-1 mb-2'}>info</Button>
            <Button outline color="warning" className={'mr-1 mb-2'}>warning</Button>
            <Button outline color="danger" className={'mr-1 mb-2'}>danger</Button>
            <Button outline color="purple" className={'mr-1 mb-2'}>purple</Button>
            <Button outline color="pink" className={'mr-1 mb-2'}>pink</Button>
            <Button outline color="link" className={'mr-1 mb-2'}>link</Button>
            <Button outline color="hover" className={'mr-1 mb-2'}>hover</Button>
            <Button outline color="hover-bg" className={'mr-1 mb-2'}>hover-bg</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg">Border
            <Button color="hover" className={'round mr-2'}>hover</Button>
          </CardHeader>
          <CardBody spacing="lg">
            <Button color="default" className={'mr-1 mb-2 round btn-border-default'}>default</Button>
            <Button color="primary" className={'mr-1 mb-2 round btn-border-primary'}>primary</Button>
            <Button color="secondary" className={'mr-1 mb-2 round btn-border-secondary'}>secondary</Button>
            <Button color="inverse" className={'mr-1 mb-2 round btn-border-inverse'}>inverse</Button>
            <Button color="success" className={'mr-1 mb-2 rounded-0 btn-border-success'}>success</Button>
            <Button color="info" className={'mr-1 mb-2 rounded-0 btn-border-info'}>info</Button>
            <Button color="warning" className={'mr-1 mb-2 rounded-0 btn-border-warning'}>warning</Button>
            <Button color="danger" className={'mr-1 mb-2 rounded-0 btn-border-danger'}>danger</Button>
            <Button color="purple" className={'mr-1 mb-2 rounded-0 btn-border-purple'}>purple</Button>
            <Button color="pink" className={'mr-1 mb-2 rounded-0 btn-border-pink'}>pink</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg"><span>Solid - .round</span>
           <Button outline color="link" className={'round mr-2'}>outline link</Button>
          </CardHeader>
          <CardBody spacing="lg">
            <Button color="default" className={'round mr-1 mb-2'}>default</Button>
            <Button color="primary" className={'round mr-1 mb-2'}>primary</Button>
            <Button color="secondary" className={'round mr-1 mb-2'}>secondary</Button>
            <Button color="inverse" className={'round mr-1 mb-2'}>inverse</Button>
            <Button color="success" className={'round mr-1 mb-2'}>success</Button>
            <Button color="info" className={'round mr-1 mb-2'}>info</Button>
            <Button color="warning" className={'round mr-1 mb-2'}>warning</Button>
            <Button color="danger" className={'round mr-1 mb-2'}>danger</Button>
            <Button color="link" className={'round mr-1 mb-2'}>link</Button>
            <Button color="link-bg" className={'round mr-1 mb-2'}>link-bg</Button>
            <Button color="hover-bg" className={'round mr-1 mb-2'}>hover-bg</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg"><span>Outline - .round</span>
            <Button outline color="default" className={'round mr-2'}>outline default round</Button>
          </CardHeader>
          <CardBody spacing="lg">
            <Button outline color="default" className={'round mr-2 mb-2'}>default</Button>
            <Button outline color="primary" className={'round mr-2 mb-2'}>primary</Button>
            <Button outline color="secondary" className={'round mr-2 mb-2'}>secondary</Button>
            <Button outline color="inverse" className={'round mr-2 mb-2'}>inverse</Button>
            <Button outline color="success" className={'round mr-2 mb-2'}>success</Button>
            <Button outline color="info" className={'round mr-2 mb-2'}>info</Button>
            <Button outline color="warning" className={'round mr-2 mb-2'}>warning</Button>
            <Button outline color="danger" className={'round mr-2 mb-2'}>danger</Button>
            <Button outline color="link" className={'round mr-1 mb-2'}>link</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg"><span>Outline - .rounded-0</span>
            <Button size="sm" outline color="link" className={'rounded-0 mr-2'}>outline default round-0</Button>
          </CardHeader>
          <CardBody spacing="lg">
            <Button outline color="default" className={'rounded-0 mr-2 mb-2'}>default</Button>
            <Button outline color="primary" className={'rounded-0 mr-2 mb-2'}>primary</Button>
            <Button outline color="secondary" className={'rounded-0 mr-2 mb-2'}>secondary</Button>
            <Button outline color="inverse" className={'rounded-0 mr-2 mb-2'}>inverse</Button>
            <Button outline color="success" className={'rounded-0 mr-2 mb-2'}>success</Button>
            <Button outline color="info" className={'rounded-0 mr-2 mb-2'}>info</Button>
            <Button outline color="warning" className={'rounded-0 mr-2 mb-2'}>warning</Button>
            <Button outline color="danger" className={'rounded-0 mr-2 mb-2'}>danger</Button>
            <Button outline color="link" className={'rounded-0 mr-1 mb-2'}>link</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg"><span>Solid - .round .btn-emphasis</span>
            <Button outline size="sm" color="default" className={'rounded mr-2'}>outline sm default</Button>
          </CardHeader>
          <CardBody spacing="lg">
            <Button color="primary" className={'btn-emphasis round mr-1 mb-2'}>primary</Button>{' '}
            <Button color="secondary" className={'btn-emphasis round mr-1 mb-2'}>secondary</Button>{' '}
            <Button color="inverse" className={'btn-emphasis round mr-1 mb-2'}>inverse</Button>{' '}
            <Button color="success" className={'btn-emphasis round mr-1 mb-2'}>success</Button>{' '}
            <Button color="info" className={'btn-emphasis round mr-1 mb-2'}>info</Button>{' '}
            <Button color="warning" className={'btn-emphasis round mr-1 mb-2'}>warning</Button>{' '}
            <Button color="danger" className={'btn-emphasis round mr-1 mb-2'}>danger</Button>{' '}
            <Button color="link">link</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg">Sizes</CardHeader>
          <CardBody spacing="lg">
            <Button color="primary" size="lg">Large Button</Button>{' '}
            <Button outline color="default" size="lg">Large Button</Button>{' '}
            <Button color="primary" size="lg" className={'round depth ml-3'}>LG (.round .depth)</Button>
            <hr />
            <Button color="primary" size="sm">Small Button</Button>{' '}
            <Button color="default" size="sm">Small Button</Button>
            <hr />
            <Button color="primary" size="xl">XL Button</Button>{' '}
            <Button outline color="default" size="xl">XL Button</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg">Block Level</CardHeader>
          <CardBody spacing="lg">
            <Button color="primary" size="lg" block>Block level button</Button>
            <Button color="default" size="lg" block>Block level button</Button>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg">Active State</CardHeader>
          <CardBody spacing="lg">
            <Row>
              <Col sm="6">
                <Button color="primary" size="lg" active>Primary link</Button>{' '}
                <Button color="default" size="lg" active>Link</Button>
              </Col>
            </Row>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg"><span>Disabled State</span>
            <ButtonGroup className={'mr-3'}>
              <Button outline color="default" className={'btn-transparent'}>5</Button>
              <Button outline color="default" className={'btn-transparent'}>6</Button>
              <Button outline color="default" className={'btn-transparent'}>7</Button>
            </ButtonGroup>
          </CardHeader>
          <CardBody spacing="lg">
            <Row>
              <Col>
                <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
                <Button color="default" size="lg" disabled>Button</Button>
              </Col>
            </Row>
          </CardBody>
        </div>

        <div>
          <CardHeader spacing="lg">Checkbox and Radio Buttons (Stateful Buttons)
            <ButtonGroup size="sm" className={'mr-3'}>
              <Button outline color="default">5</Button>
              <Button outline color="default">6</Button>
              <Button outline color="default">7</Button>
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

                <CardTitle tag="h4">Radio Buttons color="hover-bg"</CardTitle>
                <ButtonGroup className={'mb-2'}>
                  <Button
                    color="hover-bg" onClick={() => this.onRadioBtnClick(1)}
                    active={this.state.rSelected === 1}
                  >One</Button>
                  <Button
                    color="hover-bg" onClick={() => this.onRadioBtnClick(2)}
                    active={this.state.rSelected === 2}
                  >Two</Button>
                  <Button
                    color="hover-bg" onClick={() => this.onRadioBtnClick(3)}
                    active={this.state.rSelected === 3}
                  >Three</Button>
                </ButtonGroup>

                <CardTitle tag="h4">Radio Buttons color="inverse"</CardTitle>
                <ButtonGroup className={'mb-2'}>
                  <Button
                    color="inverse" onClick={() => this.onRadioBtnClick(1)}
                    active={this.state.rSelected === 1}
                  >One</Button>
                  <Button
                    color="inverse" onClick={() => this.onRadioBtnClick(2)}
                    active={this.state.rSelected === 2}
                  >Two</Button>
                  <Button
                    color="inverse" onClick={() => this.onRadioBtnClick(3)}
                    active={this.state.rSelected === 3}
                  >Three</Button>
                </ButtonGroup>

                <CardTitle tag="h4">Radio Buttons color="inverse" outline</CardTitle>
                <ButtonGroup className={'mb-2'}>
                  <Button
                    outline color="inverse" onClick={() => this.onRadioBtnClick(1)}
                    active={this.state.rSelected === 1}
                  >One</Button>
                  <Button
                    outline color="inverse" onClick={() => this.onRadioBtnClick(2)}
                    active={this.state.rSelected === 2}
                  >Two</Button>
                  <Button
                    outline color="inverse" onClick={() => this.onRadioBtnClick(3)}
                    active={this.state.rSelected === 3}
                  >Three</Button>
                </ButtonGroup>
                <p className={'text-muted'}>Selected: <span className={'text-danger'}>{this.state.rSelected}</span></p>
              </Col>
              <Col xs="12" sm="6">
                <CardTitle tag="h4">Checkbox Buttons "outline"</CardTitle>
                <ButtonGroup className={'mb-2'}>
                  <Button
                    outline color="default" onClick={() => this.onCheckboxBtnClick(1)}
                    active={this.state.cSelected.includes(1)}
                  >One</Button>
                  <Button
                    outline color="default" onClick={() => this.onCheckboxBtnClick(2)}
                    active={this.state.cSelected.includes(2)}
                  >Two</Button>
                  <Button
                    outline color="default" onClick={() => this.onCheckboxBtnClick(3)}
                    active={this.state.cSelected.includes(3)}
                  >Three</Button>
                </ButtonGroup>

                <CardTitle tag="h4">Checkbox Buttons default</CardTitle>
                <ButtonGroup className={'mb-2'}>
                  <Button
                    color="default" onClick={() => this.onCheckboxBtnClick(1)}
                    active={this.state.cSelected.includes(1)}
                  >One</Button>
                  <Button
                    color="default" onClick={() => this.onCheckboxBtnClick(2)}
                    active={this.state.cSelected.includes(2)}
                  >Two</Button>
                  <Button
                    color="default" onClick={() => this.onCheckboxBtnClick(3)}
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
              <Button size="sm" outline color="default" className={'round mr-2'} onClick={() => this.onCheckboxBtnClick(4)} active={this.state.cSelected.includes(4)}>Check Button</Button>
              <Button size="sm" outline color="default" className={'round mr-2'} onClick={() => this.onRadioBtnClick(4)} active={this.state.rSelected === 4}>Radio Button</Button>
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
                <Label for="toggler11" className={'mr-3'}>Yes</Label>

                <Input size="sm" type="checkbox" name="toggler12" id="toggler12" className={'btn-radio'} onClick={() => this.onRadioBtnClick(12)} />
                <Label for="toggler12" />
                <Label for="toggler12" className={'mr-3'}>No</Label>

                <Input size="sm" type="checkbox" name="toggler13" id="toggler13" className={'btn-radio'} onClick={() => this.onRadioBtnClick(13)} />
                <Label for="toggler13" />
                <Label for="toggler13" className={'mr-3'}>Maybe</Label>
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
                <Label for="toggler14" className={'mr-3'}>Maybe</Label>
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
          <CardHeader spacing="lg">Icons - .round
            <Button outline color="link" className={'rounded-circle mr-2'}>
              <img src={iconClose} alt="x" />
            </Button>
          </CardHeader>
          <CardBody spacing="lg">
            <Button outline color="link" className={'rounded-circle mr-2'}>×</Button>
            <Button outline color="link" className={'rounded-circle mr-2'}>
              <img src={iconClose} alt="x" />
            </Button>
            <Button outline color="default" size="sm" className={'rounded mr-2'}>
              <img src={iconClose} alt="x" />
            </Button>
            <Button outline color="default" className={'rounded mr-2'}>
              <img src={iconClose} alt="x" />
            </Button>
            <Button outline color="default" size="lg" className={'rounded mr-2'}>
              <img src={iconClose} alt="x" />
            </Button>
            <Button outline color="default" className={'round mr-2'}>
              <img src={iconClose} alt="x" /> <span>Close Me Please</span>
            </Button>
            <Button outline color="default" size="sm" className={'round mr-2'}>
              × <span>Close Me Please</span>
            </Button>
            <Button color="inverse" size="sm" className={'round mr-2'}>
              × <span>Close Me Please</span>
            </Button>
          </CardBody>
        </div>

      </Card>
    );
  }
}

export default UiButtons;
