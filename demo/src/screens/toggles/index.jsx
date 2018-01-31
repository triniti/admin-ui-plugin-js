import React, { Component } from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Collapse, Icon, Row, Screen } from '../../../../src/components';

class UiToggle extends Component {
  constructor(props) {
    super(props);
    this.toggleOuter = this.toggleOuter.bind(this);
    this.toggleOuter2 = this.toggleOuter2.bind(this);
    this.toggleOuter3 = this.toggleOuter3.bind(this);
    this.toggleOuter4 = this.toggleOuter4.bind(this);
    this.toggleInner = this.toggleInner.bind(this);
    this.state = { collapseOuter: false };
  }

  toggleOuter() {
    this.setState({ collapseOuter: !this.state.collapseOuter });
  }

  toggleOuter2() {
    this.setState({ collapseOuter2: !this.state.collapseOuter2 });
  }

  toggleOuter3() {
    this.setState({ collapseOuter3: !this.state.collapseOuter3 });
  }

  toggleOuter4() {
    this.setState({ collapseOuter4: !this.state.collapseOuter4 });
  }

  toggleInner() {
    this.setState({ collapseInner: !this.state.collapseInner });
  }

  render() {
    return (
    <Screen
      sidenav={<Sidenav activeScreen="toggles" />}
      sidenavHeader
      header="Toggles"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
      primaryActions={<PrimaryActions />}
      body={[
      <Card key="toggle1" className="mb-0">
        <CardHeader fullwidth>
          <Button color="toggler" onClick={this.toggleOuter} active={this.state.collapseOuter}>Toggle Header - fullwidth</Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseOuter}>
          <CardBody>
            <Button color="secondary" onClick={this.toggleInner}><Icon imgSrc="sort" id="sort" inverse /> Toggle Content</Button>
            <Row>
              <Col xs="12" md="9" lg="6">
                <Collapse isOpen={this.state.collapseInner}>
                  <Card>
                    <CardBody>
                      <CardTitle>Card Title 1</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button outline> Button</Button>
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>,

      <Card key="toggle2">
        <CardHeader fullwidth>
          <Button color="toggler" onClick={this.toggleOuter2} active={this.state.collapseOuter2}>Second Example  - fullwidth</Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseOuter2}>
          <CardBody>
            <Row>
              <Col xs="12" md="9" lg="6">
                <Card>
                  <CardBody>
                    <CardTitle>Card Title 2</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button outline> Button</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>,

      <Card key="toggle3" className="mb-0">
        <CardHeader>
          <Button color="toggler" onClick={this.toggleOuter3} active={this.state.collapseOuter3}>Second Example</Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseOuter3}>
          <CardBody>
            <Row>
              <Col xs="12" md="9" lg="6">
                <Card>
                  <CardBody>
                    <CardTitle>Card Title 3</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button outline> Button</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>,

      <Card key="toggle4">
        <CardHeader>
          <Button color="toggler" onClick={this.toggleOuter4} active={this.state.collapseOuter4}>Second Example</Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseOuter4}>
          <CardBody>
            <Row>
              <Col xs="12" md="9" lg="6">
                <Card>
                  <CardBody>
                    <CardTitle>Card Title 4</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button outline> Button</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>,
      ]}
      />
    );
  }
}

export default UiToggle;
