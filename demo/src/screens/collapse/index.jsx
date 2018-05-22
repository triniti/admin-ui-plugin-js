import React, { Component } from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Collapse, Icon, Row, Screen, Table } from '../../../../src/components';

class UiCollapse extends Component {
  constructor(props) {
    super(props);
    this.toggleOuter = this.toggleOuter.bind(this);
    this.toggleOuter2 = this.toggleOuter2.bind(this);
    this.toggleOuter3 = this.toggleOuter3.bind(this);
    this.toggleOuter4 = this.toggleOuter4.bind(this);
    this.toggleInner = this.toggleInner.bind(this);
    this.state = {
      collapseOuter: null,
      collapseCode1: false
    };

    this.toggleCode1 = this.toggleCode1.bind(this);
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

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="collapse" />}
        sidenavHeader
        header="Collapse"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="toggle1" className="mb-0">
            <CardHeader toggler>
              <Button color="toggler" onClick={this.toggleOuter} active={this.state.collapseOuter}>Collapse Header</Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseOuter}>
              <CardBody>
                <Button color="secondary" onClick={this.toggleInner}><Icon imgSrc="sort" id="sort" /> Collapse Content</Button>
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
            <CardHeader toggler>
              <Button color="toggler" onClick={this.toggleOuter2} active={this.state.collapseOuter2}>Second Example</Button>
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
            <CardHeader toggler>
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
            <CardHeader toggler>
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

          <Card key="props1">
            <CardHeader>
              Collapse Properties
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
<code>{`
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
             Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Example;
`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">children</th>
                    <td>node</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">className</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">isOpen</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">navbar</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">tag</th>
                    <td>oneOfType</td>
                    <td>'div'</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,
      ]}
      />
    );
  }
}

export default UiCollapse;
