import React, { Component } from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Collapse, Icon, Table, Row, Col, Progress, Screen } from '../../../../src/components';

class UiProgress extends Component {
  constructor(props) {
    super(props);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.toggleCode2 = this.toggleCode2.bind(this);
    this.toggleCode3 = this.toggleCode3.bind(this);
    this.state = {
      collapseCode1: false,
      collapseCode2: false,
      collapseCode3: false,
    };
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  toggleCode2() {
    this.setState({ collapseCode2: !this.state.collapseCode2 });
  }

  toggleCode3() {
    this.setState({ collapseCode3: !this.state.collapseCode3 });
  }

  render() {
    return (
  <Screen
    sidenav={<Sidenav activeScreen="progress-bars" />}
    sidenavHeader
    header="Progress Bars"
  // tabs={[
  //   { to: '/welcome', text: 'Tab1' },
  //   { to: '#/test2', text: 'Tab2' },
  // ]}
    primaryActions={<PrimaryActions />}
    body={[

      <Card key="props">
        <CardHeader>Progress Properties</CardHeader>
        <CardBody className="pt-3">
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
              <th scope="row">animated</th>
              <td>bool</td>
              <td></td>
              <td>Animates the background stripes</td>
            </tr>
            <tr>
              <th scope="row">bar</th>
              <td>bool</td>
              <td></td>
              <td>Used in combination with multi</td>
            </tr>
            <tr>
              <th scope="row">barClassName</th>
              <td>string</td>
              <td></td>
              <td></td>
            </tr>
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
              <th scope="row">color</th>
              <td>string</td>
              <td></td>
              <td>primary, secondary, success, info, warning, danger</td>
            </tr>
            <tr>
              <th scope="row">max</th>
              <td>oneOfType</td>
              <td>100</td>
              <td>
                PropTypes.string,<br/>
                PropTypes.number,
              </td>
            </tr>
            <tr>
              <th scope="row">multi</th>
              <td>bool</td>
              <td></td>
              <td>Used in combination with bar.  Added to progress wrapper of progress bar.</td>
            </tr>
            <tr>
              <th scope="row">striped</th>
              <td>bool</td>
              <td></td>
              <td>Striped bar background</td>
            </tr>
            <tr>
              <th scope="row">tag</th>
              <td>string</td>
              <td>'div'</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">value</th>
              <td>oneOfType</td>
              <td>0</td>
              <td>
                Value overlayed on progress bar.<br/>
                PropTypes.string,<br/>
                PropTypes.number,
              </td>
            </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,


      <Card key="progress1">
        <CardHeader>Plain
          <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
              <Icon imgSrc="code" size="md"/>
           </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode1}>
          <CardBody className="pl-5 bg-light">
            <pre>
              <code>
                  {`
import React from 'react';
import { Progress } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
      <Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="20" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="15" />
      </Progress>
  );
};

export default Example;
                  `}
              </code>
            </pre>
          </CardBody>
        </Collapse>
        <CardBody>
          <Row>
            <Col>
              <Progress multi>
                <Progress bar value="15" />
                <Progress bar color="success" value="20" />
                <Progress bar color="info" value="25" />
                <Progress bar color="warning" value="20" />
                <Progress bar color="danger" value="15" />
              </Progress>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="progress2">
        <CardHeader>With Labels
          <Button radius="circle" color="hover-bg" onClick={this.toggleCode2} active={this.state.collapseCode2}>
            <Icon imgSrc="code" size="md"/>
          </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode2}>
          <CardBody className="pl-5 bg-light">
            <pre>
              <code>
                  {`
import React from 'react';
import { Progress } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
    <Progress multi>
      <Progress bar value="15">Meh</Progress>
      <Progress bar color="success" value="35">Wow!</Progress>
      <Progress bar color="warning" value="25">25%</Progress>
      <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
    </Progress>
  );
};

export default Example;
                    `}
                </code>
              </pre>
            </CardBody>
          </Collapse>
        <CardBody>
          <Row>
            <Col>
              <Progress multi>
                <Progress bar value="15">Meh</Progress>
                <Progress bar color="success" value="35">Wow!</Progress>
                <Progress bar color="warning" value="25">25%</Progress>
                <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
              </Progress>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="progress3">
        <CardHeader>Stripes and Animations
          <Button radius="circle" color="hover-bg" onClick={this.toggleCode3} active={this.state.collapseCode3}>
            <Icon imgSrc="code" size="md"/>
          </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode3}>
          <CardBody className="pl-5 bg-light">
            <pre>
              <code>
                  {`
import React from 'react';
import { Progress } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
    <Progress multi>
      <Progress bar striped value="15">Stripes</Progress>
      <Progress bar animated color="success" value="30">Animated Stripes</Progress>
      <Progress bar color="info" value="25">Plain</Progress>
    </Progress>
  );
};

export default Example;
                    `}
                </code>
              </pre>
            </CardBody>
          </Collapse>
        <CardBody>
          <Row>
            <Col>
              <Progress multi>
                <Progress bar striped value="15">Stripes</Progress>
                <Progress bar animated color="success" value="30">Animated Stripes</Progress>
                <Progress bar color="info" value="25">Plain</Progress>
              </Progress>
            </Col>
          </Row>
        </CardBody>
      </Card>,
  ]}
  />
    );
  }
}

export default UiProgress;
