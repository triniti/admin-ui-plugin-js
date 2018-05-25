import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Collapse, Icon, Row, Screen, Table } from '../../../../src/components';

class UiCollapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collapse: [] };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse(collapseId) {
    const { collapse } = this.state;
    const collapseIndex = collapse.indexOf(collapseId);
    if (collapseIndex > -1) {
      this.setState({
        collapse: [
          ...collapse.slice(0, collapseIndex),
          ...collapse.slice(collapseIndex + 1),
        ],
      });
    } else {
      this.setState({
        collapse: [
          ...collapse,
          collapseId,
        ],
      });
    }
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
              <Button color="toggler" onClick={() => this.toggleCollapse('toggle1')} active={this.state.collapse.includes('toggle1')}>Collapse Header</Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapse.includes('toggle1')}>
              <CardBody>
                <Button color="secondary" onClick={() => this.toggleCollapse('inner1')}><Icon imgSrc="sort" id="sort" /> Collapse Content</Button>
                <Row>
                  <Col xs="12" md="9" lg="6">
                    <Collapse isOpen={this.state.collapse.includes('inner1')}>
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
              <Button color="toggler" onClick={() => this.toggleCollapse('toggle2')} active={this.state.collapse.includes('toggle2')}>Second Example</Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapse.includes('toggle2')}>
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
              <Button color="toggler" onClick={() => this.toggleCollapse('toggle3')} active={this.state.collapse.includes('toggle3')}>Second Example</Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapse.includes('toggle3')}>
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
              <Button color="toggler" onClick={() => this.toggleCollapse('toggle4')} active={this.state.collapse.includes('toggle4')}>Second Example</Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapse.includes('toggle4')}>
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
              <Button radius="circle" color="hover-bg" onClick={() => this.toggleCollapse('code1')} active={this.state.collapse.includes('code1')}>
                <Icon imgSrc="code" size="md" />
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapse.includes('code1')}>
              <CardBody className="pl-0 pr-0 bg-light">
                <pre className="pl-5 pr-3">
                  <code>{`
import React, { Component } from 'react';
import { Icon } from 'reactstrap';

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
`}
                  </code>
                </pre>
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
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">className</th>
                    <td>string</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">isOpen</th>
                    <td>bool</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">navbar</th>
                    <td>bool</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">tag</th>
                    <td>oneOfType</td>
                    <td>'div'</td>
                    <td />
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
