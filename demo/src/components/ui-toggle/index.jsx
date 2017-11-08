import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Collapse, Icon, Row } from '../../../../src/components';

class UiToggle extends Component {
  constructor(props) {
    super(props);
    this.toggleOuter = this.toggleOuter.bind(this);
    this.toggleOuter2 = this.toggleOuter2.bind(this);
    this.toggleInner = this.toggleInner.bind(this);
    this.state = { collapseOuter: false };
  }

  toggleOuter() {
    this.setState({ collapseOuter: !this.state.collapseOuter });
  }

  toggleOuter2() {
    this.setState({ collapseOuter2: !this.state.collapseOuter2 });
  }

  toggleInner() {
    this.setState({ collapseInner: !this.state.collapseInner });
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <Button color="toggler" onClick={this.toggleOuter} active={this.state.collapseOuter}>Toggle Header</Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseOuter}>
          <CardBody spacing="lg">
            <Button color="dark" onClick={this.toggleInner} radius="none">Toggle Content</Button>
            <Row>
              <Col xs="12" md="9" lg="6">
                <Collapse isOpen={this.state.collapseInner}>
                  <Card>
                    <CardBody>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button outline size="lg" radius="none"> Button</Button>
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
          </CardBody>
        </Collapse>

        <CardHeader>
          <Button color="toggler" onClick={this.toggleOuter2} active={this.state.collapseOuter2}>Second Example</Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseOuter2}>
          <CardBody spacing="lg">
            <Row>
              <Col xs="12" md="9" lg="6">
                <Collapse isOpen={this.state.collapseInner}>
                  <Card>
                    <CardBody>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button outline size="lg" radius="none"> Button</Button>
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
    );
  }
}

export default UiToggle;
