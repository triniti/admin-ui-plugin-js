import React, { Component } from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Col, Container, Row, Collapse, Icon, Table, Screen } from '../../../../src/components';
import './styles.scss';

class UiLayout extends Component {
  constructor(props) {
    super(props);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.toggleCode2 = this.toggleCode2.bind(this);
    this.state = {
      collapseCode1: false,
      collapseCode2: false,
    };
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  toggleCode2() {
    this.setState({ collapseCode2: !this.state.collapseCode2 });
  }

  render() {
    return (
  <Screen
    sidenav={<Sidenav activeScreen="layouts" />}
    sidenavHeader
    header="Layouts"
  // tabs={[
  //   { to: '/welcome', text: 'Tab1' },
  //   { to: '#/test2', text: 'Tab2' },
  // ]}
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="layout1">
        <CardHeader>Full Width Columns
          <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
              <Icon imgSrc="code" size="md"/>
           </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode1}>
          <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
              <code>
                  {`
import React from 'react';
import { Col, Row } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
      <Row>
            <Col>
              <div className="ui-cols">
                <Row>
                  <Col>.col</Col>
                </Row>
                <Row>
                  <Col xs="3">.col-3</Col>
                  <Col xs="auto">.col-auto - variable width content</Col>
                  <Col xs="3">.col-3</Col>
                </Row>
                <Row>
                  <Col xs="6">.col-6</Col>
                  <Col xs="6">.col-6</Col>
                </Row>
                <Row>
                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                  <Col sm="4">.col .col-sm-4</Col>
                </Row>
                <Row>
                  <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>.col .col-sm-6 .col-sm-push-2 .col-sm-pull-2
                    .col-sm-offset-2
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md={{ size: 8, offset: 2 }}>.col .col-12 .col-md-6 .col-md-offset-2</Col>
                </Row>
                <Row>
                  <Col xs="3" sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
                  <Col xs="3" sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
                </Row>
              </div>
            </Col>
          </Row>
  );
};

export default Example;
                  `}
              </code>
            </pre>
          </CardBody>
        </Collapse>
        <Container fluid>
          <Row>
            <Col>
              <div className="ui-cols">
                <Row>
                  <Col>.col</Col>
                </Row>
                <Row>
                  <Col xs="3">.col-3</Col>
                  <Col xs="auto">.col-auto - variable width content</Col>
                  <Col xs="3">.col-3</Col>
                </Row>
                <Row>
                  <Col xs="6">.col-6</Col>
                  <Col xs="6">.col-6</Col>
                </Row>
                <Row>
                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                  <Col sm="4">.col .col-sm-4</Col>
                </Row>
                <Row>
                  <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>.col .col-sm-6 .col-sm-push-2 .col-sm-pull-2
                    .col-sm-offset-2
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md={{ size: 8, offset: 2 }}>.col .col-12 .col-md-6 .col-md-offset-2</Col>
                </Row>
                <Row>
                  <Col xs="3" sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
                  <Col xs="3" sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>,

      <Card key="layout2">
        <CardHeader>Surrounded by a Container
          <Button radius="circle" color="hover-bg" onClick={this.toggleCode2} active={this.state.collapseCode2}>
              <Icon imgSrc="code" size="md"/>
           </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode2}>
          <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
              <code>
                  {`
import React from 'react';
import { Col, Row } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
      <Row>
            <Col>
              <Container className="ui-cols">
                <Row>
                  <Col>.col</Col>
                </Row>
                <Row>
                  <Col xs="3">.col-3</Col>
                  <Col xs="auto">.col-auto - variable width content</Col>
                  <Col xs="3">.col-3</Col>
                </Row>
                <Row>
                  <Col xs="6">.col-6</Col>
                  <Col xs="6">.col-6</Col>
                </Row>
                <Row>
                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                  <Col sm="4">.col .col-sm-4</Col>
                </Row>
                <Row>
                  <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
                  .col .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md={{ size: 8, offset: 2 }}>.col .col-12 .col-md-6 .col-md-offset-2</Col>
                </Row>
                <Row>
                  <Col xs="3" sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
                  <Col xs="3" sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
                </Row>
              </Container>
            </Col>
          </Row>
  );
};

export default Example;
                  `}
              </code>
            </pre>
          </CardBody>
        </Collapse>
        <CardBody className="bg-gray">
          <Row>
            <Col>
              <Container className="ui-cols">
                <Row>
                  <Col>.col</Col>
                </Row>
                <Row>
                  <Col xs="3">.col-3</Col>
                  <Col xs="auto">.col-auto - variable width content</Col>
                  <Col xs="3">.col-3</Col>
                </Row>
                <Row>
                  <Col xs="6">.col-6</Col>
                  <Col xs="6">.col-6</Col>
                </Row>
                <Row>
                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                  <Col sm="4">.col .col-sm-4</Col>
                </Row>
                <Row>
                  <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
                  .col .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md={{ size: 8, offset: 2 }}>.col .col-12 .col-md-6 .col-md-offset-2</Col>
                </Row>
                <Row>
                  <Col xs="3" sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
                  <Col xs="3" sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="props1">
        <CardHeader>Container Properties</CardHeader>
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
              <th scope="row">fluid</th>
              <td>bool</td>
              <td></td>
              <td>applies .container-fluid class</td>
            </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props2">
        <CardHeader>Row Properties</CardHeader>
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
              <th scope="row">noGutters</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props3">
        <CardHeader>Col Properties</CardHeader>
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
              <th scope="row">Col</th>
              <td>xs: columnProps,<br/>
                  sm: columnProps,<br/>
                  md: columnProps,<br/>
                  lg: columnProps,<br/>
                  xl: columnProps,<br/>
                  widths: PropTypes.array,
              </td>
              <td></td>
              <td><br/><br/><br/><br/><br/>
                  override the predefined width (the ones above) with your own custom widths.
                  see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116</td>
            </tr>
            <tr>
              <th scope="row">columnProps</th>
              <td>oneOfType</td>
              <td></td>
              <td>PropTypes.string,<br/>
                  PropTypes.number,<br/>
                  PropTypes.bool,<br/>
                  PropTypes.shape,<br/>
              </td>
            </tr>
            <tr>
              <th scope="row">offset</th>
              <td>stringOrNumberProp</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">order</th>
              <td>stringOrNumberProp</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">size</th>
              <td>oneOfType</td>
              <td></td>
              <td>PropTypes.bool,
                  PropTypes.number,<br/>
                  PropTypes.string,<br/>
                  example size values:<br/>
                  12 || "12" => col-12 or col-`width`-12<br/>
                  auto => col-auto or col-`width`-auto<br/>
                  true => col or col-`width`<br/>
              </td>
            </tr>
            <tr>
              <th scope="row">stringOrNumberProp</th>
              <td>oneOfType</td>
              <td></td>
              <td>PropTypes.number,<br/>PropTypes.string</td>
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

export default UiLayout;
